import React from "react";
import { NavigationSection } from "../Home/sections/NavigationSection";
import { FooterSection } from "../Home/sections/FooterSection";
import { AboutHeroSection } from "./sections/AboutHeroSection";
import { AboutMissionSection } from "./sections/AboutMissionSection";
import { AboutStatsSection } from "./sections/AboutStatsSection";
import { AboutTeamSection } from "./sections/AboutTeamSection";
import { AboutCommunitySection } from "./sections/AboutCommunitySection";

export const About = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full relative bg-neutralneutral-1 overflow-hidden">
      <NavigationSection />
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutStatsSection />
      <AboutTeamSection />
      <AboutCommunitySection />
      <FooterSection />
    </div>
  );
};