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
import blogImage5 from "@assets/stock_images/skincare_products_be_d06a71bc.jpg";
import blogImage6 from "@assets/stock_images/skincare_products_be_c7cc5961.jpg";

export const blogPosts = [
  {
    id: 1,
    slug: "understanding-fragrance-allergies",
    title: "Understanding Fragrance Allergies: What's Really in Your Products",
    excerpt: "Fragrance is listed as a single ingredient, but it can contain hundreds of different chemicals. Here's what you need to know about fragrance sensitivities and how to protect yourself.",
    content: `Fragrance is one of the most common allergens in skincare products, yet it appears as just one word on ingredient lists. The reality is far more complex.

When you see "fragrance" or "parfum" on a label, it could represent a blend of dozens—sometimes hundreds—of individual chemicals. This trade secret protection means you never really know what you're putting on your skin.

**Why Fragrance Is Problematic for Sensitive Skin**

For those of us with eczema, rosacea, or contact dermatitis, fragrance can trigger inflammation, redness, and flare-ups. The challenge is that reactions aren't always immediate—sometimes they build up over time.

**What to Look For**

- "Fragrance" or "parfum" on ingredient lists
- "Natural fragrance" (still can cause reactions)
- Essential oils (common allergens include lavender, tea tree, and citrus)
- Limonene, linalool, and other fragrance components

**How Dermiciq Helps**

Our Mapper Engine identifies fragrance compounds and cross-references them with your personal sensitivity profile. We don't just flag "fragrance"—we help you understand the specific components that matter for your skin.`,
    category: "Ingredients",
    readTime: "5 min read",
    date: "January 2025",
    image: blogImage1,
  },
  {
    id: 2,
    slug: "hidden-world-coconut-derivatives",
    title: "The Hidden World of Coconut Derivatives",
    excerpt: "Think you're avoiding coconut? It might be hiding in your products under 50+ different names. We break down the most common ones and show you what to look for.",
    content: `Coconut allergies are tricky. You might carefully avoid anything labeled "coconut," only to react to a product that seems completely coconut-free. The culprit? Coconut derivatives hiding under different names.

**Common Coconut Derivatives to Watch For**

- Caprylic/Capric Triglyceride
- Coco-Glucoside
- Sodium Cocoyl Isethionate
- Cocamidopropyl Betaine
- Lauric Acid
- Cetyl Alcohol (sometimes derived from coconut)

**Why Standard Apps Miss These**

Most ingredient checkers don't connect the dots between coconut and its 50+ derivatives. They might flag "coconut oil" but give a green light to "caprylic triglyceride"—even though both could trigger your allergy.

**The Dermiciq Difference**

Our system maps ingredient relationships and derivatives. When you tell us you're sensitive to coconut, we automatically flag all related compounds, not just the obvious ones.`,
    category: "Hidden Ingredients",
    readTime: "7 min read",
    date: "January 2025",
    image: blogImage2,
  },
  {
    id: 3,
    slug: "health-canada-2025-regulations",
    title: "What Health Canada's 2025 Regulations Mean for You",
    excerpt: "New ingredient disclosure rules are coming. Here's how they'll help you make better skincare choices—and how Dermiciq is preparing to help you navigate these changes.",
    content: `Health Canada is rolling out new cosmetic ingredient disclosure requirements in 2025 and 2026. For those of us with sensitive skin, this is a game-changer.

**What's Changing**

- More detailed fragrance disclosure requirements
- Better labeling for potential allergens
- Clearer ingredient concentration information

**Why This Matters**

Currently, companies can hide problematic ingredients under umbrella terms. The new regulations will require more transparency, making it easier to identify potential triggers.

**How Dermiciq Is Preparing**

We're building our Mapper Engine to take full advantage of these new disclosure requirements. As companies update their ingredient lists, we'll help you understand exactly what those changes mean for your skin.`,
    category: "Regulations",
    readTime: "4 min read",
    date: "December 2024",
    image: blogImage3,
  },
  {
    id: 4,
    slug: "clean-beauty-labels-truth",
    title: "Why 'Clean Beauty' Labels Don't Tell the Whole Story",
    excerpt: "Clean beauty sounds great, but these labels aren't regulated. Learn how to look beyond marketing claims to find products that actually work for your sensitive skin.",
    content: `"Clean," "natural," "green," "non-toxic"—these terms are everywhere in skincare marketing. But here's the thing: none of them are regulated.

**The Problem with Clean Beauty**

- No legal definition exists for "clean" beauty
- Brands define their own standards
- Natural ingredients can still cause reactions
- "Clean" doesn't mean "safe for sensitive skin"

**What Actually Matters**

Instead of relying on marketing terms, focus on:
- Full ingredient lists
- Understanding your personal triggers
- Concentration levels (how much of an ingredient is actually in the product)
- Patch testing new products

**The Dermiciq Approach**

We skip the marketing hype and go straight to the ingredients. Our analysis is based on what's actually in the bottle—not what's on the front label.`,
    category: "Industry",
    readTime: "6 min read",
    date: "December 2024",
    image: blogImage4,
  },
  {
    id: 5,
    slug: "building-sensitivity-profile",
    title: "Building Your Personal Sensitivity Profile",
    excerpt: "A step-by-step guide to identifying your triggers and creating a skincare routine that works for your unique skin. No more guessing, no more reactions.",
    content: `Creating a personalized sensitivity profile is the foundation of smarter skincare choices. Here's how to build yours.

**Step 1: Track Your Reactions**

Keep a simple log of products you've used and any reactions. Note the timeline—some reactions are immediate, others take days.

**Step 2: Identify Patterns**

Look for common ingredients in products that caused problems. Our Mapper Engine can help by analyzing ingredient overlap.

**Step 3: Start with the Basics**

Begin with a minimal routine using products you know are safe, then introduce new products one at a time.

**Step 4: Update Your Profile**

Your sensitivities can change over time. Regularly update your profile based on new experiences.

**How Dermiciq Helps**

When you create a Dermiciq profile, we remember your sensitivities and automatically check every product against your personal triggers.`,
    category: "Guides",
    readTime: "8 min read",
    date: "November 2024",
    image: blogImage5,
  },
  {
    id: 6,
    slug: "eczema-friendly-skincare-research",
    title: "Eczema-Friendly Skincare: What the Research Says",
    excerpt: "Managing eczema is challenging. We dive into the latest research on ingredients that soothe versus those that trigger flares, so you can shop with confidence.",
    content: `Living with eczema means constantly evaluating what you put on your skin. Here's what current research tells us about eczema-friendly ingredients.

**Ingredients That May Help**

- Ceramides (help restore skin barrier)
- Colloidal oatmeal (anti-inflammatory properties)
- Niacinamide (supports barrier function)
- Hyaluronic acid (hydration without irritation)

**Common Triggers to Avoid**

- Fragrances and essential oils
- Sulfates (harsh cleansing agents)
- Certain preservatives (like methylisothiazolinone)
- High concentrations of retinoids

**The Personalization Factor**

Remember: what triggers one person's eczema might be fine for another. That's why personalized analysis matters more than generic "eczema-friendly" labels.

**Using Dermiciq for Eczema**

When you select eczema as a condition in your profile, we prioritize ingredients known to support barrier function and flag common eczema triggers.`,
    category: "Conditions",
    readTime: "6 min read",
    date: "November 2024",
    image: blogImage6,
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
              <Link key={post.id} href={`/blog/${post.slug}`} data-testid={`link-blog-${post.id}`}>
                <Card 
                  className="overflow-hidden hover-elevate cursor-pointer group h-full"
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
              </Link>
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
