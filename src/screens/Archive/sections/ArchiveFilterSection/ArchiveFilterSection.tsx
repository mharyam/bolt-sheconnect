import React from "react";
import { Button } from "../../../../components/ui/button";
import { FilterState } from "../../Archive";

interface ArchiveFilterSectionProps {
  filters: FilterState;
  onFiltersChange: (filters: Partial<FilterState>) => void;
}

export const ArchiveFilterSection = ({ filters, onFiltersChange }: ArchiveFilterSectionProps): JSX.Element => {
  const filterOptions = [
    "ALL",
    "TECH",
    "UI/UX", 
    "CODING",
    "HEALTH",
    "BUSINESS",
    "EDUCATION",
    "ARTS",
    "COMMUNITY"
  ];

  const handleFilterClick = (filter: string) => {
    onFiltersChange({ 
      activeFilter: filter,
      selectedCategory: filter === "ALL" ? "" : filter
    });
  };

  return (
    <section className="w-full py-8 bg-neutralneutral-1 border-b border-neutral-200">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="flex flex-wrap gap-4 justify-center">
          {filterOptions.map((filter) => (
            <Button
              key={filter}
              variant={filters.activeFilter === filter ? "default" : "outline"}
              onClick={() => handleFilterClick(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filters.activeFilter === filter
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