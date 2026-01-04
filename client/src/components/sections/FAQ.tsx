import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteContent } from "@/config/siteContent";

export function FAQ() {
  const { faq } = siteContent;

  return (
    <section className="py-16 lg:py-24 bg-card/50" data-testid="section-faq">
      <div className="container-content">
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-section-mobile lg:text-section mb-4 text-foreground"
            data-testid="text-faq-headline"
          >
            {faq.headline}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left text-body-lg font-semibold py-5 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-body pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
