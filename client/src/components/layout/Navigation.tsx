import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/config/siteContent";
import { useAuth } from "@/hooks/use-auth";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      data-testid="navigation-header"
    >
      <nav className="container-content flex items-center justify-between h-16 lg:h-18">
        <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
          <img
            src="/logo.png"
            alt={siteContent.brand.name}
            className="h-10 w-10 rounded-lg"
          />
          <span className="text-xl font-semibold text-foreground">
            {siteContent.brand.name}
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {siteContent.navigation.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-body font-medium transition-colors ${
                location === link.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          {!isLoading && (
            isAuthenticated ? (
              <Link href="/dashboard">
                <Button data-testid="button-dashboard">Dashboard</Button>
              </Link>
            ) : (
              <Link href={siteContent.navigation.cta.href}>
                <Button data-testid="button-login">{siteContent.navigation.cta.label}</Button>
              </Link>
            )
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-lg z-40"
          data-testid="mobile-menu"
        >
          <nav className="container-content flex flex-col gap-4 py-8">
            {siteContent.navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium py-3 transition-colors ${
                  location === link.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              {!isLoading && (
                isAuthenticated ? (
                  <Link href="/dashboard">
                    <Button className="w-full" data-testid="button-mobile-dashboard">
                      Dashboard
                    </Button>
                  </Link>
                ) : (
                  <Link href={siteContent.navigation.cta.href}>
                    <Button className="w-full" data-testid="button-mobile-login">
                      {siteContent.navigation.cta.label}
                    </Button>
                  </Link>
                )
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
