import React from "react";

export const SubmitHeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 bg-neutralneutral-1">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="[font-family:'Lastik-Regular',Helvetica] font-bold text-neutral-800 mb-6 text-4xl md:text-5xl lg:text-6xl text-center leading-tight max-w-4xl mx-auto">
            Submit your group and help more women connect, grow, and thrive.
          </h1>
          <p className="[font-family:'Geist',Helvetica] font-normal text-neutral-600 text-lg text-center leading-relaxed max-w-2xl mx-auto">
            Share your community with our growing network and help other women discover amazing groups where they can connect, learn, and flourish together.
          </p>
        </div>
      </div>
    </section>
  );
};