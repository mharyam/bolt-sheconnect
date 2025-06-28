import React from "react";
import { NavigationSection } from "../Home/sections/NavigationSection";
import { FooterSection } from "../Home/sections/FooterSection";
import { ArchiveHeroSection } from "./sections/ArchiveHeroSection";
import { ArchiveSearchSection } from "./sections/ArchiveSearchSection";
import { ArchiveFilterSection } from "./sections/ArchiveFilterSection";
import { ArchiveGridSection } from "./sections/ArchiveGridSection";

export const Archive = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full relative bg-neutralneutral-1 overflow-hidden">

      <ArchiveFilterSection />
      <ArchiveGridSection />
      <FooterSection />
    </div>
  );
};