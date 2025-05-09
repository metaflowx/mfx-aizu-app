"use client";

import { Button } from "@/components/ui/button";
import { Bitcoin, Gem, Box, Triangle } from "lucide-react";
import Image from "next/image";
import CommonButton from "../ui/CommonButton";
import Link from "next/link";
import CircularRoation from "./circular-roation/CircularRoation";

export default function AboutSection({ id }: { id: string }) {
  const floatingIcons = [
    { src: "/icons/binance.png", style: "top-[10%] right-[5%]" }, // Binance
    {
      src: "/icons/ethereum.png",
      style: "bottom-[10%] left-[50%] -translate-x-1/2",
    }, // Ethereum
    { src: "/icons/avalanche.png", style: "top-[25%] left-[5%]" }, // Avalanche
    { src: "/icons/optimism.png", style: "top-[15%] left-[25%]" }, // Optimism
    { src: "/icons/polygon.png", style: "bottom-[20%] right-[20%]" }, // Polygon
    { src: "/icons/Symbol_Blue.png", style: "top-[33%] right-[33%]" }, // Ripple
  ];
  return (
    <main
      id={id}
      className=" text-white relative overflow-hidden pt-10 md:py-16"
    >
      {/* Background dots pattern */}
      <div className="absolute hidden md:flex  inset-0 bg-[radial-gradient(circle,_#ffffff15_1px,_transparent_1px)] bg-[length:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-4  relative">
        {/* Header Section */}
        <div className="text-left sm:text-center  mb-20">
          <h1
            data-aos="fade-right"
            className="text-[30px] leading-[30px] md:leading-[60px] md:text-[60px] font-bold tracking-wider bg-clip-text"
          >
            JOIN AIZU
          </h1>
          <h2
            data-aos="fade-right"
            className="text-[25px] md:text-[35px] font-semibold text-[#2865FF]"
          >
            Be a Part of the Decentralized Revolution!
          </h2>
          <p
            data-aos="fade-right"
            className="text-[18px] md:text-[24px] text-white max-w-[900px] mx-auto mb-[20px]"
          >
            Unlock a world of financial freedom where you own your assets,
            control your data, and trade with confidence.
          </p>

          {/* CTA Buttons */}
          <div data-aos="fade-right" className="flex justify-center gap-4 ">
            <Link href={"https://aizutech.gitbook.io/aizu-coin"} target="_blank">
              <CommonButton title="White Paper" width="176px" />
            </Link>

            <Link href={"/whitepaper.pdf"} target="_blank">
              <Button
                variant="outline"
                className="bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-900/20 px-8 py-6 text-lg rounded-full"
              >
                Light Paper
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Central Coin Section */}
      <div className="relative">
        {/* Center AIZU coin */}
        <div className="relative w-[full] flex justify-center items-center overflow-hidden ">
          <CircularRoation />
         
        </div>

      
      </div>
    </main>
  );
}
