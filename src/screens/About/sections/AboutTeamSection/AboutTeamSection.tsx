import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutTeamSection = (): JSX.Element => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Former tech executive passionate about building bridges between women and opportunities. 10+ years in community building.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    },
    {
      name: "Amara Okafor",
      role: "Head of Community",
      bio: "Community strategist with expertise in fostering inclusive environments. Advocates for women in tech across Africa.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    },
    {
      name: "Maria Rodriguez",
      role: "Product Lead",
      bio: "UX designer turned product manager, focused on creating intuitive experiences that connect and empower women globally.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    }
  ];

  return (
    <section className="w-full py-20 bg-neutralneutral-1">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="[font-family:'Lastik-Regular',Helvetica] font-normal text-neutral-800 text-5xl tracking-[-2px] leading-tight mb-6">
            Meet Our Team
          </h2>
          <p className="[font-family:'Geist',Helvetica] font-normal text-neutral-600 text-lg leading-relaxed max-w-2xl mx-auto">
            We're a diverse team of women committed to creating meaningful connections and fostering inclusive communities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <Card key={`team-${index}`} className="border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="[font-family:'Geist',Helvetica] font-bold text-neutral-800 text-xl mb-2">
                  {member.name}
                </h3>
                <p className="[font-family:'Geist',Helvetica] font-semibold text-neutral-600 text-sm mb-4 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="[font-family:'Geist',Helvetica] font-normal text-neutral-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center justify-center w-10 h-10 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors duration-300"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};