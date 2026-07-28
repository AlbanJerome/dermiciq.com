import { Link } from "wouter";
import { siteContent } from "@/config/siteContent";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function HomeProblemSolution() {
  const { problemSolution: ps } = siteContent.home;

  return (
    <section id={ps.id} className="py-20 lg:py-28 bg-background">
      <div className="container-content">
        <h2 className="text-section lg:text-section-lg text-foreground mb-12 max-w-3xl">{ps.title}</h2>
        <div className="grid gap-10 lg:grid-cols-2">
          <Card className="p-8 border-border/80 shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-4">{ps.problemTitle}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">{ps.problemIntro}</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4 leading-relaxed">
              {ps.problemBullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">{ps.problemClosing}</p>
          </Card>
          <Card className="p-8 border-primary/15 bg-primary/[0.04] shadow-sm">
            <h3 className="text-xl font-semibold text-primary mb-4">{ps.solutionTitle}</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">{ps.solutionLead}</p>
            <div className="space-y-4">
              <p className="text-muted-foreground italic border-l-2 border-border pl-4 leading-relaxed">
                {ps.traditionalQuestion}
              </p>
              <p className="text-primary font-semibold border-l-2 border-primary pl-4 leading-relaxed">
                {ps.DermicIQQuestion}
              </p>
            </div>
            <p className="text-muted-foreground mt-6 leading-relaxed">{ps.solutionClosing}</p>
            <Button className="mt-8" variant="secondary" asChild>
              <Link href={ps.ctaSensitive.href}>{ps.ctaSensitive.label}</Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
