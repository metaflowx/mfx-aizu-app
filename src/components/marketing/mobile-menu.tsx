"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import CommonButton from "../ui/CommonButton";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useRouter } from "next/navigation";

const MobileMenu = () => {
    const router = useRouter()
    const { open, close } = useAppKit();
    const { address, isConnected } = useAppKitAccount();
    return (
        <Sheet>
            <SheetTrigger asChild className="xl:hidden ">
                 
                    <Menu className="w-8 h-8" />
                 
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[300px] pt-12">

                <nav className="flex flex-col space-y-4">
                    {NAV_LINKS.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-base font-medium transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 mt-4 border-t border-border">
                        {!address ? (


                            <CommonButton onClick={async () => open()} title="Connect Wallet" width="214px" />

                        ) : (
                            <CommonButton
                                onClick={() => router.push("/dashboard")}
                                title="Dashboard"
                                width="150px"
                            />
                        )}

                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
};

export default MobileMenu
