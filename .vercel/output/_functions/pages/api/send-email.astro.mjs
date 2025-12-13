import { Resend } from 'resend';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { Html, Tailwind, Head, Img } from '@react-email/components';
import DOMPurify from 'isomorphic-dompurify';
import { z } from 'zod';
export { renderers } from '../../renderers.mjs';

const EmailTemplate = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  message
}) => /* @__PURE__ */ jsx(Html, { children: /* @__PURE__ */ jsxs(
  Tailwind,
  {
    config: {
      theme: {
        extend: {
          colors: {
            wwRed: "#803D3B",
            wwYellow: "#FFD57E",
            wwBlack: "#1E1E1E",
            offwhite: "#fafbfb"
          },
          spacing: {
            0: "0px",
            20: "20px",
            45: "45px"
          }
        }
      }
    },
    children: [
      /* @__PURE__ */ jsx(Head, {}),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsx(
          Img,
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJEAS_f_qAkup4ZZkUxWwrRS_f7BLeo6culA&s",
            alt: "Netlify",
            className: "mx-auto my-20 size-64"
          }
        ),
        /* @__PURE__ */ jsx("h1", { children: "New Message from wittnerwollman.com:" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm/6 font-medium text-gray-900", children: "First Name" }),
            /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("p", { className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-wwRed sm:text-sm/6", children: firstName }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm/6 font-medium text-gray-900", children: "Last Name" }),
            /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("p", { className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-wwRed sm:text-sm/6", children: lastName }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm/6 font-medium text-gray-900", children: "Email" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 grid grid-cols-1", children: [
              /* @__PURE__ */ jsx("p", { className: "col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6", children: email }),
              /* @__PURE__ */ jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  className: "pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4",
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" }),
                    /* @__PURE__ */ jsx("path", { d: "M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm/6 font-medium text-gray-900", children: "Phone Number" }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 grid grid-cols-1", children: [
              /* @__PURE__ */ jsx("p", { className: "col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:pl-9 sm:text-sm/6", children: phoneNumber }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "currentColor",
                  className: "pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z",
                      clipRule: "evenodd"
                    }
                  )
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("label", { className: "block text-sm/6 font-medium text-gray-900", children: [
            firstName,
            " ",
            lastName,
            "'s Message"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("p", { className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-wwRed sm:text-sm/6", children: message }) })
        ] })
      ] })
    ]
  }
) });

const emailSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name too long").regex(/^[a-zA-Z\s-']+$/, "Invalid characters in first name"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name too long").regex(/^[a-zA-Z\s-']+$/, "Invalid characters in last name"),
  email: z.string().email("Invalid email format").max(254, "Email too long"),
  subject: z.string().min(1, "Subject is required").max(200, "Subject too long"),
  phoneNumber: z.string().refine((phone) => {
    if (!phone) return true;
    return /^\+?[\d\s\-\(\)]{10,20}$/.test(phone);
  }, "Invalid phone number format"),
  message: z.string().min(1, "Message is required").max(2e3, "Message too long")
});
z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name too long").regex(/^[a-zA-Z\s-']+$/, "Invalid characters in first name"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name too long").regex(/^[a-zA-Z\s-']+$/, "Invalid characters in last name"),
  email: z.string().email("Invalid email format").max(254, "Email too long"),
  phoneNumber: z.string().refine((phone) => {
    if (!phone) return true;
    return /^\+?[\d\s\-\(\)]{10,20}$/.test(phone);
  }, "Invalid phone number format"),
  date: z.string().refine((date) => {
    const parsed = new Date(date);
    return !isNaN(parsed.getTime()) && parsed > /* @__PURE__ */ new Date();
  }, "Invalid future date"),
  address: z.string().min(1, "Address is required").max(200, "Address too long")
});
z.object({
  email: z.string().email("Invalid email format").max(254, "Email too long"),
  firstName: z.string().optional().refine((name) => {
    if (!name) return true;
    return name.length <= 50 && /^[a-zA-Z\s-']+$/.test(name);
  }, "Invalid first name")
});
const RATE_LIMITS = {
  email: {
    windowMs: 15 * 60 * 1e3,
    // 15 minutes
    maxRequests: 5
    // 5 emails per 15 minutes
  }};
function sanitizeHtml(input) {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    // No HTML tags allowed
    ALLOWED_ATTR: []
  });
}
function validateAndSanitize(schema, data) {
  console.log("Validation::validateAndSanitize");
  try {
    const parsed = schema.parse(data);
    const sanitized = sanitizeObject(parsed);
    return { success: true, data: sanitized };
  } catch (error) {
    console.error("Validate Error Caught");
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.errors.map(
          (err) => `${err.path.join(".")}: ${err.message}`
        )
      };
    }
    return {
      success: false,
      errors: ["Validation failed"]
    };
  }
}
function sanitizeObject(obj) {
  if (typeof obj === "string") {
    return sanitizeHtml(obj);
  }
  if (Array.isArray(obj)) {
    return obj.map(sanitizeObject);
  }
  if (obj && typeof obj === "object") {
    const sanitized = {};
    for (const [key, value] of Object.entries(obj)) {
      sanitized[key] = sanitizeObject(value);
    }
    return sanitized;
  }
  return obj;
}
const rateLimitStore = /* @__PURE__ */ new Map();
function checkRateLimit(ip, limit) {
  const now = Date.now();
  const key = `${ip}_${limit.windowMs}_${limit.maxRequests}`;
  const record = rateLimitStore.get(key);
  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + limit.windowMs
    });
    return {
      allowed: true,
      remaining: limit.maxRequests - 1,
      resetTime: now + limit.windowMs
    };
  }
  if (record.count >= limit.maxRequests) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: record.resetTime
    };
  }
  record.count++;
  return {
    allowed: true,
    remaining: limit.maxRequests - record.count,
    resetTime: record.resetTime
  };
}

const prerender = false;
const resend = new Resend("re_j4tqYkY9_GJTw1vJatLEZC1yZs79L2gCy");
const POST = async ({ request }) => {
  const clientIP = getClientIPFromRequest(request);
  const rateLimit = checkRateLimit(clientIP, RATE_LIMITS.email);
  if (!rateLimit.allowed) {
    return new Response(
      JSON.stringify({
        error: "Too many requests. Please try again later.",
        resetTime: new Date(rateLimit.resetTime).toISOString()
      }),
      {
        status: 429,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const validation = validateAndSanitize(emailSchema, body);
  if (!validation.success) {
    const v = validation;
    return new Response(
      JSON.stringify({
        error: "Validation failed",
        details: v.errors
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
  const { firstName, lastName, email, subject, phoneNumber, message } = validation.data;
  const { data, error } = await resend.emails.send({
    from: "contact@tbdronetours.com",
    // rename your envs to NON-PUBLIC
    to: email,
    subject,
    react: await EmailTemplate({
      firstName,
      lastName,
      phoneNumber,
      email,
      message
    })
  });
  if (error) {
    return new Response(JSON.stringify(error), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
function getClientIPFromRequest(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
