import { Layout } from "@/components/layout/Layout";
import { SEO, FAQSchema } from "@/components/ui/seo";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { RegulatoryWedge } from "@/components/sections/RegulatoryWedge";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <Layout>
      <SEO path="/" />
      <FAQSchema />
      <Hero />
      <ProblemSection />
      <BentoGrid />
      <RegulatoryWedge />
      <StatsCounter />
      <FAQ />
      <CTASection />
    </Layout>
  );
}
