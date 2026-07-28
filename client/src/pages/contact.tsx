import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteContent } from "@/config/siteContent";
import { cn } from "@/lib/utils";
import {
  submitContactForm,
  toContactPayload,
  validateContactFields,
  type ContactFormFields,
} from "@/lib/contactForm";

const TURNSTILE_SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
      theme?: "light" | "dark" | "auto";
    },
  ) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const emptyFields: ContactFormFields = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function loadTurnstileScript(): Promise<TurnstileApi> {
  if (window.turnstile) {
    return Promise.resolve(window.turnstile);
  }

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${TURNSTILE_SCRIPT_SRC}"]`,
  );
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => {
        if (window.turnstile) resolve(window.turnstile);
        else reject(new Error("Turnstile failed to load"));
      });
      existing.addEventListener("error", () => reject(new Error("Turnstile failed to load")));
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.turnstile) resolve(window.turnstile);
      else reject(new Error("Turnstile failed to load"));
    };
    script.onerror = () => reject(new Error("Turnstile failed to load"));
    document.head.appendChild(script);
  });
}

export default function ContactPage() {
  const p = siteContent.pages.contact;
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() ?? "";
  const formId = useId();

  const [fields, setFields] = useState<ContactFormFields>(emptyFields);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactFormFields, string>>
  >({});
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const widgetHostRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!siteKey || !widgetHostRef.current) return;

    let cancelled = false;

    loadTurnstileScript()
      .then((turnstile) => {
        if (cancelled || !widgetHostRef.current) return;
        if (widgetIdRef.current) {
          turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
        widgetIdRef.current = turnstile.render(widgetHostRef.current, {
          sitekey: siteKey,
          theme: "light",
          callback: (token) => {
            setTurnstileToken(token);
            setTurnstileError(null);
          },
          "expired-callback": () => {
            setTurnstileToken("");
            setTurnstileError("Security check expired. Please complete it again.");
          },
          "error-callback": () => {
            setTurnstileToken("");
            setTurnstileError("Security check failed to load. Please refresh and try again.");
          },
        });
      })
      .catch(() => {
        if (!cancelled) {
          setTurnstileError("Security check failed to load. Please refresh and try again.");
        }
      });

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey]);

  const updateField = (key: keyof ContactFormFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const resetTurnstile = () => {
    setTurnstileToken("");
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);

    const errors = validateContactFields(fields);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    if (!siteKey) {
      setTurnstileError("Contact form is not configured yet. Please try again later.");
      return;
    }

    const token =
      turnstileToken ||
      (
        event.currentTarget.querySelector(
          'input[name="cf-turnstile-response"]',
        ) as HTMLInputElement | null
      )?.value?.trim() ||
      "";

    if (!token) {
      setTurnstileError("Please complete the security check before sending.");
      return;
    }

    setSubmitting(true);
    try {
      const result = await submitContactForm(toContactPayload(fields, token));
      if (result.ok) {
        setSucceeded(true);
        setFields(emptyFields);
        resetTurnstile();
        return;
      }
      setSubmitError(result.message);
      resetTurnstile();
    } catch {
      setSubmitError("Something went wrong sending your message. Please try again later.");
      resetTurnstile();
    } finally {
      setSubmitting(false);
    }
  };

  const fieldClass = (hasError: boolean) =>
    cn(
      "mt-1.5 w-full rounded-md border bg-background px-3 py-2.5 text-sm text-foreground",
      "placeholder:text-muted-foreground/70",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      hasError ? "border-destructive" : "border-input",
    );

  return (
    <Layout>
      <SEO title={p.metaTitle} description={p.metaDescription} path="/contact" />

      <header
        className={cn(
          "border-b border-border/60",
          "bg-gradient-to-b from-secondary/50 via-background to-background",
          "pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24",
        )}
      >
        <div className="container-content max-w-3xl">
          <h1 className="text-balance text-foreground text-section mb-4 sm:mb-5 lg:text-section-lg">
            {p.headline}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {p.intro}
          </p>
        </div>
      </header>

      <section className="bg-background py-16 lg:py-24">
        <div className="container-content max-w-2xl">
          <Card className="border border-border/80 bg-card/80 p-6 shadow-sm sm:p-8">
            {succeeded ? (
              <div className="space-y-4 text-center sm:py-6" role="status" aria-live="polite">
                <h2 className="text-2xl font-semibold text-foreground">{p.successTitle}</h2>
                <p className="text-muted-foreground leading-relaxed">{p.successBody}</p>
                <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row sm:justify-center">
                  <Button
                    type="button"
                    className="min-h-11 rounded-full px-6 font-semibold"
                    onClick={() => setSucceeded(false)}
                  >
                    {p.sendAnotherLabel}
                  </Button>
                  <Button variant="outline" className="min-h-11 rounded-full px-6 font-semibold" asChild>
                    <Link href="/">{p.backHomeLabel}</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <form
                id={formId}
                className="space-y-5"
                onSubmit={onSubmit}
                noValidate
                aria-describedby={submitError ? `${formId}-form-error` : undefined}
              >
                <p className="text-sm text-muted-foreground">
                  Fields marked with <span className="text-foreground font-medium">*</span> are
                  required.
                </p>

                <div>
                  <label htmlFor={`${formId}-name`} className="text-sm font-medium text-foreground">
                    Name <span aria-hidden>*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={120}
                    value={fields.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className={fieldClass(Boolean(fieldErrors.name))}
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? `${formId}-name-error` : undefined}
                  />
                  {fieldErrors.name ? (
                    <p id={`${formId}-name-error`} className="mt-1.5 text-sm text-destructive-foreground">
                      {fieldErrors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor={`${formId}-email`} className="text-sm font-medium text-foreground">
                    Email <span aria-hidden>*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={254}
                    value={fields.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={fieldClass(Boolean(fieldErrors.email))}
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? `${formId}-email-error` : undefined}
                  />
                  {fieldErrors.email ? (
                    <p id={`${formId}-email-error`} className="mt-1.5 text-sm text-destructive-foreground">
                      {fieldErrors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor={`${formId}-phone`} className="text-sm font-medium text-foreground">
                    Phone <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id={`${formId}-phone`}
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    maxLength={40}
                    value={fields.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className={fieldClass(Boolean(fieldErrors.phone))}
                    aria-invalid={Boolean(fieldErrors.phone)}
                    aria-describedby={fieldErrors.phone ? `${formId}-phone-error` : undefined}
                  />
                  {fieldErrors.phone ? (
                    <p id={`${formId}-phone-error`} className="mt-1.5 text-sm text-destructive-foreground">
                      {fieldErrors.phone}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-subject`}
                    className="text-sm font-medium text-foreground"
                  >
                    Subject <span aria-hidden>*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    id={`${formId}-subject`}
                    name="subject"
                    type="text"
                    required
                    maxLength={200}
                    value={fields.subject}
                    onChange={(e) => updateField("subject", e.target.value)}
                    className={fieldClass(Boolean(fieldErrors.subject))}
                    aria-invalid={Boolean(fieldErrors.subject)}
                    aria-describedby={fieldErrors.subject ? `${formId}-subject-error` : undefined}
                  />
                  {fieldErrors.subject ? (
                    <p
                      id={`${formId}-subject-error`}
                      className="mt-1.5 text-sm text-destructive-foreground"
                    >
                      {fieldErrors.subject}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-message`}
                    className="text-sm font-medium text-foreground"
                  >
                    Message <span aria-hidden>*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <textarea
                    id={`${formId}-message`}
                    name="message"
                    required
                    rows={6}
                    maxLength={5000}
                    value={fields.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className={cn(fieldClass(Boolean(fieldErrors.message)), "resize-y min-h-[9rem]")}
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={fieldErrors.message ? `${formId}-message-error` : undefined}
                  />
                  {fieldErrors.message ? (
                    <p
                      id={`${formId}-message-error`}
                      className="mt-1.5 text-sm text-destructive-foreground"
                    >
                      {fieldErrors.message}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">
                    Security check <span aria-hidden>*</span>
                    <span className="sr-only">(required)</span>
                  </p>
                  {siteKey ? (
                    <div ref={widgetHostRef} className="cf-turnstile" />
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Security check is unavailable until the site key is configured.
                    </p>
                  )}
                  {turnstileError ? (
                    <p className="text-sm text-destructive-foreground" role="alert">
                      {turnstileError}
                    </p>
                  ) : null}
                </div>

                {submitError ? (
                  <p
                    id={`${formId}-form-error`}
                    className="rounded-md border border-destructive/40 bg-destructive/15 px-3 py-2 text-sm text-destructive-foreground"
                    role="alert"
                  >
                    {submitError}
                  </p>
                ) : null}

                <p className="text-xs text-muted-foreground leading-relaxed">{p.privacyNote}</p>

                <Button
                  type="submit"
                  size="lg"
                  className="min-h-12 w-full rounded-full px-8 text-base font-semibold shadow-md sm:w-auto"
                  disabled={submitting}
                >
                  {submitting ? p.submittingLabel : p.submitLabel}
                </Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </Layout>
  );
}
