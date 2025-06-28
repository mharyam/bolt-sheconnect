import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

export const ArchiveGridSection = (): JSX.Element => {
  const communities = [
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
    }
  ];

  return (
    <section className="w-full py-16 bg-neutralneutral-1">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <Card key={`community-${index}`} className="overflow-hidden border border-neutral-200 hover:shadow-lg transition-shadow duration-300">
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
                
                <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white rounded-full">
                  Join Community
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
    </section>
  );
};