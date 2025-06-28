import React, { useState, useMemo } from "react";
import { NavigationSection } from "../Home/sections/NavigationSection";
import { FooterSection } from "../Home/sections/FooterSection";
import { ArchiveSearchSection } from "./sections/ArchiveSearchSection";
import { ArchiveFilterSection } from "./sections/ArchiveFilterSection";
import { ArchiveGridSection } from "./sections/ArchiveGridSection";

export interface Community {
  name: string;
  category: string;
  description: string;
  location: string;
  website: string;
  image: string;
  members: string;
}

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

  // All communities data
  const allCommunities: Community[] = [
    {
      name: "BLACK WOMEN IN TECH",
      category: "TECH",
      description: "Empowering black women in technology through mentorship, networking, and career development opportunities.",
      location: "ABUJA, NIGERIA",
      website: "WWW.BLACKWOMENTECH.COM",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "2.5K+"
    },
    {
      name: "LADIES THAT UX",
      category: "UI/UX",
      description: "A global community of women in UX design, fostering growth and collaboration in user experience.",
      location: "GLOBAL",
      website: "WWW.LADIESTHATUX.COM",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "15K+"
    },
    {
      name: "SHE CODES",
      category: "CODING",
      description: "Teaching women how to code and build careers in technology through workshops and mentorship.",
      location: "AUSTRALIA",
      website: "WWW.SHECODES.COM",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "8K+"
    },
    {
      name: "BLOOD + MILK",
      category: "HEALTH",
      description: "Supporting working mothers through health, wellness, and professional development resources.",
      location: "USA",
      website: "WWW.BLOODANDMILK.COM",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "5K+"
    },
    {
      name: "WOMEN WHO TECH",
      category: "TECH",
      description: "A nonprofit organization bringing together talented women in technology to transform the industry.",
      location: "USA",
      website: "WWW.WOMENWHOTECH.COM",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "12K+"
    },
    {
      name: "TECHIONISTA",
      category: "TECH",
      description: "Connecting women in tech through events, mentorship, and career advancement opportunities.",
      location: "CANADA",
      website: "WWW.TECHIONISTA.COM",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "3K+"
    },
    {
      name: "RIGHTBRAINS",
      category: "HEALTH",
      description: "Mental health support and resources for women in high-stress careers and leadership roles.",
      location: "UK",
      website: "WWW.RIGHTBRAINS.COM",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "4K+"
    },
    {
      name: "MUSLIM SISTER'S CONNECT",
      category: "COMMUNITY",
      description: "Building bridges and fostering connections among Muslim women worldwide through shared experiences.",
      location: "GLOBAL",
      website: "WWW.MUSLIMSISTERSCONNECT.COM",
      image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "6K+"
    },
    {
      name: "WOMEN IN BUSINESS",
      category: "BUSINESS",
      description: "Empowering female entrepreneurs and business leaders through networking and mentorship programs.",
      location: "USA",
      website: "WWW.WOMENINBUSINESS.COM",
      image: "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "9K+"
    },
    {
      name: "WOMEN IN AI",
      category: "TECH",
      description: "Advancing women in artificial intelligence through research, education, and professional development.",
      location: "GLOBAL",
      website: "WWW.WOMENINAI.COM",
      image: "https://images.pexels.com/photos/3184342/pexels-photo-3184342.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "7K+"
    },
    {
      name: "DESIGN QUEENS",
      category: "UI/UX",
      description: "A creative community for women designers to showcase work, share resources, and collaborate.",
      location: "UK",
      website: "WWW.DESIGNQUEENS.COM",
      image: "https://images.pexels.com/photos/3184343/pexels-photo-3184343.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "4.5K+"
    },
    {
      name: "WELLNESS WARRIORS",
      category: "HEALTH",
      description: "Promoting holistic wellness and mental health awareness among professional women.",
      location: "CANADA",
      website: "WWW.WELLNESSWARRIORS.COM",
      image: "https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "8.5K+"
    }
  ];

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