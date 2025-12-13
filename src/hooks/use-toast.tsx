"use client";

import { useCallback } from "react";
import { toast as hotToast } from "react-hot-toast";

export type ToastVariant = "default" | "success" | "error";

export interface ToastOptions {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

function formatMessage({ title, description }: ToastOptions): string {
  if (title && description) return `${title} – ${description}`;
  if (description) return description;
  return title ?? "";
}

/**
 * Imperative toast function, similar to shadcn's `toast({ ... })`,
 * but powered by react-hot-toast.
 */
export function toast(options: ToastOptions) {
  const message = formatMessage(options);
  const duration = options.duration;

  switch (options.variant) {
    case "success":
      return hotToast.success(message, { duration });
    case "error":
      return hotToast.error(message, { duration });
    default:
      return hotToast(message, { duration });
  }
}

/**
 * Hook version, so existing `const { toast } = useToast()` usage still works.
 */
export function useToast() {
  const showToast = useCallback((options: ToastOptions) => toast(options), []);

  return {
    toast: showToast,
    // dismiss by id or all
    dismiss: (toastId?: string) => {
      if (toastId) hotToast.dismiss(toastId);
      else hotToast.dismiss();
    },
  };
}
