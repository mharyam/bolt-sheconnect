import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

export const ArchiveFilterSection = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = [
    "ALL",
    "TECH",
    "UI/UX", 
    "CODING",
    "HEALTH",
    "BUSINESS",
    "EDUCATION",
    "ARTS"
  ];

  return (
    <section className="w-full py-8 bg-neutralneutral-1 border-b border-neutral-200">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="flex flex-wrap gap-4 justify-center">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-neutral-800 text-white hover:bg-neutral-700"
                  : "bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-50"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};