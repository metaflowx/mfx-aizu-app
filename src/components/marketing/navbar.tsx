"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Wrapper from "../global/wrapper";
import MobileMenu from "./mobile-menu";
import { NAV_LINKS1 } from "@/constants/links";
import CommonButton from "../ui/CommonButton";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import AnimatedBorderTrail from "../borderanimation";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter()
  const { open, close } = useAppKit();
  const { address, isConnected } = useAppKitAccount();
  return (
    <header className="sticky top-0 w-full  bg-transparent backdrop-blur-[10px] z-50">
      <Wrapper className="h-full">
        <div className="flex items-center justify-between h-full" >
          <div className="hidden xl:flex items-center gap-3">
            <ul className="flex items-center gap-12 2xl:gap-16">
              {NAV_LINKS.slice(0, 5).map((link, index) => (
                <li
                  style={{ fontFamily: "Prompt" }}
                  key={index}
                  className="text-[14px] 2xl:text-[16px] object-contain uppercase  -1 link text-white"
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center sm:mt-1 mt-0">
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/images/home/logo.png"
                className="w-[90px] h-[50px] sm:w-[114px] sm:h-[88px]"
              />
            </Link>
          </div>
          <div className="hidden xl:flex items-center gap-3">
            <ul className="flex items-center gap-12 2xl:gap-16">
              {NAV_LINKS1.map((link, index) => (
                <li
                  style={{ fontFamily: "Prompt" }}
                  key={index}
                  className="text-[14px] 2xl:text-[16px] uppercase -1 link whitespace-pre text-white"
                >
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
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
                 
                  {/* <appkit-account-button balance="hide" /> */}
                  <CommonButton
                    onClick={()=>router.push("/dashboard")}
                    title="Dashboard"
                    width="150px"
                  />
                </>
              )}
            </ul>
          </div>
        
         <MobileMenu />
        
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
