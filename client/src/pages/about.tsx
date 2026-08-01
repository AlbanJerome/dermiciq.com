import { Link } from "wouter";
import { Check } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { siteContent } from "@/config/siteContent";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  const p = siteContent.pages.about;
  const ctaIsExternal =
    p.cta.href.startsWith("http://") || p.cta.href.startsWith("https://");

  return (
    <Layout>
      <SEO title={p.metaTitle} description={p.metaDescription} path="/about" />

      <header
        className={cn(
          "border-b border-border/60",
          "bg-gradient-to-b from-secondary/50 via-background to-background",
          "pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-14",
        )}
      >
        <div className="container-content max-w-3xl">
          <h1 className="text-balance text-foreground text-section mb-3 sm:mb-4 lg:text-section-lg">
            {p.headline}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {p.intro}
          </p>
        </div>
      </header>

      <article className="bg-background py-10 lg:py-14">
        <div className="container-content max-w-3xl space-y-10">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">{p.missionTitle}</h2>
            {p.missionParagraphs.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground">{p.differentTitle}</h2>
            <ul className="space-y-3" role="list">
              {p.differentPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-muted-foreground leading-relaxed sm:text-lg"
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                    aria-hidden
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <Card
              className="border border-border/80 bg-card/80 p-5 shadow-sm sm:p-6"
              aria-labelledby="about-team-heading"
            >
              <h2 id="about-team-heading" className="text-2xl font-semibold text-primary mb-3">
                {p.teamTitle}
              </h2>
              <p className="text-muted-foreground leading-relaxed sm:text-lg mb-3">{p.teamBody}</p>
              <p className="text-muted-foreground leading-relaxed border-l-2 border-primary/25 pl-4">
                {p.teamFootnote}
              </p>
            </Card>
          </section>

          <section
            className={cn(
              "rounded-2xl border border-border/70 bg-gradient-to-br from-secondary/40 via-background to-background",
              "px-6 py-8 text-center shadow-sm sm:px-8 sm:py-9",
            )}
          >
            <h2 className="text-lg font-semibold text-foreground mb-2">{p.cta.title}</h2>
            <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto leading-relaxed">
              {p.cta.subtext}
            </p>
            <Button
              asChild
              size="lg"
              className="min-h-12 rounded-full px-8 text-base font-semibold shadow-md"
            >
              <a
                href={p.cta.href}
                target={ctaIsExternal ? "_blank" : undefined}
                rel={ctaIsExternal ? "noopener noreferrer" : undefined}
              >
                {p.cta.label}
              </a>
            </Button>
            <p className="mt-5 text-sm text-muted-foreground">
              <Link
                className="font-semibold text-primary underline-offset-2 hover:underline"
                href={p.cta.sublinkHref}
              >
                {p.cta.sublinkLabel}
              </Link>
            </p>
          </section>
        </div>
      </article>
    </Layout>
  );
}
