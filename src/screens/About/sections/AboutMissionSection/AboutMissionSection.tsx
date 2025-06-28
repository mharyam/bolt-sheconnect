import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutMissionSection = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-neutralneutral-1">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="[font-family:'Lastik-Regular',Helvetica] font-normal text-neutral-800 text-5xl tracking-[-2px] leading-tight mb-8">
              Our Mission
            </h2>
            
            <div className="space-y-6">
              <p className="[font-family:'Geist',Helvetica] font-normal text-neutral-600 text-lg leading-relaxed">
                We exist to eliminate the isolation that many women face in their professional and personal journeys. 
                By curating and connecting women to meaningful communities, we're building a world where every woman 
                has access to the support, mentorship, and opportunities she needs to succeed.
              </p>
              
              <p className="[font-family:'Geist',Helvetica] font-normal text-neutral-600 text-lg leading-relaxed">
                Our platform serves as a bridge—connecting like-minded individuals who share passions, dreams, 
                and aspirations. We believe that when women support women, incredible things happen.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Women collaborating and supporting each other"
              className="w-full max-w-[500px] h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};