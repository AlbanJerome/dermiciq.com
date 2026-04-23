import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO, FAQSchema } from "@/components/ui/seo";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeExecutiveSummary } from "@/components/sections/HomeExecutiveSummary";
import { HomeMissionVision } from "@/components/sections/HomeMissionVision";
import { HomeProblemSolution } from "@/components/sections/HomeProblemSolution";
import { HomeKeyDifferentiators } from "@/components/sections/HomeKeyDifferentiators";
import { HomeHowPreview } from "@/components/sections/HomeHowPreview";
import { HomeTargetUsers } from "@/components/sections/HomeTargetUsers";
import { HomeProductEthical } from "@/components/sections/HomeProductEthical";
import { HomeContact } from "@/components/sections/HomeContact";

export default function Home() {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <Layout>
      <SEO path="/" />
      <FAQSchema />
      <HomeHero />
      <HomeExecutiveSummary />
      <HomeMissionVision />
      <HomeProblemSolution />
      <HomeKeyDifferentiators />
      <HomeHowPreview />
      <HomeTargetUsers />
      <HomeProductEthical />
      <HomeContact />
    </Layout>
  );
}
