"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib";
import {
 
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { menuItems } from "@/constants/links";





export function Sidebar({ className,collapsed,setCollapsed }: {className?:any,collapsed?:boolean,setCollapsed:any}) {
 
  const pathname = usePathname(); // Get current route

  return (
    <div
      className={cn(
        "relative  border-r border-[#2865FF] transition-all duration-300 ease-in-out shadow-lg flex-shrink-0",
        collapsed ? "w-[6.5rem]" : "w-64",
        className
      )}
    >
      {/* Collapse Button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 absolute -right-4 top-16 bg-[#2865FF] shadow-md border border-[#2865FF] rounded-full z-50"
        onClick={() => setCollapsed(!collapsed)}
      >
        <ChevronLeft
          className={cn(
            "h-4 w-4 transition-transform duration-300 text-white ",
            collapsed && "rotate-180"
          )}
        />
      </Button>

      <div className="px-6 py-2">
        {/* Logo */}
        <div className="flex items-center mb-5 pt-[15px]">
          <img src="/images/home/logo.png" className="w-[90px] h-[67px] object-contain" />
        </div>

        {/* Sidebar Menu Items */}
        <div className="space-y-5 flex flex-col pt-5">
          {menuItems.map(({ name, icon, href }) => (
            <Button
              key={name}
              style={{
                background:
                  pathname === href
                    ? "linear-gradient(90deg, #2865FF 0%, #DD4242 50%, #2865FF 100%)"
                    : "transparent",
                border: pathname === href ? "1px solid #2865FF" : "none",
              }}
              variant="ghost"
              className={cn(
                "w-full justify-start transition-all duration-300 h-[50px]  ",
                pathname === href
                  ? " text-white rounded-[40px]"
                  : "hover:bg-gray-100 text-white"
              )}
              asChild
            >
              <Link href={href}>
                <img src={icon} />

                <span
                  className={cn(
                    "ml-2 transition-opacity duration-300 text-[18px] font-[400] ",
                    collapsed ? "opacity-0 w-0 hidden" : "opacity-100"
                  )}
                >
                  {name}
                </span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
