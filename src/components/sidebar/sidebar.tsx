"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib"
import { LayoutDashboard, Coins, PiggyBank, Users, LineChart, UserCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Earning", icon: Coins, href: "/dashboard/earning" },
  { name: "Staking", icon: PiggyBank, href: "/dashboard/staking" },
  { name: "Referral", icon: Users, href: "/dashboard/referral" },
  { name: "Algo Trading", icon: LineChart, href: "/dashboard/trading" },
  { name: "Profile", icon: UserCircle, href: "/dashboard/profile" },
];

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname(); // Get current route

  return (
    <div 
      className={cn(
        "relative border-r border-[#2865FF] transition-all duration-300 ease-in-out shadow-lg flex-shrink-0",
        collapsed ? "w-[4rem]" : "w-64",
        className
      )}
    >
      {/* Collapse Button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 absolute -right-4 top-4 bg-white shadow-md border rounded-full z-50"
        onClick={() => setCollapsed(!collapsed)}
      >
        <ChevronLeft className={cn(
          "h-4 w-4 transition-transform duration-300",
          collapsed && "rotate-180"
        )} />
      </Button>

      <div className="px-3 py-2">
        {/* Logo */}
        <div className="flex items-center mb-4">
          <img src="/images/home/logo.png" className="w-[90px] h-[67px]" />
        </div>

        {/* Sidebar Menu Items */}
        <div className="space-y-1 flex flex-col">
          {menuItems.map(({ name, icon: Icon, href }) => (
            <Button 
              key={name} 
              style={{
                background:  pathname === href? "linear-gradient(90deg, #2865FF 0%, #DD4242 50%, #2865FF 100%)":"transparent",
                border:  pathname === href ? "1px solid #2865FF":"none"

              }}
              variant="ghost" 
              className={cn(
                "w-full justify-start transition-all duration-300",
                pathname === href ? " text-white rounded-[40px]" : "hover:bg-gray-100 text-white"
              )} 
              asChild
            >
              <Link href={href}>
                <Icon className="h-4 w-4 shrink-0" />
                <span className={cn(
                  "ml-2 transition-opacity duration-300",
                  collapsed ? "opacity-0 w-0 hidden" : "opacity-100"
                )}>
                  {name}
                </span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
