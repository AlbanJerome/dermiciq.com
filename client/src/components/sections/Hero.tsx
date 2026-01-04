import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/config/siteContent";
import { ShieldCheck } from "lucide-react";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dermiciq-softMint/30 via-background to-dermiciq-mint/20" />
      
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-dermiciq-turquoise/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-dermiciq-softMint/20 blur-3xl" />

      <div className="container-content relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Badge
              variant="secondary"
              className="mb-6 text-caption no-default-active-elevate"
              data-testid="badge-trust"
            >
              <ShieldCheck className="h-3.5 w-3.5 mr-1.5" />
              {hero.trustBadge}
            </Badge>

            <h1
              className="text-hero-mobile lg:text-hero mb-6 text-foreground"
              data-testid="text-hero-headline"
            >
              {hero.headline}
            </h1>

            <p
              className="text-body-lg text-muted-foreground mb-8 max-w-lg"
              data-testid="text-hero-subheadline"
            >
              {hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={hero.primaryCta.href}>
                <Button size="lg" className="w-full sm:w-auto text-lg px-8" data-testid="button-hero-primary">
                  {hero.primaryCta.label}
                </Button>
              </Link>
              <Link href={hero.secondaryCta.href}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8"
                  data-testid="button-hero-secondary"
                >
                  {hero.secondaryCta.label}
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-dermiciq-turquoise/20 to-dermiciq-teal/10 rounded-3xl" />
              <div className="absolute inset-4 bg-gradient-to-tr from-dermiciq-softMint to-dermiciq-mint rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-dermiciq-turquoise to-dermiciq-teal rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-4xl font-bold text-white">dIQ</span>
                  </div>
                  <p className="text-subsection-mobile text-dermiciq-charcoal font-semibold">
                    {siteContent.brand.tagline}
                  </p>
                  <p className="text-body text-dermiciq-charcoal/70 mt-2">
                    Powered by Dynamic Sensitivity Protocol
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
