import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/services-4/Section1";
import Section2 from "@/shared/sections/services-4/Section2";
import SectionApproach from "@/shared/sections/services-4/SectionApproach";
import SectionWhatWeDo from "@/shared/sections/services-4/SectionWhatWeDo";
import SectionCTA from "@/shared/sections/services-4/SectionCTA";

export default function Services4Page() {
  return (
    <>
      <PageMeta title="Agastron - Data & Analytics" />
      {/* 1. Hero */}
      <Section1 />
      {/* 2. Ticker */}
      <Section2 />
      {/* 3. Our Approach (Replaced "The Growth Engine" with pricing page's "OUR APPROACH" section) */}
      <SectionApproach />
      {/* 4. What We Do (Replaced "What Problems We Solve" with home-3's "What we do" pinned scroll section) */}
      <SectionWhatWeDo />
      {/* 5. CTA (sec-9-home-8 style) */}
      <SectionCTA />
    </>
  );
}
