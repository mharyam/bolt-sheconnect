import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full h-[190px] bg-white relative">
      <div className="max-w-[1360px] mx-auto flex items-end justify-between py-16 px-10">
        <img 
          src="/mata-connect-logo.svg" 
          alt="MATA CONNECT" 
          className="h-6 w-auto"
        />

        <div className="flex flex-col items-end gap-4">
          <p className="font-['Geist',Helvetica] font-normal text-neutralneutral-11 text-[10px] tracking-[-0.40px]">
            © MATA CONNECT 2025. ALL RIGHTS RESERVED ®
          </p>
        </div>
      </div>

      {/* Built on Bolt Badge - Bottom Right */}
      <div className="absolute bottom-4 right-4">
        <a 
          href="https://bolt.new" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 bg-black rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          {/* Bolt Icon */}
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
            >
              <path 
                d="M13 10V3L4 14h7v7l9-11h-7z" 
                fill="currentColor"
              />
            </svg>
          </div>
          
          {/* Badge Text */}
          <span className="text-white text-sm font-medium">
            Built on Bolt
          </span>
        </a>
      </div>
    </footer>
  );
};