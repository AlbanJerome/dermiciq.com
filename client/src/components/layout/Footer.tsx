import { Link } from "wouter";
import { siteContent } from "@/config/siteContent";
import { MapPin } from "lucide-react";

export function Footer() {
  const { footer, brand } = siteContent;

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="container-content py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
              <img
                src="/logo.png"
                alt={brand.name}
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-xl font-semibold text-foreground">
                {brand.name}
              </span>
            </Link>
            <p className="text-muted-foreground text-body mb-4">
              {footer.tagline}
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-caption">
              <MapPin className="h-4 w-4" />
              <span>{footer.location}</span>
            </div>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-foreground mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-body"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption text-muted-foreground">
            {footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-caption text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-privacy"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-caption text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-terms"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
