import { Button } from "@/components/ui/button";
import { siteContent } from "@/config/siteContent";
import { Mail } from "lucide-react";
import { Link } from "wouter";

export function HomeContact() {
  const { contact } = siteContent.home;

  return (
    <section id={contact.id} className="section-band bg-secondary/30 border-t border-border/60">
      <div className="container-content max-w-2xl text-center">
        <h2 className="text-section lg:text-section-lg text-foreground mb-4">{contact.title}</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">{contact.body}</p>
        <Button
          asChild
          variant="outline"
          size="pill-sm"
          className="border-primary/25 bg-card text-primary hover:bg-primary/5"
        >
          <Link href={contact.ctaHref} aria-label="Contact us">
            <Mail className="h-4 w-4" aria-hidden />
            {contact.ctaLabel}
          </Link>
        </Button>
      </div>
    </section>
  );
}
