/**
 * Shared contact-form contract for the SPA and Cloudflare Worker.
 * Keep field limits and payload shape here so client/server cannot drift.
 */

export const CONTACT_LIMITS = {
  name: { min: 1, max: 100 },
  email: { min: 3, max: 254 },
  phone: { max: 40 },
  subject: { min: 1, max: 200 },
  message: { min: 1, max: 5000 },
  turnstileToken: { min: 1, max: 2048 },
} as const;

/** Practical email shape check (not full RFC 5322). */
export const CONTACT_EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Request body accepted by POST /api/contact. */
export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  turnstileToken: string;
};

export type ContactFormFields = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
