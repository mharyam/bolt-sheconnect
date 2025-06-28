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

          <p className="font-['Geist',Helvetica] font-normal text-neutralneutral-11 text-[10px] tracking-[-0.40px]">
            © MATA CONNECT 2025. ALL RIGHTS RESERVED ®
          </p>
        </div>
      </div>
    </footer>
  );
};