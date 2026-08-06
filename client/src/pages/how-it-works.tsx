import { ListChecks, RefreshCw, ScanLine, UserRound } from "lucide-react";
import { ContentPageBody, ContentPageHeader } from "@/components/layout/ContentPage";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { siteContent } from "@/config/siteContent";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stepIcons = [UserRound, ScanLine, ListChecks, RefreshCw] as const;

export default function HowItWorksPage() {
  const p = siteContent.pages.howItWorks;

  return (
    <Layout>
      <SEO title={p.metaTitle} description={p.metaDescription} path="/how-it-works" />

      <ContentPageHeader title={p.headline}>
        <p className="max-w-4xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {p.intro}
        </p>
      </ContentPageHeader>

      <ContentPageBody as="div" contentClassName="max-w-5xl">
        <div>
          <h2 className="sr-only">{p.processSectionTitle}</h2>
          <ol className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2">
            {p.steps.map((step, i) => {
              const Icon = stepIcons[i] ?? UserRound;
              return (
                <li key={step.n}>
                  <Card
                    className={cn(
                      "h-full p-6 sm:p-7 border-border/80 shadow-sm",
                      "hover:border-primary/20 hover:shadow-md transition-shadow duration-200"
                    )}
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="flex flex-col items-center gap-2.5 shrink-0">
                        <span
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground"
                          aria-hidden
                        >
                          {step.n}
                        </span>
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/40 text-primary">
                          <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1 pt-0.5">
                        <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  </Card>
                </li>
              );
            })}
          </ol>
        </div>

        <section className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">{p.resultsSectionTitle}</h2>
          <p className="text-muted-foreground leading-relaxed">{p.resultsSectionBody}</p>
          <p className="text-muted-foreground border-l-2 border-primary/30 pl-4 leading-relaxed">{p.disclaimer}</p>
        </section>

        <section className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-foreground mb-3">{p.boundariesSectionTitle}</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">{p.boundariesSectionIntro}</p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
            {p.boundariesBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </section>

        <section className="max-w-3xl">
          <div
            className={cn(
              "rounded-2xl border border-border/70 bg-gradient-to-br from-secondary/40 via-background to-background",
              "px-6 py-8 sm:px-8 sm:py-9 text-center shadow-sm"
            )}
          >
            <h2 className="text-lg font-semibold text-foreground mb-2">{p.ctaStart.title}</h2>
            <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto leading-relaxed">
              {p.ctaStart.subtext}
            </p>
            <Button
              asChild
              size="lg"
              className="min-h-12 rounded-full px-8 text-base font-semibold shadow-md"
            >
              <a
                href={p.ctaStart.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.ctaStart.label}
              </a>
            </Button>
          </div>
        </section>
      </ContentPageBody>
    </Layout>
  );
}
