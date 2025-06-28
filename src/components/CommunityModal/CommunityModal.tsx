import React from "react";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";
import { ExternalLink, MapPin, Users, Globe, Share2 } from "lucide-react";

interface Community {
  name: string;
  category: string;
  description: string;
  location: string;
  website: string;
  image: string;
  members: string;
}

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  community: Community | null;
}

export const CommunityModal: React.FC<CommunityModalProps> = ({ isOpen, onClose, community }) => {
  if (!community) return null;

  const handleVisitWebsite = () => {
    const cleanWebsite = community.website.replace('WWW.', '').replace(' ', '').toLowerCase();
    window.open(`https://${cleanWebsite}`, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: community.name,
        text: community.description,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`Check out ${community.name}: ${community.description}`);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-full max-w-2xl mx-4">
      <div className="p-0">
        {/* Hero Image */}
        <div className="relative h-64 overflow-hidden rounded-t-2xl">
          <img
            src={community.image}
            alt={community.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block px-4 py-2 bg-white/95 backdrop-blur-sm text-neutral-800 text-sm font-medium rounded-full shadow-sm">
              {community.category}
            </span>
          </div>
          
          {/* Members Count */}
          <div className="absolute top-4 right-16">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-sm">
              <Users className="w-4 h-4 text-neutral-600" />
              <span className="text-sm font-medium text-neutral-800">{community.members}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Community Name */}
          <h2 className="[font-family:'Geist',Helvetica] font-bold text-neutral-800 text-3xl mb-4 leading-tight">
            {community.name}
          </h2>

          {/* Description */}
          <p className="[font-family:'Geist',Helvetica] font-normal text-neutral-600 text-lg mb-8 leading-relaxed">
            {community.description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Location */}
            <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <MapPin className="w-5 h-5 text-neutral-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Location</p>
                <p className="text-base font-semibold text-neutral-800">{community.location}</p>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <Globe className="w-5 h-5 text-neutral-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Website</p>
                <p className="text-base font-semibold text-neutral-800 truncate">{community.website}</p>
              </div>
            </div>
          </div>

          {/* Community Stats */}
          <div className="bg-neutral-800 rounded-2xl p-8 mb-8">
            <h3 className="text-white font-bold text-xl mb-6">Community Highlights</h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-mata-50 mb-2">{community.members}</div>
                <div className="text-sm text-neutral-300 uppercase tracking-wider font-medium">Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mata-50 mb-2">24/7</div>
                <div className="text-sm text-neutral-300 uppercase tracking-wider font-medium">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-mata-50 mb-2">Global</div>
                <div className="text-sm text-neutral-300 uppercase tracking-wider font-medium">Reach</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button 
              className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full py-4 font-semibold text-base"
              onClick={handleVisitWebsite}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Visit Website
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-2 border-neutral-300 text-neutral-800 hover:bg-neutral-50 rounded-full py-4 font-semibold text-base"
              onClick={handleShare}
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share Community
            </Button>
          </div>

          {/* Additional Info */}
          <div className="p-6 bg-mata-50/40 rounded-2xl border border-mata-50">
            <p className="text-base text-neutral-700 text-center leading-relaxed">
              <strong className="text-neutral-800">Ready to join?</strong> Click "Visit Website" to learn more about membership requirements and how to get started with this amazing community.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};