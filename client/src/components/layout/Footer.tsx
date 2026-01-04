import { useLocation } from "wouter";
import { siteContent } from "@/config/siteContent";
import { MapPin } from "lucide-react";

export function Footer() {
  const { footer, brand } = siteContent;
  const [, setLocation] = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "auto" });
    setTimeout(() => setLocation(href), 0);
  };

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="container-content py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <a 
              href="/"
              onClick={(e) => handleNavClick(e, "/")}
              className="flex items-center gap-2 mb-4" 
              data-testid="link-footer-logo"
            >
              <img
                src="/logo.png"
                alt={brand.name}
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-xl font-semibold text-foreground">
                {brand.name}
              </span>
            </a>
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
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-body cursor-pointer"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </a>
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
            <a
              href="/privacy"
              onClick={(e) => handleNavClick(e, "/privacy")}
              className="text-caption text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              data-testid="link-footer-privacy"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              onClick={(e) => handleNavClick(e, "/terms")}
              className="text-caption text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              data-testid="link-footer-terms"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
