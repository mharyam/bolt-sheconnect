import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationSection = (): JSX.Element => {
  // Navigation items data for easy mapping
  const leftNavItems = [
    { label: "HOME", path: "/", isLink: true },
    { label: "ARCHIVE", path: "/archive", isLink: true },
  ];

  const rightNavItems = [
    { label: "SUBMIT", path: "/submit", isLink: true },
    { label: "ABOUT", path: "/about", isLink: true },
  ];

  return (
    <header className="w-full h-[93px] bg-neutralneutral-1">
      <div className="max-w-[1360px] mx-auto h-full flex items-center justify-between px-10">
        {/* Left side with Bolt logo and navigation */}
        <div className="flex items-center gap-6">
          {/* Bolt Logo - Same size as footer */}
          <a 
            href="https://bolt.new" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-20 h-20 group">
              <div className="absolute inset-0 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
                  <defs>
                    <path
                      id="nav-circle-path"
                      d="M 40, 40 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                    />
                  </defs>
                  <text className="text-[6px] font-bold fill-black tracking-wider">
                    <textPath href="#nav-circle-path" startOffset="0%">
                      POWERED BY BOLT.NEW • POWERED BY BOLT.NEW • 
                    </textPath>
                  </text>
                </svg>
                
                <div className="relative z-10 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg italic">b</span>
                </div>
              </div>
            </div>
          </a>

          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-1">
              {leftNavItems.map((item, index) => (
                <NavigationMenuItem key={`left-nav-${index}`}>
                  {item.isLink ? (
                    <Link
                      to={item.path}
                      className="px-4 py-[9px] [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-xs tracking-[-0.48px] hover:text-neutral-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="px-4 py-[9px] [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-xs tracking-[-0.48px]">
                      {item.label}
                    </div>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Center Logo */}
        <Link to="/">
          <img
            className="w-[113.32px] h-[41.14px]"
            alt="Mata connect logo"
            src="/mata-connect-logo.svg"
          />
        </Link>

        {/* Right Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-1">
            {rightNavItems.map((item, index) => (
              <NavigationMenuItem key={`right-nav-${index}`}>
                {item.isLink ? (
                  <Link
                    to={item.path}
                    className="px-4 py-[9px] [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-xs tracking-[-0.48px] hover:text-neutral-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="px-4 py-[9px] [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-xs tracking-[-0.48px]">
                    {item.label}
                  </div>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};