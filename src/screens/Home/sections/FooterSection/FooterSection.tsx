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

      {/* Official Bolt.new Badge - Bottom Right */}
      <div className="absolute bottom-6 right-6">
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
                    id="circle-path"
                    d="M 40, 40 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                  />
                </defs>
                <text className="text-[6px] font-bold fill-black tracking-wider">
                  <textPath href="#circle-path" startOffset="0%">
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
    </footer>
  );
};