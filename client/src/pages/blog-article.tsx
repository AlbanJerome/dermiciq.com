import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "wouter";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "./blog";

export default function BlogArticle() {
  const params = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <Layout>
        <SEO
          title="Article Not Found | Dermiciq Blog"
          description="The article you're looking for could not be found."
          path={`/blog/${params.slug}`}
        />
        <section className="py-16 lg:py-24 bg-background">
          <div className="container-content text-center">
            <h1 className="text-hero-mobile lg:text-hero mb-6 text-foreground">
              Article Not Found
            </h1>
            <p className="text-body-lg text-muted-foreground mb-8">
              Sorry, we couldn't find that article.
            </p>
            <Link href="/blog">
              <Button data-testid="button-back-to-blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === params.slug);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  return (
    <Layout>
      <SEO
        title={`${post.title} | Dermiciq Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
      />

      <article>
        <section className="py-12 lg:py-16 bg-gradient-to-br from-dermiciq-softMint/30 via-background to-background">
          <div className="container-content max-w-4xl">
            <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8" data-testid="link-back-to-blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="no-default-active-elevate">
                {post.category}
              </Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {post.date}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-foreground leading-tight" data-testid="text-article-title">
              {post.title}
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </section>

        <section className="py-8 lg:py-12 bg-background">
          <div className="container-content max-w-4xl">
            <div className="aspect-[2/1] overflow-hidden rounded-2xl mb-12">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
                data-testid="img-article-hero"
              />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold text-foreground mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(line => line.startsWith('- '));
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-card/50 border-t">
          <div className="container-content max-w-4xl">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className="flex-1" data-testid="link-prev-article">
                  <Card className="p-6 hover-elevate h-full">
                    <span className="text-sm text-muted-foreground flex items-center gap-1 mb-2">
                      <ArrowLeft className="h-3 w-3" />
                      Previous Article
                    </span>
                    <h3 className="font-semibold text-foreground line-clamp-2">{prevPost.title}</h3>
                  </Card>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              
              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} className="flex-1" data-testid="link-next-article">
                  <Card className="p-6 hover-elevate h-full text-right">
                    <span className="text-sm text-muted-foreground flex items-center gap-1 justify-end mb-2">
                      Next Article
                      <ArrowRight className="h-3 w-3" />
                    </span>
                    <h3 className="font-semibold text-foreground line-clamp-2">{nextPost.title}</h3>
                  </Card>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
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
            <Link href="/login" data-testid="link-article-cta">
              <Button size="lg" className="text-lg px-8" data-testid="button-article-cta">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  );
}
