import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const AboutStatsSection = (): JSX.Element => {
  const stats = [
    {
      number: "1,023+",
      label: "Communities in Archive",
      description: "Carefully curated communities across various industries and interests"
    },
    {
      number: "6",
      label: "Continents Represented",
      description: "Global reach connecting women from every corner of the world"
    },
    {
      number: "500+",
      label: "Community Submissions",
      description: "Growing database of women-led and women-focused communities"
    },
    {
      number: "50K+",
      label: "Women Connected",
      description: "Lives impacted through meaningful community connections"
    }
  ];

  return (
    <section className="w-full py-20 bg-neutral-800">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="[font-family:'Lastik-Regular',Helvetica] font-normal text-mata-50 text-5xl tracking-[-2px] leading-tight mb-6">
            Our Impact in Numbers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={`stat-${index}`} className="bg-mata-50 border-0 text-center">
              <CardContent className="p-8">
                <div className="[font-family:'Lastik-Regular',Helvetica] font-normal text-neutral-800 text-4xl tracking-[-1.5px] leading-tight mb-4">
                  {stat.number}
                </div>
                <h3 className="[font-family:'Geist',Helvetica] font-bold text-neutral-800 text-lg mb-3">
                  {stat.label}
                </h3>
                <p className="[font-family:'Geist',Helvetica] font-normal text-neutral-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};