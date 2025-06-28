import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutCommunitySection = (): JSX.Element => {
  const values = [
    {
      title: "Inclusivity",
      description: "We believe every woman deserves a seat at the table and a voice in the conversation.",
      icon: "🤝"
    },
    {
      title: "Empowerment",
      description: "We provide tools, resources, and connections that help women achieve their full potential.",
      icon: "💪"
    },
    {
      title: "Community",
      description: "We foster environments where women can support, mentor, and uplift each other.",
      icon: "🌟"
    },
    {
      title: "Growth",
      description: "We facilitate personal and professional development through meaningful connections.",
      icon: "🚀"
    }
  ];

  return (
    <section className="w-full py-20 bg-neutralneutral-1">
      <div className="max-w-[1360px] mx-auto px-10">

        {/* Call to Action */}
        <Card className="bg-neutral-800 border-0 rounded-3xl overflow-hidden">
          <CardContent className="p-16 text-center">
            <h2 className="[font-family:'Lastik-Regular',Helvetica] font-normal text-mata-50 text-5xl tracking-[-2px] leading-tight mb-6">
              Ready to Find Your Community?
            </h2>
            <p className="[font-family:'Geist',Helvetica] font-normal text-mata-50 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Join thousands of women who have already discovered their perfect communities through MataConnect. 
              Your journey to meaningful connections starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/archive">
                <Button className="bg-mata-50 text-neutral-800 hover:bg-mata-50 rounded-full px-8 py-3 font-semibold text-base">
                  Explore Communities
                </Button>
              </Link>
              <Link to="/submit">
                <Button variant="outline" className="border-2 border-mata-50 text-mata-50 hover:bg-mata-50 hover:text-neutral-800 rounded-full px-8 py-3 font-semibold text-base">
                  Submit Your Community
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};