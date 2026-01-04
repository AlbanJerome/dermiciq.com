import { useEffect } from "react";
import { useLocation } from "wouter";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/config/siteContent";
import { useAuth } from "@/hooks/use-auth";
import { Loader2, Rocket, LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Dashboard() {
  const { dashboard } = siteContent;
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setLocation("/login");
    }
  }, [isAuthenticated, isLoading, setLocation]);

  if (isLoading) {
    return (
      <Layout>
        <SEO
          title={dashboard.meta.title}
          description={dashboard.meta.description}
          path="/dashboard"
        />
        <section className="min-h-[80vh] flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </section>
      </Layout>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const initials = user
    ? `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`.toUpperCase() || "U"
    : "U";

  return (
    <Layout>
      <SEO
        title={dashboard.meta.title}
        description={dashboard.meta.description}
        path="/dashboard"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-dermiciq-softMint/30 via-background to-background min-h-[80vh]">
        <div className="container-content">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user?.profileImageUrl || undefined} />
                <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1
                  className="text-2xl font-bold text-foreground"
                  data-testid="text-dashboard-welcome"
                >
                  {dashboard.headline}, {user?.firstName || "User"}
                </h1>
                <p className="text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => logout()} data-testid="button-logout">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>

          <Card className="p-12 text-center max-w-2xl mx-auto" data-testid="card-coming-soon">
            <Badge
              variant="secondary"
              className="mb-6 text-caption no-default-active-elevate"
            >
              <Rocket className="h-3.5 w-3.5 mr-1.5" />
              Under Development
            </Badge>

            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-dermiciq-turquoise/20 to-primary/10 rounded-full flex items-center justify-center">
              <User className="h-12 w-12 text-primary" />
            </div>

            <h2
              className="text-section-mobile lg:text-3xl font-bold mb-4 text-foreground"
              data-testid="text-coming-soon-title"
            >
              {dashboard.comingSoon.title}
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-md mx-auto">
              {dashboard.comingSoon.description}
            </p>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
