import React from "react";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";
import { ExternalLink, MapPin, Users, Globe } from "lucide-react";

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
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-neutral-800 text-xs font-medium rounded-full">
              #{community.category}
            </span>
          </div>
          
          {/* Members Count */}
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
              <Users className="w-3 h-3 text-neutral-600" />
              <span className="text-xs font-medium text-neutral-800">{community.members}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Community Name */}
          <h2 className="[font-family:'Geist',Helvetica] font-bold text-neutral-800 text-2xl mb-4 leading-tight">
            {community.name}
          </h2>

          {/* Description */}
          <p className="[font-family:'Geist',Helvetica] font-normal text-neutral-600 text-base mb-6 leading-relaxed">
            {community.description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Location */}
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="p-2 bg-white rounded-lg">
                <MapPin className="w-4 h-4 text-neutral-600" />
              </div>
              <div>
                <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Location</p>
                <p className="text-sm font-medium text-neutral-800">{community.location}</p>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
              <div className="p-2 bg-white rounded-lg">
                <Globe className="w-4 h-4 text-neutral-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Website</p>
                <p className="text-sm font-medium text-neutral-800 truncate">{community.website}</p>
              </div>
            </div>
          </div>

          {/* Community Stats */}
          <div className="bg-neutral-800 rounded-xl p-6 mb-8">
            <h3 className="text-white font-semibold text-lg mb-4">Community Highlights</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-mata-50 mb-1">{community.members}</div>
                <div className="text-xs text-neutral-300 uppercase tracking-wide">Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-mata-50 mb-1">24/7</div>
                <div className="text-xs text-neutral-300 uppercase tracking-wide">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-mata-50 mb-1">Global</div>
                <div className="text-xs text-neutral-300 uppercase tracking-wide">Reach</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full py-3 font-medium"
              onClick={() => window.open(`https://${community.website.replace('WWW.', '').replace(' ', '')}`, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Website
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-neutral-300 text-neutral-800 hover:bg-neutral-50 rounded-full py-3 font-medium"
            >
              Share Community
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-4 bg-mata-50/30 rounded-xl">
            <p className="text-sm text-neutral-600 text-center">
              <strong>Ready to join?</strong> Click "Visit Website" to learn more about membership requirements and how to get started with this amazing community.
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};