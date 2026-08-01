import {
  CONTACT_EMAIL_RE,
  CONTACT_LIMITS,
  type ContactPayload,
} from "../../../shared/contact/contract";
import { isPlainObject } from "../../../shared/json";

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
  if (!isPlainObject(body)) {
    return { ok: false, error: "Request body must be a JSON object" };
  }

  const name = asTrimmedString(body.name);
  if (name === null || name.length < CONTACT_LIMITS.name.min) {
    return { ok: false, error: "Name is required" };
  }
  if (name.length > CONTACT_LIMITS.name.max) {
    return {
      ok: false,
      error: `Name must be at most ${CONTACT_LIMITS.name.max} characters`,
    };
  }

  const email = asTrimmedString(body.email);
  if (email === null || email.length < CONTACT_LIMITS.email.min) {
    return { ok: false, error: "Email is required" };
  }
  if (email.length > CONTACT_LIMITS.email.max || !CONTACT_EMAIL_RE.test(email)) {
    return { ok: false, error: "Email is invalid" };
  }

  let phone: string | undefined;
  if (body.phone !== undefined && body.phone !== null && body.phone !== "") {
    const phoneValue = asTrimmedString(body.phone);
    if (phoneValue === null) {
      return { ok: false, error: "Phone must be a string" };
    }
    if (phoneValue.length > CONTACT_LIMITS.phone.max) {
      return {
        ok: false,
        error: `Phone must be at most ${CONTACT_LIMITS.phone.max} characters`,
      };
    }
    phone = phoneValue;
  }

  const subject = asTrimmedString(body.subject);
  if (subject === null || subject.length < CONTACT_LIMITS.subject.min) {
    return { ok: false, error: "Subject is required" };
  }
  if (subject.length > CONTACT_LIMITS.subject.max) {
    return {
      ok: false,
      error: `Subject must be at most ${CONTACT_LIMITS.subject.max} characters`,
    };
  }

  const message = asTrimmedString(body.message);
  if (message === null || message.length < CONTACT_LIMITS.message.min) {
    return { ok: false, error: "Message is required" };
  }
  if (message.length > CONTACT_LIMITS.message.max) {
    return {
      ok: false,
      error: `Message must be at most ${CONTACT_LIMITS.message.max} characters`,
    };
  }

  const turnstileToken = asTrimmedString(body.turnstileToken);
  if (
    turnstileToken === null ||
    turnstileToken.length < CONTACT_LIMITS.turnstileToken.min
  ) {
    return { ok: false, error: "Turnstile token is required" };
  }
  if (turnstileToken.length > CONTACT_LIMITS.turnstileToken.max) {
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
