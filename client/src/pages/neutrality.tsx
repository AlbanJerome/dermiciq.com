import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/config/siteContent";
import { Shield, CheckCircle2, Scale, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Neutrality() {
  const { neutrality } = siteContent;

  return (
    <Layout>
      <SEO
        title={neutrality.meta.title}
        description={neutrality.meta.description}
        path="/neutrality"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-dermiciq-softMint/30 via-background to-background">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="secondary"
                className="mb-6 text-caption no-default-active-elevate"
                data-testid="badge-neutrality"
              >
                <Scale className="h-3.5 w-3.5 mr-1.5" />
                {neutrality.hero.badge}
              </Badge>
              <h1
                className="text-hero-mobile lg:text-hero mb-6 text-foreground"
                data-testid="text-neutrality-headline"
              >
                {neutrality.hero.headline}
              </h1>
              <p className="text-body-lg text-muted-foreground">
                {neutrality.hero.subheadline}
              </p>
            </div>

            <div className="relative">
              <div className="bg-card rounded-3xl p-12 border border-border text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-dermiciq-turquoise/30 rounded-full flex items-center justify-center">
                  <Shield className="h-16 w-16 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {neutrality.badge.title}
                </h2>
                <p className="text-muted-foreground">
                  {neutrality.badge.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card/50" data-testid="section-quote">
        <div className="container-content">
          <blockquote className="max-w-4xl mx-auto text-center">
            <p
              className="text-2xl lg:text-3xl italic text-foreground leading-relaxed mb-6"
              data-testid="text-neutrality-quote"
            >
              &ldquo;{neutrality.quote}&rdquo;
            </p>
            <cite className="text-muted-foreground not-italic">
              {neutrality.quoteAttribution}
            </cite>
          </blockquote>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-commitments">
        <div className="container-content">
          <h2 className="text-section-mobile lg:text-section mb-12 text-center text-foreground">
            {neutrality.commitmentsHeadline}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neutrality.commitments.map((commitment, index) => (
              <Card
                key={commitment.title}
                className="p-8"
                data-testid={`card-commitment-${index}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {commitment.title}
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-dermiciq-softMint/30 to-background">
        <div className="container-content text-center">
          <h2 className="text-section-mobile lg:text-section mb-4 text-foreground">
            {neutrality.cta.headline}
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {neutrality.cta.subheadline}
          </p>
          <Link href="/login">
            <Button size="lg" className="text-lg px-8" data-testid="button-neutrality-cta">
              {neutrality.cta.buttonLabel}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
