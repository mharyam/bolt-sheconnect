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
    { label: "SUBMIT", path: "#", isLink: false },
    { label: "ABOUT", path: "#", isLink: false },
  ];

  return (
    <header className="w-full h-[93px] bg-neutralneutral-1">
      <div className="max-w-[1360px] mx-auto h-full flex items-center justify-between px-10">
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

        <Link to="/">
          <img
            className="w-[113.32px] h-[41.14px]"
            alt="Mata connect logo"
            src="/mata-connect-logo.svg"
          />
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-1">
            {rightNavItems.map((item, index) => (
              <NavigationMenuItem key={`right-nav-${index}`}>
                <div className="px-4 py-[9px] [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-xs tracking-[-0.48px]">
                  {item.label}
                </div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};