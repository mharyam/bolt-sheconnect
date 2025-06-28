import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CommunityEngagementSection = (): JSX.Element => {
  const communityStats = [
    {
      text: "+1023 COMMUNITIES IN OUR ARCHIVE",
      bgColor: "bg-mata-50",
      textColor: "text-neutralneutral-10",
    },
    {
      text: "COMMUNITIES ACROSS 6 CONTINENTS",
      bgColor: "bg-neutral-800",
      textColor: "text-mata-50",
    },
    {
      text: "+1023 TECH COMMUNITIES",
      bgColor: "bg-mata-50",
      textColor: "text-neutralneutral-10",
    },
    {
      text: "MORE THAN +500 SUBMISSIONS MADE",
      bgColor: "bg-neutral-800",
      textColor: "text-mata-50",
    },
    {
      text: "OFFICIALLY THE BEST ARCHIVE OF WOMEN COMMUNITIES",
      bgColor: "bg-mata-50",
      textColor: "text-neutralneutral-10",
    },
    {
      text: "OFFICIALLY THE BEST ARCHIVE OF WOMEN COMMUNITIES",
      bgColor: "bg-neutral-800",
      textColor: "text-mata-50",
    },
  ];

  return (
    <section className="relative w-full py-14 bg-neutralneutral-1 overflow-hidden flex flex-row justify-center items-center">
      <div className="container flex flex-row justify-between items-center gap-20">
        <div className="w-2/5 flex justify-center">
          <Card className="w-full max-w-[416px] rounded-2xl overflow-hidden bg-neutral-800 border-0">
            <div className="flex justify-center pt-7">
              <div className="w-[114px] h-[41px] bg-white rounded flex items-center justify-center rounded-full">
                <img 
                  src="/mata-connect-logo.svg" 
                  alt="MATA CONNECT" 
                  className="h-6 w-auto"
                />
              </div>
            </div>
            <CardContent className="p-0 mt-6">
              {communityStats.map((stat, index) => (
                <div
                  key={`stat-${index}`}
                  className={`w-full h-[53px] ${stat.bgColor} flex items-center justify-center`}
                >
                  <div
                    className={`font-normal ${stat.textColor} text-xs tracking-[0.24px] leading-5`}
                  >
                    {stat.text}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="w-3/5 flex justify-center">
          <img
            className="w-3/4"
            alt="Women community leaders illustration"
            src="/hero-picture.svg"
          />
        </div>
      </div>
    </section>
  );
};