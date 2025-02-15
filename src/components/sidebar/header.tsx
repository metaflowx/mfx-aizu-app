"use client";
import CommonButton from "../ui/CommonButton";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import AnimatedBorderTrail from "../borderanimation";
import Link from "next/link";
import MobileMenuDashboard from "./MobileMenuDashboard";
const TopBar = () => {
  const { open, close } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  return (
    <header 
    style={{
        borderBottom: "1px solid #2865FF"
    }}
    className="sticky top-0 w-full  bg-transparent backdrop-blur-[10px] z-50 h-[80px]">
      <div className="h-full px-6">
        <div className="flex items-center justify-between h-full">
          <Link href={"/"} >
          <div className="flex items-center">

            <img src="/images/dashboard/back.png" />
            <p className="text-[18px] font-[400] text-white pl-3">back to home</p>
          </div>
          </Link>
          <div className="flex items-center gap-3">
            <ul className="flex items-center gap-14 2xl:gap-16">
              
             
                  {/* @ts-expect-error msg */}
                  <appkit-account-button balance="hide" />

                 

               
             
            </ul>
          <MobileMenuDashboard />
          </div>

        </div>
      </div>
    </header>
  );
};

export default TopBar;
