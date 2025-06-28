import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../components/ui/table";

export const CommunityHighlightSection = (): JSX.Element => {
  // Data for community table
  const communities = [
    {
      name: "BLACK WOMEN IN TECH",
      category: "#TECH",
      description: "AN OPEN SOURCE MACHINE LEARNING FRAMEWORK FOR EVERYONE",
      location: "ABUJA, NIGERIA",
      website: "WWW.BLACKWOMENTECH .COM",
    },
    {
      name: "LADIES THAT UX",
      category: "#UI/UX",
      description: "AN OPEN SOURCE MACHINE LEARNING FRAMEWORK FOR EVERYONE",
      location: "ABUJA, NIGERIA",
      website: "WWW.LADIESTHATUX .COM",
    },
    {
      name: "SHE CODES",
      category: "#CODING",
      description: "AN OPEN SOURCE MACHINE LEARNING FRAMEWORK FOR EVERYONE",
      location: "ABUJA, NIGERIA",
      website: "WWW.SHECODES .COM",
    },
    {
      name: "BLOOD + MILK",
      category: "#HEALTH",
      description: "AN OPEN SOURCE MACHINE LEARNING FRAMEWORK FOR EVERYONE",
      location: "ABUJA, NIGERIA",
      website: "WWW.BLOODANDMILK .COM",
    },
    {
      name: "WOMEN WHO TECH",
      category: "#TECH",
      description: "AN OPEN SOURCE MACHINE LEARNING FRAMEWORK FOR EVERYONE",
      location: "ABUJA, NIGERIA",
      website: "WWW.WOMENWHOTECH .COM",
    },
    {
      name: "TECHIONISTA",
      category: "#TECH",
      description: "AN OPEN SOURCE MACHINE LEARNING FRAMEWORK FOR EVERYONE",
      location: "ABUJA, NIGERIA",
      website: "WWW.TECHIONISTA .COM",
    },
    {
      name: "RIGHTBRAINS",
      category: "#HEALTH",
      description: "AN OPEN SOURCE MACHINE LEARNING FRAMEWORK FOR EVERYONE",
      location: "ABUJA, NIGERIA",
      website: "WWW.RIGHTBRAINS .COM",
    },
    {
      name: "RIGHTBRAINS",
      category: "#HEALTH",
      description: "AN OPEN SOURCE MACHINE LEARNING FRAMEWORK FOR EVERYONE",
      location: "ABUJA, NIGERIA",
      website: "WWW.RIGHTBRAINS .COM",
    },
    {
      name: "MUSIM SISTER'S CONNECT",
      category: "#TECH",
      description: "AN OPEN SOURCE MACHINE LEARNING FRAMEWORK FOR EVERYONE",
      location: "ABUJA, NIGERIA",
      website: "WWW.MUSLIMSISTERSCONECT .COM",
    },
  ];

  return (
    <div className="w-full mt-24">
      <Table>
        <TableHeader>
          <TableRow className="border-t-0 border-none">
            <TableHead className="w-64 py-5 text-left [font-family:'Geist',Helvetica] font-bold text-neutral-800 text-base tracking-[0.32px] leading-5">
              COMMUNITY NAME
            </TableHead>
            <TableHead className="w-[150px] py-5 text-left [font-family:'Geist',Helvetica] font-bold text-neutral-800 text-sm tracking-[-0.56px]">
              CATEGORY
            </TableHead>
            <TableHead className="w-[350px] py-5 text-left [font-family:'Geist',Helvetica] font-bold text-neutral-800 text-base tracking-[-0.64px]">
              DESCRIPTION
            </TableHead>
            <TableHead className="w-[200px] py-5 text-left [font-family:'Geist',Helvetica] font-bold text-neutral-800 text-base tracking-[-0.64px]">
              LOCATION
            </TableHead>
            <TableHead className="w-[300px] py-5 text-left [font-family:'Geist',Helvetica] font-bold text-neutral-800 text-base tracking-[0.32px] leading-5">
              WEBSITE
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {communities.map((community, index) => (
            <TableRow
              key={`community-${index}`}
              className="border-b border-neutral-800"
            >
              <TableCell className="py-5 w-64 text-left [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-sm tracking-[0.28px] leading-5">
                {community.name}
              </TableCell>
              <TableCell className="py-5 w-[150px] text-left [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-sm tracking-[-0.56px]">
                {community.category}
              </TableCell>
              <TableCell className="py-5 w-[350px] text-left [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-sm tracking-[0.28px] leading-5">
                {community.description}
              </TableCell>
              <TableCell className="py-5 w-[200px] text-left [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-sm tracking-[0.28px] leading-5">
                {community.location}
              </TableCell>
              <TableCell className="py-5 w-[300px] text-left [font-family:'Geist',Helvetica] font-normal text-neutral-800 text-sm tracking-[0.28px] leading-5">
                {community.website}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};