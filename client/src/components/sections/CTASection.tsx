import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/config/siteContent";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const { cta, hero } = siteContent;

  return (
    <section
      className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-dermiciq-softMint/30 to-background"
      data-testid="section-cta"
    >
      <div className="container-content text-center">
        <h2
          className="text-section-mobile lg:text-section mb-4 text-foreground"
          data-testid="text-cta-headline"
        >
          {cta.headline}
        </h2>
        <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          {cta.subheadline}
        </p>
        <Link href={hero.primaryCta.href}>
          <Button size="lg" className="text-lg px-8" data-testid="button-cta-primary">
            {cta.buttonLabel}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
