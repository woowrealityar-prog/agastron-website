import PageMeta from "@/seo/PageMeta";
import SectionHero from "@/shared/sections/careers/SectionHero";
import SectionCultureValues from "@/shared/sections/careers/SectionCultureValues";
import SectionOpenPositions from "@/shared/sections/careers/SectionOpenPositions";
import SectionCTA from "@/shared/sections/careers/SectionCTA";

export default function CareersPage() {
  return (
    <>
      <PageMeta title="Agastron - Careers" />
      {/* 1. Hero: Join Agastron */}
      <SectionHero />

      {/* 2. Culture & Values: Why Work at Agastron? */}
      <SectionCultureValues />

      {/* 3. Now Hiring: Open Positions Stack */}
      <SectionOpenPositions />

      {/* 4. Don't see your role? Open Application CTA */}
      <SectionCTA />
    </>
  );
}
