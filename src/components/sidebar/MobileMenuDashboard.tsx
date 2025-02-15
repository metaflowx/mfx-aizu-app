"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import Link from "next/link";
import { menuItems } from "@/constants/links";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib";

const MobileMenuDashboard = () => {
     const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false); // Function to close the drawer

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}> {/* Manage drawer open state */}
            <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(true)}>
                    <Menu className="h-[30px] w-[30px] text-white" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[300px] pt-12">
                <nav className="flex flex-col space-y-4">
                    {menuItems.map((link, index) => (
                        <Button
                        
                         key={index}
                                      style={{
                                        background:
                                          pathname === link.href
                                            ? "linear-gradient(90deg, #2865FF 0%, #DD4242 50%, #2865FF 100%)"
                                            : "transparent",
                                        border: pathname === link.href ? "1px solid #2865FF" : "none",
                                      }}
                                      variant="ghost"
                                      className={cn(
                                        "w-full justify-center transition-all duration-300 h-[50px]  ",
                                        pathname === link.href
                                          ? " text-white rounded-[40px]"
                                          : "hover:bg-gray-100 text-white"
                                      )}
                                      asChild
                        >

                        <Link
                            key={index}
                            href={link.href}
                            className="text-base font-medium transition-colors hover:text-primary text-white"
                            onClick={handleClose} // Close the drawer on click
                        >
                            {link.name}
                        </Link>
                        </Button>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
};

export default MobileMenuDashboard;
