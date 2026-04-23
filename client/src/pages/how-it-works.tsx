import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { siteContent } from "@/config/siteContent";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HowItWorksPage() {
  const p = siteContent.pages.howItWorks;
  const h = siteContent.home.howPreview;

  return (
    <Layout>
      <SEO title={p.metaTitle} description={p.metaDescription} path="/how-it-works" />

      <header className="py-16 lg:py-24 bg-gradient-to-br from-secondary/50 via-background to-background border-b border-border/60">
        <div className="container-content max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Dermiciq™</p>
          <h1 className="text-section lg:text-section-lg text-foreground mb-6">{p.headline}</h1>
          <p className="text-body-lg text-muted-foreground leading-relaxed">{p.intro}</p>
        </div>
      </header>

      <div className="py-16 lg:py-24 bg-background">
        <div className="container-content max-w-3xl space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6">{p.stepsSectionTitle}</h2>
            <ol className="space-y-8 list-none">
              {h.steps.map((step) => (
                <li key={step.n}>
                  <Card className="p-6 border-border/80 shadow-sm">
                    <div className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {step.n}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  </Card>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">{p.neutralSectionTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{p.neutralSectionBody}</p>
            <p className="text-muted-foreground leading-relaxed text-sm border-l-2 border-primary/25 pl-4">
              {h.disclaimer}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">{p.boundariesSectionTitle}</h2>
            <p className="text-muted-foreground mb-4">{p.boundariesSectionIntro}</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {siteContent.home.productEthical.exclusionsBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          <Button variant="outline" className="border-primary/30" asChild>
            <Link href="/">← Back to home</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
