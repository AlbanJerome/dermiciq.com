import {
  Check,
  GraduationCap,
  HandCoins,
  LineChart,
  Megaphone,
} from "lucide-react";
import { ContentPageBody, ContentPageHeader } from "@/components/layout/ContentPage";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { brandColors } from "@/config/brand";
import { siteContent } from "@/config/siteContent";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const benefitIcons = [HandCoins, GraduationCap, Megaphone, LineChart] as const;

export default function BecomeAPartnerPage() {
  const p = siteContent.pages.becomeAPartner;

  return (
    <Layout>
      <SEO title={p.metaTitle} description={p.metaDescription} path="/become-a-partner" />

      <ContentPageHeader title={p.headline} contentClassName="max-w-4xl">
        <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">{p.intro}</p>
        <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Button asChild size="pill">
            <a
              href={p.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.primaryCta.label}
            </a>
          </Button>
          {/* Destination TBD — wire href when partner flow URL is confirmed. */}
          <Button
            type="button"
            variant="outline"
            size="pill-sm"
            className="border-primary/30 text-foreground"
            style={{ backgroundColor: brandColors.mintBg }}
          >
            {p.secondaryCta.label}
          </Button>
        </div>
      </ContentPageHeader>

      <ContentPageBody as="div" contentClassName="max-w-5xl">
        <section className="mx-auto max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold text-foreground">{p.overview.title}</h2>
          {p.overview.paragraphs.map((para) => (
            <p key={para} className="text-lg leading-relaxed text-muted-foreground">
              {para}
            </p>
          ))}
        </section>

        <section className="mx-auto max-w-3xl space-y-3">
          <h2 className="text-2xl font-semibold text-foreground">{p.eligibility.title}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">{p.eligibility.intro}</p>
          <ul className="space-y-3" role="list">
            {p.eligibility.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-muted-foreground leading-relaxed sm:text-lg"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                  aria-hidden
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-muted-foreground">{p.eligibility.closing}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">{p.benefits.title}</h2>
          <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2" role="list">
            {p.benefits.items.map((item, i) => {
              const Icon = benefitIcons[i] ?? HandCoins;
              return (
                <li key={item.title}>
                  <Card
                    className={cn(
                      "h-full border-border/80 p-6 shadow-sm sm:p-7",
                      "transition-shadow duration-200 hover:border-primary/20 hover:shadow-md",
                    )}
                  >
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/40 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-primary">{item.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{item.body}</p>
                  </Card>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-6">{p.howItWorks.title}</h2>
          <ol className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2">
            {p.howItWorks.steps.map((step) => (
              <li key={step.n}>
                <Card
                  className={cn(
                    "h-full border-border/80 p-6 shadow-sm sm:p-7",
                    "transition-shadow duration-200 hover:border-primary/20 hover:shadow-md",
                  )}
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
                      aria-hidden
                    >
                      {step.n}
                    </span>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="mb-2 text-lg font-semibold text-primary">{step.title}</h3>
                      <p className="leading-relaxed text-muted-foreground">{step.body}</p>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto max-w-3xl">
          <div
            className={cn(
              "rounded-2xl border border-border/70 bg-gradient-to-br from-secondary/40 via-background to-background",
              "px-6 py-8 text-center shadow-sm sm:px-8 sm:py-9",
            )}
          >
            <h2 className="mb-2 text-lg font-semibold text-foreground">{p.closingCta.title}</h2>
            <p className="mx-auto mb-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              {p.closingCta.body}
            </p>
            <Button asChild size="pill">
              <a
                href={p.closingCta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.closingCta.label}
              </a>
            </Button>
          </div>
        </section>
      </ContentPageBody>
    </Layout>
  );
}
