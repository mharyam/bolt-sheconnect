import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CommunityEngagementWrapperSection = (): JSX.Element => {
  return (
    <Card className="w-full bg-neutral-800 rounded-[64px] overflow-hidden py-8 px-8">
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <blockquote className="max-w-3xl mx-auto [font-family:'Lastik-Regular',Helvetica] font-normal text-mata-50 text-8xl text-center tracking-[-3.84px] leading-[115.2px]">
          "Alone we can do so little; together we can do so much."
        </blockquote>

        <footer className="[font-family:'Helvetica_Now_Display-Regular',Helvetica] font-normal text-mata-50 text-base text-center tracking-[-0.64px] leading-[17.6px]">
          – Helen Keller
        </footer>
      </CardContent>
    </Card>
  );
};
