import type { APIRoute } from "astro";
import { Resend } from "resend";
import { EmailTemplate } from "@/globals/emailTemplates/basicEmail";

import {
  checkRateLimit,
  emailSchema,
  RATE_LIMITS,
  validateAndSanitize,
} from "@/lib/validation";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  // --- Rate limiting (per IP) ---
  const clientIP = getClientIPFromRequest(request);
  const rateLimit = checkRateLimit(clientIP, RATE_LIMITS.email);

  if (!rateLimit.allowed) {
    return new Response(
      JSON.stringify({
        error: "Too many requests. Please try again later.",
        resetTime: new Date(rateLimit.resetTime).toISOString(),
      }),
      {
        status: 429,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  // --- Parse & validate body ---
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const validation = validateAndSanitize(emailSchema, body);

  if (!validation.success) {
    const v = validation as { success: false; errors: string[] };

    return new Response(
      JSON.stringify({
        error: "Validation failed",
        details: v.errors,
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const { firstName, lastName, email, subject, phoneNumber, message } =
    validation.data;

  const { data, error } = await resend.emails.send({
    from: import.meta.env.SENDING_EMAIL, // rename your envs to NON-PUBLIC
    to: email,
    subject,
    react: EmailTemplate({
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
    }),
  });

  if (error) {
    return new Response(JSON.stringify(error), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

// Helper: get IP from Astro/Fetch Request
function getClientIPFromRequest(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}
