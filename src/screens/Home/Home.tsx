import React from "react";
import { CommunityEngagementSection } from "./sections/CommunityEngagementSection";
import { CommunityEngagementWrapperSection } from "./sections/CommunityEngagementWrapperSection";
import { CommunityHighlightSection } from "./sections/CommunityHighlightSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { InspirationalQuoteSection } from "./sections/InspirationalQuoteSection";
import { NavigationSection } from "./sections/NavigationSection";

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full relative bg-neutralneutral-1 overflow-hidden">
      <NavigationSection />
      <HeroSection/>
      <CommunityHighlightSection />
      <InspirationalQuoteSection />
      <CommunityEngagementSection />
      <CommunityEngagementWrapperSection />
      <FooterSection />
    </div>
  );
};
