import React from "react";
import HeroSection from "./components/HeroSection";
import OverviewSection from "./components/OverviewSection";
import OrganizationSection from "./components/OrganizationSection";
import SymptomsSection from "./components/SymptomsSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import SymptomsDescriptionSection from "./components/SymptomsDescriptionSection";
import SpecialSymptomsSection from "./components/SpecialSymptomsSection";
import FAQSection from "./components/FAQSection";

export default function App() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <OrganizationSection />
      <SymptomsSection />
      <SuccessStoriesSection />
      <SymptomsDescriptionSection />
      <SpecialSymptomsSection />
      <SuccessStoriesSection />
      <FAQSection />
    </>
  );
}
