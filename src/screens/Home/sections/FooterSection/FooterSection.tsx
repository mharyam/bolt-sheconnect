import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full h-[190px] bg-white">
      <div className="max-w-[1360px] mx-auto flex items-end justify-between py-16 px-10">
        <img 
          src="/mata-connect-logo.svg" 
          alt="MATA CONNECT" 
          className="h-6 w-auto"
        />

        <div className="flex flex-col items-end gap-4">
          {/* Built on Bolt Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm">
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path 
                  d="M13 10V3L4 14h7v7l9-11h-7z" 
                  fill="currentColor"
                />
              </svg>
            </div>
            <a 
              href="https://bolt.new" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Built on Bolt
            </a>
          </div>

          <p className="font-['Geist',Helvetica] font-normal text-neutralneutral-11 text-[10px] tracking-[-0.40px]">
            © MATA CONNECT 2025. ALL RIGHTS RESERVED ®
          </p>
        </div>
      </div>
    </footer>
  );
};