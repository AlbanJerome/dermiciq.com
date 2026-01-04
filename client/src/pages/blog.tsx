import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Fragrance Allergies: What's Really in Your Products",
    excerpt: "Fragrance is listed as a single ingredient, but it can contain hundreds of different chemicals. Here's what you need to know about fragrance sensitivities.",
    category: "Ingredients",
    readTime: "5 min read",
    date: "January 2025",
    image: null,
  },
  {
    id: 2,
    title: "The Hidden World of Coconut Derivatives",
    excerpt: "Think you're avoiding coconut? It might be hiding in your products under 50+ different names. We break down the most common ones.",
    category: "Hidden Ingredients",
    readTime: "7 min read",
    date: "January 2025",
    image: null,
  },
  {
    id: 3,
    title: "What Health Canada's 2025 Regulations Mean for You",
    excerpt: "New ingredient disclosure rules are coming. Here's how they'll help you make better skincare choices—and how Dermiciq is preparing.",
    category: "Regulations",
    readTime: "4 min read",
    date: "December 2024",
    image: null,
  },
  {
    id: 4,
    title: "Why 'Clean Beauty' Labels Don't Tell the Whole Story",
    excerpt: "Clean beauty sounds great, but these labels aren't regulated. Learn how to look beyond marketing claims to find products that actually work for your skin.",
    category: "Industry",
    readTime: "6 min read",
    date: "December 2024",
    image: null,
  },
  {
    id: 5,
    title: "Building Your Personal Sensitivity Profile",
    excerpt: "A step-by-step guide to identifying your triggers and creating a skincare routine that works for your unique skin.",
    category: "Guides",
    readTime: "8 min read",
    date: "November 2024",
    image: null,
  },
  {
    id: 6,
    title: "Eczema-Friendly Skincare: What the Research Says",
    excerpt: "Managing eczema is challenging. We dive into the latest research on ingredients that soothe versus those that trigger flares.",
    category: "Conditions",
    readTime: "6 min read",
    date: "November 2024",
    image: null,
  },
];

export default function Blog() {
  return (
    <Layout>
      <SEO
        title="Blog | Dermiciq Technologies"
        description="Skincare insights, ingredient deep-dives, and the latest news in personalized skincare intelligence."
        path="/blog"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-dermiciq-softMint/30 via-background to-background">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-hero-mobile lg:text-hero mb-6 text-foreground" data-testid="text-blog-headline">
              The Dermiciq Blog
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Skincare insights, ingredient deep-dives, and tips for sensitive skin.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover-elevate cursor-pointer group"
                data-testid={`card-blog-${post.id}`}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-dermiciq-softMint/40 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary/30">{post.id}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs no-default-active-elevate">
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">More articles coming soon!</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-dermiciq-softMint/30 to-background">
        <div className="container-content text-center">
          <h2 className="text-section-mobile lg:text-section mb-4 text-foreground">
            Ready to Try Dermiciq?
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Put what you've learned into practice with personalized ingredient analysis.
          </p>
          <Link href="/login" data-testid="link-blog-cta">
            <Button size="lg" className="text-lg px-8" data-testid="button-blog-cta">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
