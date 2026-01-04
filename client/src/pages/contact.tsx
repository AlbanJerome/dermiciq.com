import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/ui/seo";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { siteContent } from "@/config/siteContent";
import { MessageSquare, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { contact } = siteContent;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await apiRequest("POST", "/api/contact", {
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("organization"),
        message: formData.get("message"),
        inquiryType: "General",
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        toast({
          title: contact.toasts.successTitle,
          description: contact.form.success,
        });
        form.reset();
      } else {
        throw new Error(data.message || contact.form.error);
      }
    } catch {
      toast({
        title: contact.toasts.errorTitle,
        description: contact.form.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title={contact.meta.title}
        description={contact.meta.description}
        path="/contact"
      />

      <section className="py-16 lg:py-24 bg-gradient-to-br from-dermiciq-softMint/30 via-background to-background">
        <div className="container-content">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <Badge
              variant="secondary"
              className="mb-6 text-caption no-default-active-elevate"
              data-testid="badge-contact"
            >
              <MessageSquare className="h-3.5 w-3.5 mr-1.5" />
              {contact.hero.badge}
            </Badge>
            <h1
              className="text-hero-mobile lg:text-hero mb-6 text-foreground"
              data-testid="text-contact-headline"
            >
              {contact.hero.headline}
            </h1>
            <p className="text-body-lg text-muted-foreground">
              {contact.hero.subheadline}
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <Card className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold mb-2 text-foreground">
                      {contact.successState.headline}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {contact.form.success}
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      data-testid="button-send-another"
                    >
                      {contact.successState.sendAnother}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          {contact.form.fields.name.label}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder={contact.form.fields.name.placeholder}
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {contact.form.fields.email.label}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder={contact.form.fields.email.placeholder}
                          required
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">
                        {contact.form.fields.organization.label}
                      </Label>
                      <Input
                        id="organization"
                        name="organization"
                        placeholder={contact.form.fields.organization.placeholder}
                        data-testid="input-organization"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {contact.form.fields.message.label}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={contact.form.fields.message.placeholder}
                        rows={6}
                        required
                        className="resize-none"
                        data-testid="textarea-message"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      {isSubmitting ? (
                        contact.submitting
                      ) : (
                        <>
                          {contact.form.submit}
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {contact.infoCards.email}
                    </h3>
                    <p className="text-muted-foreground">{contact.info.email}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {contact.infoCards.location}
                    </h3>
                    <p className="text-muted-foreground">{contact.info.location}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {contact.infoCards.hours}
                    </h3>
                    <p className="text-muted-foreground">{contact.info.hours}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
