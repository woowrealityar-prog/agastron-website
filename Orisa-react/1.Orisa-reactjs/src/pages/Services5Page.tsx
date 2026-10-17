import PageMeta from "@/seo/PageMeta";
import Services5Effect from "@/shared/effects/Services5Effect";
import Section1 from "@/shared/sections/services-5/Section1";
import Section2 from "@/shared/sections/services-5/Section2";
import Section3 from "@/shared/sections/services-5/Section3";
import SectionCTA from "@/shared/sections/services-5/SectionCTA";

export default function Services5Page() {
  return (
    <>
      <PageMeta title="Agastron - Digital Transformation" />
      <Section1 />
      <Section3 />
      <Section2 />
      <SectionCTA />
      <Services5Effect />
    </>
  );
}
