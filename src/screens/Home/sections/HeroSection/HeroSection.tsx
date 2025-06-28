import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  return (
    <Card className="w-full rounded-[124px_124px_0px_0px] overflow-hidden mt-24 border-t-0 border-b-0">
      <CardContent className="flex flex-col items-center py-6 px-4">
        <div className="flex flex-col items-center max-w-[782px] mx-auto">
          <img
            className="w-[280.49px] h-[391.61px]"
            alt="Hero picture"
            src="/hero-picture.svg"
          />

          <h1 className="mt-4 [font-family:'Lastik-Regular',Helvetica] font-normal text-neutral-800 text-[64px] text-center tracking-[-2.56px] leading-[76.8px]">
            Ladies Wander No More – Find Your Perfect Community.
          </h1>

          <p className="mt-4 [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-base text-center tracking-[-0.32px] leading-6">
            At Mataconnect, We Bring Together Like-minded Individuals Who Share
            Your Passions, Dreams, And Aspirations. Connect With A Community
            That Supports Your Growth, Offers Inspiration, And Helps You Unlock
            New Opportunities. No More Wandering—your Perfect Community Is Ready
            And Waiting.
          </p>

          <Button 
            className="mt-16 rounded-full"
          >
            Explore All Archives
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};