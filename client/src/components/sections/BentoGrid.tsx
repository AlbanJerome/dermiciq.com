import { Card } from "@/components/ui/card";
import { siteContent } from "@/config/siteContent";
import {
  Dna,
  Network,
  ShieldCheck,
  Scale,
  FileCheck,
  Brain,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Dna,
  Network,
  ShieldCheck,
  Scale,
  FileCheck,
  Brain,
};

export function BentoGrid() {
  const { pillars } = siteContent;

  return (
    <section className="py-16 lg:py-24 bg-card/50" data-testid="section-pillars">
      <div className="container-content">
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-section-mobile lg:text-section mb-4 text-foreground"
            data-testid="text-pillars-headline"
          >
            {pillars.headline}
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            {pillars.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            const isLarge = index === 0 || index === 3;

            return (
              <Card
                key={item.title}
                className={`p-8 transition-all duration-300 ${
                  isLarge ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                data-testid={`card-pillar-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  {Icon && <Icon className="h-6 w-6 text-primary" />}
                </div>
                <h3 className="text-subsection-mobile lg:text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
