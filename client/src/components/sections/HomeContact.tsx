import { Link } from "wouter";
import { Mail } from "lucide-react";
import { siteContent } from "@/config/siteContent";

export function HomeContact() {
  const { contact } = siteContent.home;

  return (
    <section id={contact.id} className="py-20 lg:py-28 bg-secondary/30 border-t border-border/60">
      <div className="container-content max-w-2xl text-center">
        <h2 className="text-section lg:text-section-lg text-foreground mb-4">{contact.title}</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">{contact.body}</p>
        <Link
          href={contact.ctaHref}
          aria-label="Contact us"
          className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
        >
          <Mail className="h-4 w-4" aria-hidden />
          {contact.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
