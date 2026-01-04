import { useEffect } from "react";
import { useLocation } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/config/siteContent";
import { useAuth } from "@/hooks/use-auth";
import { Loader2 } from "lucide-react";
import { SiGoogle } from "react-icons/si";

export default function Login() {
  const { login } = siteContent;
  const { isAuthenticated, isLoading } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      setLocation("/dashboard");
    }
  }, [isAuthenticated, isLoading, setLocation]);

  const handleGoogleLogin = () => {
    window.location.href = "/api/login";
  };

  if (isLoading) {
    return (
      <Layout>
        <SEO title={login.meta.title} description={login.meta.description} path="/login" />
        <section className="min-h-[80vh] flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={login.meta.title} description={login.meta.description} path="/login" />

      <section className="min-h-[80vh] flex items-center justify-center py-16 bg-gradient-to-br from-dermiciq-softMint/30 via-background to-background">
        <div className="container-content">
          <Card className="max-w-md mx-auto p-8" data-testid="card-login">
            <div className="text-center mb-8">
              <img
                src="/logo.png"
                alt={siteContent.brand.name}
                className="h-16 w-16 mx-auto mb-4 rounded-xl"
              />
              <h1
                className="text-2xl font-bold text-foreground mb-2"
                data-testid="text-login-headline"
              >
                {login.headline}
              </h1>
              <p className="text-muted-foreground">{login.subheadline}</p>
            </div>

            <div className="space-y-4">
              <Button
                className="w-full"
                size="lg"
                onClick={handleGoogleLogin}
                data-testid="button-google-login"
              >
                <SiGoogle className="mr-2 h-4 w-4" />
                {login.googleButton}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    {login.divider}
                  </span>
                </div>
              </div>

              <div className="text-center py-4">
                <p className="text-muted-foreground text-caption">
                  {login.comingSoon}
                </p>
              </div>
            </div>

            <p className="text-caption text-muted-foreground text-center mt-6">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
