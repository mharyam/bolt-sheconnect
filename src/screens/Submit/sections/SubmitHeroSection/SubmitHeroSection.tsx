import React from "react";

export const SubmitHeroSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 bg-neutralneutral-1">
      <div className="max-w-[1360px] mx-auto px-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="[font-family:'Lastik-Regular',Helvetica] font-normal text-neutral-800 text-[64px] tracking-[-2.56px] leading-[76.8px] mb-6">
            Submit Your Community
          </h1>
          <p className="[font-family:'Geist',Helvetica] font-normal text-neutral-800 text-base tracking-[-0.32px] leading-6 max-w-2xl">
            Help us grow our archive by submitting your women-led community. 
            Share your story and connect with like-minded individuals across the globe.
          </p>
        </div>
      </div>
    </section>
  );
};