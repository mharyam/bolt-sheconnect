import React from "react";

export const InspirationalQuoteSection = (): JSX.Element => {
  // Define the quotes and images data for the marquee
  const quoteItems = [
    {
      image: {
        src: "/butterfly-1.svg",
        alt: "Decorative butterfly",
        className: "w-[46px] h-[67px] object-cover rounded-lg",
      },
      quote: "Where Women Connect, Learn, And Thrive",
    },
    {
      image: {
        src: "/peony-arrangement.svg",
        alt: "Decorative flower",
        className: "w-[70px] h-[63px] object-cover rounded-lg",
      },
      quote: "Your Community Is Here.",
    },
    {
      image: {
        src: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
        alt: "Butterfly",
        className: "w-[77px] h-[79px] object-cover rounded-lg",
      },
      quote: "Find Your Wings",
    },
    {
      image: {
        src: "/butterfly-1.svg",
        alt: "Decorative flower",
        className: "w-[70px] h-[63px] object-cover rounded-lg",
      },
      quote: "Where Women Connect, Learn, And Thrive",
    },
    {
      image: {
        src: "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
        alt: "Butterfly",
        className: "w-[77px] h-[79px] object-cover rounded-lg",
      },
      quote: "Find Your Wings",
    },
  ];

  // Duplicate the items to create seamless loop
  const duplicatedItems = [...quoteItems, ...quoteItems];

  return (
    <section className="w-full bg-neutral-800 py-6 overflow-hidden mt-16">
      <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
        {duplicatedItems.map((item, index) => (
          <React.Fragment key={`quote-item-${index}`}>
            <img
              className={item.image.className}
              alt={item.image.alt}
              src={item.image.src}
            />
            <span className="[font-family:'Lastik-Regular',Helvetica] font-normal text-[#f6e6d3] text-xl text-center tracking-[-1.92px] leading-[57.6px] whitespace-nowrap">
              {item.quote}
            </span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};