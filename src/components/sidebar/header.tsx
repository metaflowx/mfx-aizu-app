"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Wrapper from "../global/wrapper";

import { NAV_LINKS1 } from "@/constants/links";
import CommonButton from "../ui/CommonButton";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import AnimatedBorderTrail from "../borderanimation";

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
          <div className="flex items-center">
            <img src="/images/dashboard/back.png" />
            <p className="text-[18px] font-[400] text-white pl-3">back to home</p>
          </div>
          <div className="hidden xl:flex items-center gap-3">
            <ul className="flex items-center gap-14 2xl:gap-16">
              
              {!address ? (
                <AnimatedBorderTrail
                  trailSize="lg"
                  className="w-full hover:scale-105"
                  trailColor="white"
                >
                  <CommonButton
                    onClick={async () => open()}
                    title="Connect Wallet"
                    width="214px"
                  />
                </AnimatedBorderTrail>
              ) : (
                <>
                  {/* @ts-expect-error msg */}
                  <appkit-account-button balance="hide" />
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
