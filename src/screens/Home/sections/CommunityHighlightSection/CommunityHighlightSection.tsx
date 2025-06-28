import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { CommunityModal } from "../../../../components/CommunityModal";

interface Community {
  name: string;
  category: string;
  description: string;
  location: string;
  website: string;
  image: string;
  members: string;
}

export const CommunityHighlightSection = (): JSX.Element => {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Enhanced community data with proper descriptions and images
  const communities: Community[] = [
    {
      name: "BLACK WOMEN IN TECH",
      category: "#TECH",
      description: "Empowering black women in technology through mentorship, networking, and career development opportunities.",
      location: "ABUJA, NIGERIA",
      website: "WWW.BLACKWOMENTECH.COM",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "2.5K+"
    },
    {
      name: "LADIES THAT UX",
      category: "#UI/UX",
      description: "A global community of women in UX design, fostering growth and collaboration in user experience.",
      location: "GLOBAL",
      website: "WWW.LADIESTHATUX.COM",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "15K+"
    },
    {
      name: "SHE CODES",
      category: "#CODING",
      description: "Teaching women how to code and build careers in technology through workshops and mentorship.",
      location: "AUSTRALIA",
      website: "WWW.SHECODES.COM",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "8K+"
    },
    {
      name: "BLOOD + MILK",
      category: "#HEALTH",
      description: "Supporting working mothers through health, wellness, and professional development resources.",
      location: "USA",
      website: "WWW.BLOODANDMILK.COM",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "5K+"
    },
    {
      name: "WOMEN WHO TECH",
      category: "#TECH",
      description: "A nonprofit organization bringing together talented women in technology to transform the industry.",
      location: "USA",
      website: "WWW.WOMENWHOTECH.COM",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "12K+"
    },
    {
      name: "TECHIONISTA",
      category: "#TECH",
      description: "Connecting women in tech through events, mentorship, and career advancement opportunities.",
      location: "CANADA",
      website: "WWW.TECHIONISTA.COM",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "3K+"
    },
    {
      name: "RIGHTBRAINS",
      category: "#HEALTH",
      description: "Mental health support and resources for women in high-stress careers and leadership roles.",
      location: "UK",
      website: "WWW.RIGHTBRAINS.COM",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "4K+"
    },
    {
      name: "WELLNESS WARRIORS",
      category: "#HEALTH",
      description: "Promoting holistic wellness and mental health awareness among professional women.",
      location: "CANADA",
      website: "WWW.WELLNESSWARRIORS.COM",
      image: "https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "8.5K+"
    },
    {
      name: "MUSLIM SISTER'S CONNECT",
      category: "#COMMUNITY",
      description: "Building bridges and fostering connections among Muslim women worldwide through shared experiences.",
      location: "GLOBAL",
      website: "WWW.MUSLIMSISTERSCONNECT.COM",
      image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      members: "6K+"
    },
  ];

  const handleRowClick = (community: Community) => {
    setSelectedCommunity(community);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCommunity(null);
  };

  return (
    <>
      <div className="w-full mt-24 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-t-0 border-none hover:bg-transparent">
              <TableHead className="w-64 py-5 text-left [font-family:'Geist',Helvetica] font-bold text-neutral-800 text-base tracking-[0.32px] leading-5">
                COMMUNITY NAME
              </TableHead>
              <TableHead className="w-[150px] py-5 text-left [font-family:'Geist',Helvetica] font-bold text-neutral-800 text-sm tracking-[-0.56px]">
                CATEGORY
              </TableHead>
              <TableHead className="w-[350px] py-5 text-left [font-family:'Geist',Helvetica] font-bold text-neutral-800 text-base tracking-[-0.64px]">
                DESCRIPTION
              </TableHead>
              <TableHead className="w-[300px] py-5 text-left [font-family:'Geist',Helvetica] font-bold text-neutral-800 text-base tracking-[0.32px] leading-5">
                WEBSITE
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {communities.map((community, index) => (
              <TableRow
                key={`community-${index}`}
                onClick={() => handleRowClick(community)}
                className="border-b border-neutral-800 cursor-pointer transition-all duration-300 ease-in-out hover:bg-neutral-800 hover:text-white group animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <TableCell className="py-5 w-64 text-left [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-sm tracking-[0.28px] leading-5 group-hover:text-white transition-colors duration-300">
                  {community.name}
                </TableCell>
                <TableCell className="py-5 w-[150px] text-left [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-sm tracking-[-0.56px] group-hover:text-white transition-colors duration-300">
                  {community.category}
                </TableCell>
                <TableCell className="py-5 w-[350px] text-left [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-sm tracking-[0.28px] leading-5 group-hover:text-white transition-colors duration-300">
                  <span className="line-clamp-2">
                    {community.description}
                  </span>
                </TableCell>
                <TableCell className="py-5 w-[300px] text-left [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-sm tracking-[0.28px] leading-5 group-hover:text-white transition-colors duration-300">
                  {community.website}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Community Modal */}
      <CommunityModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        community={selectedCommunity}
      />
    </>
  );
};