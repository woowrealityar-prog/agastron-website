import PageMeta from "@/seo/PageMeta";
import SectionHero from "@/shared/sections/about-1/Section1";
import SectionWhoWeAre from "@/shared/sections/about-1/SectionWhoWeAre";
import SectionVisionMission from "@/shared/sections/about-1/SectionVisionMission";
import SectionLeadershipTeam from "@/shared/sections/about-1/SectionLeadershipTeam";

export default function About1Page() {
  return (
    <>
      <PageMeta title="Agastron - About Us" />
      {/* 1. Hero: About Agastron */}
      <SectionHero />

      {/* 2. Who We Are: sec-3-home-8 style */}
      <SectionWhoWeAre />

      {/* 3. Our Vision & Mission: Index-5 "why orisa" style */}
      <SectionVisionMission />

      {/* 4. Leadership Team: "MEET OUR TEAM" style */}
      <SectionLeadershipTeam />
    </>
  );
}
