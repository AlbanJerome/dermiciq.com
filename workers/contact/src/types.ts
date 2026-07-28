/** Request body accepted by POST /api/contact. */
export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  turnstileToken: string;
};

export type Env = {
  TURNSTILE_SECRET: string;
  RESEND_API_KEY: string;
  /** Verified Resend sender, e.g. `DermicIQ <noreply@dermiciq.com>`. */
  CONTACT_FROM: string;
  /** Inbox that receives form submissions. */
  CONTACT_TO: string;
  CONTACT_RATE_LIMITER: RateLimit;
};
