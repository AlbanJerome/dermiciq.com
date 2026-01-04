import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import blogImage1 from "@assets/stock_images/woman_reading_produc_9efadd18.jpg";
import blogImage2 from "@assets/stock_images/diverse_women_skinca_552bf2ef.jpg";
import blogImage3 from "@assets/stock_images/young_woman_applying_35ae33fd.jpg";
import blogImage4 from "@assets/stock_images/young_woman_applying_6ff17e5d.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Fragrance Allergies: What's Really in Your Products",
    excerpt: "Fragrance is listed as a single ingredient, but it can contain hundreds of different chemicals. Here's what you need to know about fragrance sensitivities and how to protect yourself.",
    category: "Ingredients",
    readTime: "5 min read",
    date: "January 2025",
    image: blogImage1,
  },
  {
    id: 2,
    title: "The Hidden World of Coconut Derivatives",
    excerpt: "Think you're avoiding coconut? It might be hiding in your products under 50+ different names. We break down the most common ones and show you what to look for.",
    category: "Hidden Ingredients",
    readTime: "7 min read",
    date: "January 2025",
    image: blogImage2,
  },
  {
    id: 3,
    title: "What Health Canada's 2025 Regulations Mean for You",
    excerpt: "New ingredient disclosure rules are coming. Here's how they'll help you make better skincare choices—and how Dermiciq is preparing to help you navigate these changes.",
    category: "Regulations",
    readTime: "4 min read",
    date: "December 2024",
    image: blogImage3,
  },
  {
    id: 4,
    title: "Why 'Clean Beauty' Labels Don't Tell the Whole Story",
    excerpt: "Clean beauty sounds great, but these labels aren't regulated. Learn how to look beyond marketing claims to find products that actually work for your sensitive skin.",
    category: "Industry",
    readTime: "6 min read",
    date: "December 2024",
    image: blogImage4,
  },
  {
    id: 5,
    title: "Building Your Personal Sensitivity Profile",
    excerpt: "A step-by-step guide to identifying your triggers and creating a skincare routine that works for your unique skin. No more guessing, no more reactions.",
    category: "Guides",
    readTime: "8 min read",
    date: "November 2024",
    image: blogImage1,
  },
  {
    id: 6,
    title: "Eczema-Friendly Skincare: What the Research Says",
    excerpt: "Managing eczema is challenging. We dive into the latest research on ingredients that soothe versus those that trigger flares, so you can shop with confidence.",
    category: "Conditions",
    readTime: "6 min read",
    date: "November 2024",
    image: blogImage2,
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover-elevate cursor-pointer group"
                data-testid={`card-blog-${post.id}`}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-testid={`img-blog-${post.id}`}
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="secondary" className="no-default-active-elevate">
                      {post.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground">More articles coming soon!</p>
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
