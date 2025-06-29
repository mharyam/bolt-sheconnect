import React, { useState, useMemo, useEffect } from "react";
import { NavigationSection } from "../Home/sections/NavigationSection";
import { FooterSection } from "../Home/sections/FooterSection";
import { ArchiveSearchSection } from "./sections/ArchiveSearchSection";
import { ArchiveFilterSection } from "./sections/ArchiveFilterSection";
import { ArchiveGridSection } from "./sections/ArchiveGridSection";
import { communityService, Community } from "../../lib/communityService";

export interface FilterState {
  searchQuery: string;
  selectedRecommend: string;
  selectedLocation: string;
  selectedCategory: string;
  activeFilter: string;
}

export const Archive = (): JSX.Element => {
  const [filters, setFilters] = useState<FilterState>({
    searchQuery: "",
    selectedRecommend: "",
    selectedLocation: "",
    selectedCategory: "",
    activeFilter: "ALL"
  });

  const [allCommunities, setAllCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load communities on component mount
  useEffect(() => {
    const loadCommunities = async () => {
      try {
        setLoading(true);
        const communities = await communityService.getAllCommunities();
        setAllCommunities(communities);
        setError(null);
      } catch (err) {
        console.error('Error loading communities:', err);
        setError('Failed to load communities. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadCommunities();
  }, []);

  // Filter and sort communities based on current filters
  const filteredCommunities = useMemo(() => {
    let filtered = [...allCommunities];

    // Apply search query filter
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(community =>
        community.name.toLowerCase().includes(query) ||
        community.description.toLowerCase().includes(query) ||
        community.category.toLowerCase().includes(query) ||
        community.location.toLowerCase().includes(query)
      );
    }

    // Apply category filter from both sources (activeFilter and selectedCategory)
    const categoryFilter = filters.selectedCategory || (filters.activeFilter !== "ALL" ? filters.activeFilter : "");
    if (categoryFilter) {
      filtered = filtered.filter(community =>
        community.category.toUpperCase() === categoryFilter.toUpperCase()
      );
    }

    // Apply location filter
    if (filters.selectedLocation) {
      filtered = filtered.filter(community => {
        if (filters.selectedLocation === "Global") {
          return community.location.toUpperCase().includes("GLOBAL");
        }
        return community.location.toUpperCase().includes(filters.selectedLocation.toUpperCase());
      });
    }

    // Apply sorting based on recommendation
    if (filters.selectedRecommend) {
      switch (filters.selectedRecommend) {
        case "Most Popular":
          filtered.sort((a, b) => {
            const getMemberCount = (members: string) => {
              const num = parseFloat(members.replace(/[^\d.]/g, ''));
              return members.includes('K') ? num * 1000 : num;
            };
            return getMemberCount(b.members) - getMemberCount(a.members);
          });
          break;
        case "Alphabetical":
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "Newest":
          // For demo purposes, reverse the array (assuming newer communities are at the end)
          filtered.reverse();
          break;
        case "Most Active":
          // For demo purposes, sort by member count as a proxy for activity
          filtered.sort((a, b) => {
            const getMemberCount = (members: string) => {
              const num = parseFloat(members.replace(/[^\d.]/g, ''));
              return members.includes('K') ? num * 1000 : num;
            };
            return getMemberCount(b.members) - getMemberCount(a.members);
          });
          break;
      }
    }

    return filtered;
  }, [filters, allCommunities]);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  if (loading) {
    return (
      <div className="flex flex-col w-full relative bg-neutralneutral-1 overflow-hidden">
        <NavigationSection />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neutral-800 mx-auto mb-4"></div>
            <p className="text-neutral-600">Loading communities...</p>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col w-full relative bg-neutralneutral-1 overflow-hidden">
        <NavigationSection />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-4 py-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700"
            >
              Try Again
            </button>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full relative bg-neutralneutral-1 overflow-hidden">
      <NavigationSection />
      <ArchiveSearchSection filters={filters} onFiltersChange={updateFilters} />
      <ArchiveFilterSection filters={filters} onFiltersChange={updateFilters} />
      <ArchiveGridSection 
        communities={filteredCommunities} 
        totalCount={allCommunities.length}
        filteredCount={filteredCommunities.length}
      />
      <FooterSection />
    </div>
  );
};