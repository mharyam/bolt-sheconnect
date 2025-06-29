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
          {/* Bolt Logo */}
          <a 
            href="https://bolt.new" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative w-12 h-12 group">
              <div className="absolute inset-0 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48">
                  <defs>
                    <path
                      id="nav-circle-path"
                      d="M 24, 24 m -18, 0 a 18,18 0 1,1 36,0 a 18,18 0 1,1 -36,0"
                    />
                  </defs>
                  <text className="text-[4px] font-bold fill-black tracking-wider">
                    <textPath href="#nav-circle-path" startOffset="0%">
                      BOLT.NEW • BOLT.NEW • BOLT.NEW • 
                    </textPath>
                  </text>
                </svg>
                
                <div className="relative z-10 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm italic">b</span>
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