"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import Link from "next/link";
import { menuItems } from "@/constants/links";

const MobileMenuDashboard = () => {
    return (
        <Sheet>
            <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-[30px] w-[30px] text-white" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[300px] pt-12">
               
                <nav className="flex flex-col space-y-4">
                    {menuItems.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-base font-medium transition-colors hover:text-primary text-white"
                        >
                            {link.name}
                        </Link>
                    ))}
                  
                </nav>
            </SheetContent>
        </Sheet>
    )
};

export default MobileMenuDashboard
