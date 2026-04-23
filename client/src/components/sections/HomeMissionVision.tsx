import { Link } from "wouter";
import { siteContent } from "@/config/siteContent";
import { Button } from "@/components/ui/button";

export function HomeMissionVision() {
  const { missionVision: m } = siteContent.home;

  return (
    <section id={m.id} className="py-20 lg:py-28 bg-secondary/50 border-y border-border/60">
      <div className="container-content max-w-4xl">
        <h2 className="text-section lg:text-section-lg text-foreground mb-10">{m.title}</h2>
        <div className="space-y-8">
          <blockquote className="border-l-4 border-primary pl-6 py-1">
            <p className="text-lg font-semibold text-foreground mb-2">Mission</p>
            <p className="text-muted-foreground leading-relaxed text-lg">{m.mission}</p>
          </blockquote>
          <div className="rounded-2xl bg-accent/35 border border-accent/40 px-6 py-5">
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Core insight</p>
            <p className="text-xl font-semibold text-foreground leading-snug">{m.coreInsight}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground mb-3">Vision</p>
            <p className="text-muted-foreground leading-relaxed mb-4">{m.visionLead}</p>
            <p className="text-muted-foreground leading-relaxed">{m.visionBody}</p>
          </div>
          <Button variant="outline" className="border-primary/30" asChild>
            <Link href={m.ctaAbout.href}>{m.ctaAbout.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
