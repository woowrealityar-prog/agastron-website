import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/services-3/Section1";
import Section2 from "@/shared/sections/services-3/Section2";
import SectionStepByStep from "@/shared/sections/services-3/SectionStepByStep";
import SectionCTA from "@/shared/sections/services-3/SectionCTA";

export default function Services3Page() {
  return (
    <>
      <PageMeta title="Agastron - Enterprise Platforms" />
      {/* 1. Hero */}
      <Section1 />
      {/* 2. Four Pillars (row g-3) */}
      <Section2 />
      {/* 3. Step by step platform capabilities stack */}
      <SectionStepByStep />
      {/* 4. Enterprise CTA (sec-9-home-8 style) */}
      <SectionCTA />
    </>
  );
}
