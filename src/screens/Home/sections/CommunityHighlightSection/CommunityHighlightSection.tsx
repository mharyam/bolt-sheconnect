import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";
import { CommunityModal } from "../../../../components/CommunityModal";
import { communityService, Community } from "../../../../lib/communityService";

export const CommunityHighlightSection = (): JSX.Element => {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [communities, setCommunities] = useState<Community[]>([]);
  const [loading, setLoading] = useState(true);

  // Load communities on component mount
  useEffect(() => {
    const loadCommunities = async () => {
      try {
        setLoading(true);
        const allCommunities = await communityService.getAllCommunities();
        // Show first 9 communities for the home page table
        setCommunities(allCommunities.slice(0, 9));
      } catch (error) {
        console.error('Error loading communities:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCommunities();
  }, []);

  const handleRowClick = (community: Community) => {
    setSelectedCommunity(community);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCommunity(null);
  };

  if (loading) {
    return (
      <div className="w-full mt-24 flex items-center justify-center py-16">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-neutral-800 mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading communities...</p>
        </div>
      </div>
    );
  }

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
                key={`community-${community.id}`}
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
                  #{community.category}
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