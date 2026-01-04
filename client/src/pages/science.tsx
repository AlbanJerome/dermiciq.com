import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/config/siteContent";
import { Microscope, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Science() {
  const { science } = siteContent;

  return (
    <Layout>
      <SEO
        title={science.meta.title}
        description={science.meta.description}
        path="/science"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-dermiciq-softMint/30 via-background to-background">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto">
            <Badge
              variant="secondary"
              className="mb-6 text-caption no-default-active-elevate"
              data-testid="badge-science"
            >
              <Microscope className="h-3.5 w-3.5 mr-1.5" />
              {science.hero.badge}
            </Badge>
            <h1
              className="text-hero-mobile lg:text-hero mb-6 text-foreground"
              data-testid="text-science-headline"
            >
              {science.hero.headline}
            </h1>
            <p className="text-body-lg text-muted-foreground">
              {science.hero.subheadline}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card/50" data-testid="section-how-it-works">
        <div className="container-content">
          <h2 className="text-section-mobile lg:text-section mb-12 text-center text-foreground">
            {science.howItWorks.headline}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {science.howItWorks.steps.map((step) => (
              <Card
                key={step.number}
                className="p-8 relative"
                data-testid={`card-step-${step.number}`}
              >
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground pr-16">
                  {step.title}
                </h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-comparison">
        <div className="container-content">
          <h2 className="text-section-mobile lg:text-section mb-12 text-center text-foreground">
            {science.comparison.headline}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-destructive/30 bg-destructive/5">
              <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                <XCircle className="h-6 w-6 text-destructive" />
                {science.comparison.competitorLabel}
              </h3>
              <ul className="space-y-4">
                {science.comparison.competitors.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 border-primary/30 bg-primary/5">
              <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                {science.comparison.dermiciqLabel}
              </h3>
              <ul className="space-y-4">
                {science.comparison.dermiciq.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-dermiciq-softMint/30 to-background">
        <div className="container-content text-center">
          <h2 className="text-section-mobile lg:text-section mb-4 text-foreground">
            {science.cta.headline}
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {science.cta.subheadline}
          </p>
          <Link href="/login">
            <Button size="lg" className="text-lg px-8" data-testid="button-science-cta">
              {science.cta.buttonLabel}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
