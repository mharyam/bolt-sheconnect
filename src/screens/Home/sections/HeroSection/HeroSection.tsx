import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  return (
    <Card className="w-full rounded-[124px_124px_0px_0px] overflow-hidden mt-24 border-t-0 border-b-0">
      <CardContent className="flex flex-col items-center py-6 px-4 relative">
        {/* Official Bolt.new Badge - Top Right of Hero Section */}
        <div className="absolute top-8 right-8 z-10">
          <a 
            href="https://bolt.new" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block transform hover:scale-105 transition-transform duration-300"
          >
            {/* Circular Badge with Border Text */}
            <div className="relative w-20 h-20 group">
              {/* Outer Circle with Border Text */}
              <div className="absolute inset-0 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                {/* Circular Text Path */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
                  <defs>
                    <path
                      id="hero-circle-path"
                      d="M 40, 40 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                    />
                  </defs>
                  <text className="text-[6px] font-bold fill-black tracking-wider">
                    <textPath href="#hero-circle-path" startOffset="0%">
                      POWERED BY BOLT.NEW • POWERED BY BOLT.NEW • 
                    </textPath>
                  </text>
                </svg>
                
                {/* Center "b" Logo */}
                <div className="relative z-10 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg italic">b</span>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="flex flex-col items-center max-w-[782px] mx-auto">
          <img
            className="w-[280.49px] h-[391.61px]"
            alt="Hero picture"
            src="/hero-picture.svg"
          />

          <h1 className="mt-4 [font-family:'Lastik-Regular',Helvetica] font-normal text-neutral-800 text-[64px] text-center tracking-[-2.56px] leading-[76.8px]">
            Ladies Wander No more—Find Your Perfect Community. 
          </h1>

          <p className="mt-4 [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-base text-center tracking-[-0.32px] leading-6">
            At Mataconnect, We Bring Together Like-minded Individuals Who Share
            Your Passions, Dreams, And Aspirations. Connect With A Community
            That Supports Your Growth, Offers Inspiration, And Helps You Unlock
            New Opportunities. No More Wandering—your Perfect Community Is Ready
            And Waiting.
          </p>

          <Link to="/archive">
            <Button 
              className="mt-8 rounded-full"
            >
              Explore All Archives
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};