import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const ArchiveSearchSection = (): JSX.Element => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecommend, setSelectedRecommend] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const recommendOptions = [
    "Most Popular",
    "Newest",
    "Most Active",
    "Alphabetical"
  ];

  const locationOptions = [
    "Global",
    "USA",
    "Canada", 
    "UK",
    "Australia",
    "Nigeria",
    "South Africa"
  ];

  const categoryOptions = [
    "Tech",
    "UI/UX",
    "Coding",
    "Health",
    "Business",
    "Education",
    "Arts"
  ];

  return (
    <section className="w-full py-12 ">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="border-2 border-dashed border-blue-300 rounded-2xl p-8 bg-blue-50/30">
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask anything"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
              <Button className="absolute right-2 top-2 h-10 px-6 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-sm font-medium">
                <Search className="w-4 h-4 mr-2" />
                ASK MataConnect
              </Button>
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap gap-4">
            {/* Recommend Dropdown */}
            <div className="relative">
              <select
                value={selectedRecommend}
                onChange={(e) => setSelectedRecommend(e.target.value)}
                className="appearance-none bg-white border border-neutral-300 rounded-lg px-4 py-3 pr-10 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent cursor-pointer min-w-[140px]"
              >
                <option value="">Recommend</option>
                {recommendOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Location Dropdown */}
            <div className="relative">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="appearance-none bg-white border border-neutral-300 rounded-lg px-4 py-3 pr-10 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent cursor-pointer min-w-[120px]"
              >
                <option value="">Location</option>
                {locationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Categories Dropdown */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-neutral-300 rounded-lg px-4 py-3 pr-10 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:border-transparent cursor-pointer min-w-[130px]"
              >
                <option value="">Categories</option>
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};