/** Contact form API payload — must match the Worker contract. */
export type ContactFormPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  turnstileToken: string;
};

export type ContactSubmitResult =
  | { ok: true }
  | { ok: false; status: number; message: string };

const DEFAULT_CONTACT_API_URL = "/api/contact";

export function getContactApiUrl(): string {
  const fromEnv = import.meta.env.VITE_CONTACT_API_URL?.trim();
  return fromEnv && fromEnv.length > 0 ? fromEnv : DEFAULT_CONTACT_API_URL;
}

function messageForStatus(status: number, bodyMessage?: string): string {
  if (bodyMessage && bodyMessage.trim().length > 0) {
    return bodyMessage.trim();
  }
  if (status === 429) {
    return "Too many requests. Please wait a few minutes and try again.";
  }
  if (status === 400) {
    return "We could not send your message. Check your details and the security check, then try again.";
  }
  return "Something went wrong sending your message. Please try again later.";
}

async function readErrorMessage(response: Response): Promise<string | undefined> {
  try {
    const data: unknown = await response.json();
    if (
      typeof data === "object" &&
      data !== null &&
      "error" in data &&
      typeof (data as { error: unknown }).error === "string"
    ) {
      return (data as { error: string }).error;
    }
    if (
      typeof data === "object" &&
      data !== null &&
      "message" in data &&
      typeof (data as { message: unknown }).message === "string"
    ) {
      return (data as { message: string }).message;
    }
  } catch {
    // Non-JSON body — fall through to status defaults.
  }
  return undefined;
}

/** POST contact form to the Worker API. Presentation stays in the page component. */
export async function submitContactForm(
  payload: ContactFormPayload,
): Promise<ContactSubmitResult> {
  const response = await fetch(getContactApiUrl(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    return { ok: true };
  }

  const bodyMessage = await readErrorMessage(response);
  return {
    ok: false,
    status: response.status,
    message: messageForStatus(response.status, bodyMessage),
  };
}

export type ContactFormFields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export function validateContactFields(
  fields: ContactFormFields,
): Partial<Record<keyof ContactFormFields, string>> {
  const errors: Partial<Record<keyof ContactFormFields, string>> = {};
  const name = fields.name.trim();
  const email = fields.email.trim();
  const subject = fields.subject.trim();
  const message = fields.message.trim();

  if (!name) errors.name = "Name is required.";
  else if (name.length > 120) errors.name = "Name is too long.";

  if (!email) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address.";
  } else if (email.length > 254) {
    errors.email = "Email is too long.";
  }

  if (fields.phone.trim().length > 40) {
    errors.phone = "Phone number is too long.";
  }

  if (!subject) errors.subject = "Subject is required.";
  else if (subject.length > 200) errors.subject = "Subject is too long.";

  if (!message) errors.message = "Message is required.";
  else if (message.length > 5000) errors.message = "Message is too long.";

  return errors;
}

export function toContactPayload(
  fields: ContactFormFields,
  turnstileToken: string,
): ContactFormPayload {
  const phone = fields.phone.trim();
  return {
    name: fields.name.trim(),
    email: fields.email.trim(),
    ...(phone ? { phone } : {}),
    subject: fields.subject.trim(),
    message: fields.message.trim(),
    turnstileToken,
  };
}
