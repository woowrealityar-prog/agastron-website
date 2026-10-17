import PageMeta from "@/seo/PageMeta";
import Section1 from "@/shared/sections/index-4/Section1";
import Section2 from "@/shared/sections/index-4/Section2";
import Section2Works from "@/shared/sections/index-4/Section2Works";
import Section3 from "@/shared/sections/index-4/Section3";
import Section4 from "@/shared/sections/index-4/Section4";
import Section6 from "@/shared/sections/index-4/Section6";
import Section8 from "@/shared/sections/index-4/Section8";

export default function Home4Page() {
  return (
    <>
      <PageMeta title="Agastron Group - Home" />
      <Section1 />
      {/* WHO WE ARE section */}
      <Section2 />
      {/* WHAT WE OFFER (4 Stacking Business Engines) */}
      <Section2Works />
      <Section3 />
      <Section4 />
      {/* Section 5 (Awards) hidden per user choice Option B */}
      {/* Section 6 (Leadership) hidden per request */}
      {/* <Section6 /> */}
      {/* Section 7 (Testimonials) hidden per user choice Option B */}
      <Section8 />
    </>
  );
}
