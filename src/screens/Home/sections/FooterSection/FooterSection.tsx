import React from "react";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full h-[190px] bg-white">
      <div className="max-w-[1360px] mx-auto flex items-end justify-between py-16 px-10">
        <div className="w-[114px] h-[41px] bg-mata-50 rounded flex items-center justify-center">
          <img 
            src="/mata-connect-logo.svg" 
            alt="MATA CONNECT" 
            className="h-6 w-auto"
          />
        </div>

        <div className="flex flex-col items-end gap-4">
          <p className="font-['Geist',Helvetica] font-normal text-neutralneutral-11 text-[10px] tracking-[-0.40px]">
            DESIGNED & DIRECTED&nbsp;&nbsp;BY @AHRUF
          </p>

          <p className="font-['Geist',Helvetica] font-normal text-neutralneutral-11 text-[10px] tracking-[-0.40px]">
            © MATA CONNECT 2025. ALL RIGHTS RESERVED ®
          </p>
        </div>
      </div>
    </footer>
  );
};