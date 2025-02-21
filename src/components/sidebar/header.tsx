"use client";
import CommonButton from "../ui/CommonButton";
import {
  useAppKit,
  useAppKitAccount,
  useDisconnect,
} from "@reown/appkit/react";
import Link from "next/link";
import MobileMenuDashboard from "./MobileMenuDashboard";
import { LogOut } from "lucide-react";
const TopBar = () => {
  const { open, close } = useAppKit();

  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAppKitAccount();

  return (
    <header
      style={{
        borderBottom: "1px solid #2865FF",
      }}
      className="sticky top-0 w-full  bg-transparent backdrop-blur-[10px] z-50 h-[80px]"
    >
      <div className="h-full px-6">
        <div className="flex items-center justify-between h-full">
          <Link href={"/"}>
            <div className="flex items-center">
              <img src="/images/dashboard/back.png" />
              <p className="text-[18px] font-[400] text-white pl-3">
                back to home
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <ul className="flex items-center gap-14 2xl:gap-16">
              {address ? (
              <div
               
                style={{
                  boxShadow: "0px 4px 4px 0px #00000040",
                }}
                className="border border-[#2865FF] cursor-pointer rounded-[40px] flex items-center p-2 bg-[#07080B] px-4 "
              >
                {/* {address && <LogOut color="#fff"  onClick={disconnect} style={{cursor:"pointer"}} />} */}

                {/* @ts-expect-error msg */}
                <appkit-account-button balance="hide" />
              </div>

              ):(
                <CommonButton   onClick={async () => open()}
                title="Connect Wallet"
                width="214px" />
              )}
            </ul>
            <MobileMenuDashboard />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
