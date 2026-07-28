import type { ContactPayload } from "./types";

const LIMITS = {
  name: { min: 1, max: 100 },
  email: { min: 3, max: 254 },
  phone: { max: 40 },
  subject: { min: 1, max: 200 },
  message: { min: 1, max: 5000 },
  turnstileToken: { min: 1, max: 2048 },
} as const;

// Practical email shape check (not full RFC 5322).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asTrimmedString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  return value.trim();
}

/**
 * Validates and normalizes the contact JSON body.
 * Returns `{ ok: true, data }` or `{ ok: false, error }` for a 400 response.
 */
export function validateContactPayload(
  body: unknown,
): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, error: "Request body must be a JSON object" };
  }

  const raw = body as Record<string, unknown>;

  const name = asTrimmedString(raw.name);
  if (name === null || name.length < LIMITS.name.min) {
    return { ok: false, error: "Name is required" };
  }
  if (name.length > LIMITS.name.max) {
    return { ok: false, error: `Name must be at most ${LIMITS.name.max} characters` };
  }

  const email = asTrimmedString(raw.email);
  if (email === null || email.length < LIMITS.email.min) {
    return { ok: false, error: "Email is required" };
  }
  if (email.length > LIMITS.email.max || !EMAIL_RE.test(email)) {
    return { ok: false, error: "Email is invalid" };
  }

  let phone: string | undefined;
  if (raw.phone !== undefined && raw.phone !== null && raw.phone !== "") {
    const phoneValue = asTrimmedString(raw.phone);
    if (phoneValue === null) {
      return { ok: false, error: "Phone must be a string" };
    }
    if (phoneValue.length > LIMITS.phone.max) {
      return {
        ok: false,
        error: `Phone must be at most ${LIMITS.phone.max} characters`,
      };
    }
    phone = phoneValue;
  }

  const subject = asTrimmedString(raw.subject);
  if (subject === null || subject.length < LIMITS.subject.min) {
    return { ok: false, error: "Subject is required" };
  }
  if (subject.length > LIMITS.subject.max) {
    return {
      ok: false,
      error: `Subject must be at most ${LIMITS.subject.max} characters`,
    };
  }

  const message = asTrimmedString(raw.message);
  if (message === null || message.length < LIMITS.message.min) {
    return { ok: false, error: "Message is required" };
  }
  if (message.length > LIMITS.message.max) {
    return {
      ok: false,
      error: `Message must be at most ${LIMITS.message.max} characters`,
    };
  }

  const turnstileToken = asTrimmedString(raw.turnstileToken);
  if (turnstileToken === null || turnstileToken.length < LIMITS.turnstileToken.min) {
    return { ok: false, error: "Turnstile token is required" };
  }
  if (turnstileToken.length > LIMITS.turnstileToken.max) {
    return { ok: false, error: "Turnstile token is invalid" };
  }

  const data: ContactPayload = {
    name,
    email,
    subject,
    message,
    turnstileToken,
  };
  if (phone !== undefined) {
    data.phone = phone;
  }

  return { ok: true, data };
}
