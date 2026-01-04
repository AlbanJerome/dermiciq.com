import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/config/siteContent";
import { Calendar, Shield, ArrowRight, CheckCircle2, Clock, Circle } from "lucide-react";

export function RegulatoryWedge() {
  const { regulatory } = siteContent;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle2 className="h-5 w-5 text-primary" />;
      case "current":
        return <Clock className="h-5 w-5 text-dermiciq-turquoise animate-pulse" />;
      default:
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <section
      className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-dermiciq-softMint/20"
      data-testid="section-regulatory"
    >
      <div className="container-content">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <Badge
              variant="secondary"
              className="mb-6 text-caption no-default-active-elevate"
              data-testid="badge-regulatory"
            >
              <Calendar className="h-3.5 w-3.5 mr-1.5" />
              {regulatory.badge}
            </Badge>

            <h2
              className="text-section-mobile lg:text-section mb-4 text-foreground"
              data-testid="text-regulatory-headline"
            >
              {regulatory.headline}
            </h2>

            <p className="text-body-lg text-muted-foreground mb-8 max-w-xl">
              {regulatory.subheadline}
            </p>

            <Link href={regulatory.cta.href}>
              <Button size="lg" data-testid="button-regulatory-cta">
                {regulatory.cta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold text-foreground">Regulatory Timeline</span>
              </div>

              <div className="space-y-6">
                {regulatory.timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className="flex items-start gap-4"
                    data-testid={`timeline-item-${index}`}
                  >
                    <div className="flex flex-col items-center">
                      {getStatusIcon(item.status)}
                      {index < regulatory.timeline.length - 1 && (
                        <div className="w-0.5 h-8 bg-border mt-2" />
                      )}
                    </div>
                    <div>
                      <span
                        className={`font-semibold ${
                          item.status === "current"
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {item.year}
                      </span>
                      <p className="text-muted-foreground text-caption">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
