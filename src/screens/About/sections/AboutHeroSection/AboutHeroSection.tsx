import React from "react";

export const AboutHeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 bg-neutralneutral-1">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="[font-family:'Lastik-Regular',Helvetica] font-normal text-neutral-800 text-[64px] text-center tracking-[-2.56px] leading-[76.8px] mb-8 max-w-4xl">
            Connecting Women, Building Communities, Creating Impact
          </h1>
          
          <p className="[font-family:'Geist',Helvetica] font-normal text-neutral-600 text-lg text-center leading-relaxed max-w-3xl">
            At MataConnect, we believe in the power of community. Our mission is to bridge the gap between 
            ambitious women and the communities that will help them thrive, grow, and achieve their dreams.
          </p>
        </div>
      </div>
    </section>
  );
};