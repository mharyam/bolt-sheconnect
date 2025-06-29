import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { CommunityModal } from "../../../../components/CommunityModal";
import { Community } from "../../../../lib/communityService";

interface ArchiveGridSectionProps {
  communities: Community[];
  totalCount: number;
  filteredCount: number;
}

export const ArchiveGridSection = ({ communities, totalCount, filteredCount }: ArchiveGridSectionProps): JSX.Element => {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewCommunity = (community: Community) => {
    setSelectedCommunity(community);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCommunity(null);
  };

  return (
    <section className="w-full py-16 bg-neutralneutral-1">
      <div className="max-w-[1360px] mx-auto px-10">
        {/* Results Summary */}
        <div className="mb-8">
          <p className="text-neutral-600 text-sm">
            Showing <span className="font-semibold text-neutral-800">{filteredCount}</span> of{" "}
            <span className="font-semibold text-neutral-800">{totalCount}</span> communities
          </p>
        </div>

        {/* Communities Grid */}
        {communities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community) => (
              <Card key={`community-${community.id}`} className="overflow-hidden border border-neutral-200 hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-mata-50 text-neutral-800 text-xs font-medium rounded-full">
                      #{community.category}
                    </span>
                    <span className="text-neutral-600 text-sm font-medium">
                      {community.members}
                    </span>
                  </div>
                  
                  <h3 className="[font-family:'Geist',Helvetica] font-bold text-neutral-800 text-lg mb-2 leading-tight">
                    {community.name}
                  </h3>
                  
                  <p className="[font-family:'Geist',Helvetica] font-normal text-neutral-600 text-sm mb-4 leading-relaxed">
                    {community.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-4">
                    <span>{community.location}</span>
                    <span>{community.website}</span>
                  </div>
                  
                  <Button 
                    className="w-full bg-neutral-800 hover:bg-neutral-700 text-white rounded-full"
                    onClick={() => handleViewCommunity(community)}
                  >
                    View Community
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* No Results State */
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 bg-neutral-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">No communities found</h3>
              <p className="text-neutral-600 mb-6">
                We couldn't find any communities matching your search criteria. Try adjusting your filters or search terms.
              </p>
              <Button 
                variant="outline" 
                className="rounded-full"
                onClick={() => window.location.reload()}
              >
                Clear All Filters
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Community Modal */}
      <CommunityModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        community={selectedCommunity}
      />
    </section>
  );
};