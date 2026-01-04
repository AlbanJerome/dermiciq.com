import { Card } from "@/components/ui/card";
import { siteContent } from "@/config/siteContent";
import { AlertTriangle, XCircle, Users } from "lucide-react";

const icons = [AlertTriangle, XCircle, Users];

export function ProblemSection() {
  const { problem } = siteContent;

  return (
    <section className="py-16 lg:py-24 bg-background" data-testid="section-problem">
      <div className="container-content">
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-section-mobile lg:text-section mb-4 text-foreground"
            data-testid="text-problem-headline"
          >
            {problem.headline}
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            {problem.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problem.points.map((point, index) => {
            const Icon = icons[index];
            return (
              <Card
                key={point.title}
                className="p-8 text-center"
                data-testid={`card-problem-${index}`}
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {point.title}
                </h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
