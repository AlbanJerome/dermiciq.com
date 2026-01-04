import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Heart, Shield, Sparkles, ArrowRight } from "lucide-react";
import aboutImage from "@assets/stock_images/diverse_women_skinca_4f516423.jpg";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Us | Dermiciq Technologies"
        description="Learn about Dermiciq's mission to revolutionize personalized skincare intelligence."
        path="/about"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-dermiciq-softMint/30 via-background to-background">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero-mobile lg:text-hero mb-6 text-foreground" data-testid="text-about-headline">
              About Dermiciq
            </h1>
            <p className="text-body-lg text-muted-foreground">
              We're building the future of personalized skincare intelligence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            <div className="order-2 lg:order-1">
              <h2 className="text-section-mobile lg:text-section mb-6 text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dermiciq was born from frustration. Like many of you, our founders spent years trying product after product, only to face unexpected reactions. The ingredient apps they tried gave everyone the same scores, ignoring the reality that our skin is as unique as we are.
                </p>
                <p>
                  We knew there had to be a better way. What if an app could learn about your specific sensitivities? What if it could catch those hidden ingredients that slip past other checkers?
                </p>
                <p>
                  That's what we're building at Dermiciq: skincare intelligence that actually understands you.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src={aboutImage} 
                  alt="Women enjoying skincare products" 
                  className="w-full h-auto object-cover"
                  data-testid="img-about"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-card/50">
        <div className="container-content max-w-5xl mx-auto">
          <Card className="p-8 lg:p-12 bg-primary/5 border-primary/20">
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To make personalized skincare guidance accessible to everyone, especially those of us with sensitive skin who've been underserved by one-size-fits-all solutions.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container-content">
          <h2 className="text-section-mobile lg:text-section mb-12 text-center text-foreground">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Your Skin Is Unique</h3>
              <p className="text-muted-foreground">
                What works for one person might not work for you—and that's okay. Skincare should be personalized.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Trust Matters</h3>
              <p className="text-muted-foreground">
                We'll never accept money from brands for favorable ratings. Your trust is more valuable than any sponsorship.
              </p>
            </Card>
            <Card className="p-8 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Science, Not Scare Tactics</h3>
              <p className="text-muted-foreground">
                We give you real information based on research—not fear-mongering designed to make you anxious.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-dermiciq-softMint/30 to-background">
        <div className="container-content text-center">
          <h2 className="text-section-mobile lg:text-section mb-4 text-foreground">
            Join Us
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to experience skincare intelligence that actually works for you?
          </p>
          <Link href="/login" data-testid="link-about-cta">
            <Button size="lg" className="text-lg px-8" data-testid="button-about-cta">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
