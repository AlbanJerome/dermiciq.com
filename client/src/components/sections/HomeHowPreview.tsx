import { Link } from "wouter";
import { siteContent } from "@/config/siteContent";
import { Button } from "@/components/ui/button";

export function HomeHowPreview() {
  const { howPreview: h } = siteContent.home;

  return (
    <section id={h.id} className="py-20 lg:py-28 bg-background">
      <div className="container-content">
        <h2 className="text-section lg:text-section-lg text-foreground mb-4">{h.title}</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mb-12 leading-relaxed">{h.intro}</p>
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {h.steps.map((step) => (
            <li
              key={step.n}
              className="relative rounded-2xl border border-border bg-card p-6 pt-10 shadow-sm list-none"
            >
              <span className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {step.n}
              </span>
              <h3 className="text-base font-semibold text-foreground mb-2 mt-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
        <p className="text-sm text-muted-foreground max-w-3xl mb-8 border-l-2 border-primary/30 pl-4">{h.disclaimer}</p>
        <Button asChild>
          <Link href={h.cta.href}>{h.cta.label}</Link>
        </Button>
      </div>
    </section>
  );
}
