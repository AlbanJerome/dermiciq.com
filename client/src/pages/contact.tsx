import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactFormField } from "@/components/contact/ContactFormField";
import { siteContent } from "@/config/siteContent";
import { useTurnstileWidget } from "@/hooks/useTurnstileWidget";
import { cn } from "@/lib/utils";
import { readTurnstileResponseFromForm } from "@/lib/turnstile";
import {
  CONTACT_LIMITS,
  submitContactForm,
  toContactPayload,
  validateContactFields,
  type ContactFormFields,
} from "@/lib/contactForm";

const emptyFields: ContactFormFields = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const p = siteContent.pages.contact;
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() ?? "";
  const formId = useId();

  const [fields, setFields] = useState<ContactFormFields>(emptyFields);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactFormFields, string>>
  >({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const submitAbortRef = useRef<AbortController | null>(null);

  const {
    widgetHostRef,
    token: turnstileToken,
    error: turnstileError,
    setError: setTurnstileError,
    reset: resetTurnstile,
  } = useTurnstileWidget({ siteKey });

  useEffect(() => {
    return () => {
      submitAbortRef.current?.abort();
    };
  }, []);

  const updateField = (key: keyof ContactFormFields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
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
      turnstileToken || readTurnstileResponseFromForm(event.currentTarget);

    if (!token) {
      setTurnstileError("Please complete the security check before sending.");
      return;
    }

    submitAbortRef.current?.abort();
    const abortController = new AbortController();
    submitAbortRef.current = abortController;

    setSubmitting(true);
    try {
      const result = await submitContactForm(toContactPayload(fields, token), {
        signal: abortController.signal,
      });
      if (abortController.signal.aborted) return;
      if (result.ok) {
        setSucceeded(true);
        setFields(emptyFields);
        resetTurnstile();
        return;
      }
      setSubmitError(result.message);
      resetTurnstile();
    } catch (error) {
      if (abortController.signal.aborted) return;
      if (error instanceof DOMException && error.name === "AbortError") return;
      setSubmitError("Something went wrong sending your message. Please try again later.");
      resetTurnstile();
    } finally {
      if (!abortController.signal.aborted) {
        setSubmitting(false);
      }
    }
  };

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

                <ContactFormField
                  id={`${formId}-name`}
                  label="Name"
                  required
                  error={fieldErrors.name}
                >
                  {(fieldProps) => (
                    <input
                      {...fieldProps}
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={CONTACT_LIMITS.name.max}
                      value={fields.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                  )}
                </ContactFormField>

                <ContactFormField
                  id={`${formId}-email`}
                  label="Email"
                  required
                  error={fieldErrors.email}
                >
                  {(fieldProps) => (
                    <input
                      {...fieldProps}
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={CONTACT_LIMITS.email.max}
                      value={fields.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                  )}
                </ContactFormField>

                <ContactFormField
                  id={`${formId}-phone`}
                  label="Phone"
                  optionalHint="(optional)"
                  error={fieldErrors.phone}
                >
                  {(fieldProps) => (
                    <input
                      {...fieldProps}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={CONTACT_LIMITS.phone.max}
                      value={fields.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                    />
                  )}
                </ContactFormField>

                <ContactFormField
                  id={`${formId}-subject`}
                  label="Subject"
                  required
                  error={fieldErrors.subject}
                >
                  {(fieldProps) => (
                    <input
                      {...fieldProps}
                      name="subject"
                      type="text"
                      required
                      maxLength={CONTACT_LIMITS.subject.max}
                      value={fields.subject}
                      onChange={(e) => updateField("subject", e.target.value)}
                    />
                  )}
                </ContactFormField>

                <ContactFormField
                  id={`${formId}-message`}
                  label="Message"
                  required
                  error={fieldErrors.message}
                >
                  {(fieldProps) => (
                    <textarea
                      {...fieldProps}
                      name="message"
                      required
                      rows={6}
                      maxLength={CONTACT_LIMITS.message.max}
                      value={fields.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className={cn(fieldProps.className, "resize-y min-h-[9rem]")}
                    />
                  )}
                </ContactFormField>

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
