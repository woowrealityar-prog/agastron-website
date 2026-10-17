import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/services-2/Section1";
import Section2 from "@/shared/sections/services-2/Section2";
import SectionGrowthEngine from "@/shared/sections/services-2/SectionGrowthEngine";
import SectionWhatProblemsWeSolve from "@/shared/sections/services-2/SectionWhatProblemsWeSolve";
import SectionCTA from "@/shared/sections/services-2/SectionCTA";

export default function Services2Page() {
  return (
    <>
      <PageMeta title="Agastron - AI & Automation" />
      {/* 1. Hero */}
      <Section1 />
      {/* 2. Ticker */}
      <Section2 />
      {/* 3. The Growth Engine (4 Pillars: AI-Native, Automation, ML Pipelines, 60% Cost Cut) */}
      <SectionGrowthEngine />
      {/* 4. What Problems We Solve (Vertical stacking cards) */}
      <SectionWhatProblemsWeSolve />
      {/* 5. CTA (sec-9-home-8 style) */}
      <SectionCTA />
    </>
  );
}
