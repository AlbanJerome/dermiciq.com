import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/config/siteContent";
import { Stethoscope, Palette, Database, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState, useRef } from "react";

const iconMap: Record<string, typeof Stethoscope> = {
  Stethoscope,
  Palette,
  Database,
};

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  index: number;
}

function Counter({ value, prefix = "", suffix = "", label, index }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * 10) / 10);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={ref}
      className={`text-center opacity-0 ${isVisible ? "animate-count-up" : ""}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 tabular-nums">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <p className="text-muted-foreground text-caption">{label}</p>
    </div>
  );
}

export default function Partners() {
  const { partners } = siteContent;

  return (
    <Layout>
      <SEO
        title={partners.meta.title}
        description={partners.meta.description}
        path="/partners"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-dermiciq-softMint/30 via-background to-background">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto">
            <h1
              className="text-hero-mobile lg:text-hero mb-6 text-foreground"
              data-testid="text-partners-headline"
            >
              {partners.hero.headline}
            </h1>
            <p className="text-body-lg text-muted-foreground">
              {partners.hero.subheadline}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card/50" data-testid="section-benefits">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              return (
                <Card
                  key={benefit.title}
                  className="p-8 text-center"
                  data-testid={`card-benefit-${index}`}
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {Icon && <Icon className="h-7 w-7 text-primary" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" data-testid="section-partner-stats">
        <div className="container-content">
          <h2 className="text-section-mobile lg:text-section mb-12 text-center text-foreground">
            {partners.statsHeadline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {partners.stats.map((stat, index) => (
              <Counter
                key={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card/50" data-testid="section-logos">
        <div className="container-content text-center">
          <h2 className="text-2xl font-semibold mb-8 text-foreground">
            {partners.logosSection.headline}
          </h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-32 h-12 bg-muted rounded-lg flex items-center justify-center"
                data-testid={`logo-placeholder-${i}`}
              >
                <span className="text-muted-foreground text-caption">
                  {partners.logosSection.placeholder} {i}
                </span>
              </div>
            ))}
          </div>
          <p className="text-caption text-muted-foreground mt-6">
            {partners.logosSection.comingSoon}
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-dermiciq-softMint/30 to-background">
        <div className="container-content text-center">
          <h2 className="text-section-mobile lg:text-section mb-4 text-foreground">
            {partners.cta.headline}
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            {partners.cta.subheadline}
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg px-8" data-testid="button-partners-cta">
              {partners.ctaButtonLabel}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
