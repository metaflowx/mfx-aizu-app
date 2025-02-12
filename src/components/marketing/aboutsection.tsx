"use client";

import { Button } from "@/components/ui/button";
import { Bitcoin, Gem, Box, Triangle } from "lucide-react";
import Image from "next/image";
import CommonButton from "../ui/CommonButton";

export default function AboutSection({id}:{id:string}) {
  const floatingIcons = [
    { src: "/icons/binance.png", style: "top-[10%] right-[5%]" }, // Binance
    { src: "/icons/ethereum.png", style: "bottom-[10%] left-[50%] -translate-x-1/2" }, // Ethereum
    { src: "/icons/avalanche.png", style: "top-[25%] left-[5%]" }, // Avalanche
    { src: "/icons/optimism.png", style: "top-[15%] left-[25%]" }, // Optimism
    { src: "/icons/polygon.png", style: "bottom-[20%] right-[20%]" }, // Polygon
    { src: "/icons/Symbol_Blue.png", style: "top-[33%] right-[33%]" }, // Ripple
  ];
  return (
    <main id={id} className=" text-white relative overflow-hidden pt-10 md:py-16">
      {/* Background dots pattern */}
      <div className="absolute hidden md:flex  inset-0 bg-[radial-gradient(circle,_#ffffff15_1px,_transparent_1px)] bg-[length:24px_24px]"></div>

      <div className="max-w-6xl mx-auto px-4  relative">
        {/* Header Section */}
        <div className="text-left sm:text-center  mb-20">
          <h1 className="text-[30px] leading-[30px] md:leading-[60px] md:text-[60px] font-bold tracking-wider bg-clip-text">
            JOIN AIZU
          </h1>
          <h2 className="text-[25px] md:text-[35px] font-semibold text-[#2865FF]">
            Be a Part of the Decentralized Revolution!
          </h2>
          <p className="text-[18px] md:text-[24px] text-white max-w-[900px] mx-auto mb-[20px]">
            Unlock a world of financial freedom where you own your assets,
            control your data, and trade with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 ">
            <CommonButton title="White Paper" width="176px" />
            <Button
              variant="outline"
              className="bg-transparent border-2 border-blue-600 text-blue-400 hover:bg-blue-900/20 px-8 py-6 text-lg rounded-full"
            >
              Light Paper
            </Button>
          </div>
        </div>
      </div>

      {/* Central Coin Section */}
      <div className="relative">
        {/* Center AIZU coin */}
        <div className="relative w-[full] flex justify-center items-center ">
          <img
            src="/images/home/image-rotation.png"
            className="max-w-full xl:max-w-[1350px] mx-auto h-full object-contain"
          />
        </div>

       
        {/* <div className="absolute inset-0 -z-10 animate-spin-slow top-0 left-0 right-0 bottom-0">
          <div className="relative w-full h-full">
           
            <div className="absolute top-1/4 left-1/2 -translate-x-20 -translate-y-20 animate-spin-slow">
              <div className=" p-4 rounded-full">
                <Bitcoin className="w-8 h-8 text-white" />
              </div>
            </div>

           
            <div className="absolute top-1/4 right-0 translate-x-20 animate-spin-slow">
              <div className=" p-4 rounded-full">
                <img src="/icons/binance.png" />
              </div>
            </div>

          
            <div className="absolute bottom-0 left-1/2 -translate-x-20 translate-y-20 animate-spin-slow">
              <div className="p-4 rounded-full">
                <img src="/icons/ethereum.png" />
              </div>
            </div>

          
            <div className="absolute top-1/4 left-0 -translate-x-20 translate-y-20 animate-spin-slow">
              <div className=" p-4 rounded-full">
                <img src="/icons/avalanche.png" />
              </div>
            </div>

          
            <div className="absolute top-1/4 left-1/4 -translate-x-20 -translate-y-20 animate-spin-slow">
              <div className=" p-4 rounded-full">
               
                <img src="/icons/optimism.png" />
              </div>
            </div>

           
            <div className="absolute bottom-1/4 right-1/4 translate-x-20 translate-y-20 animate-spin-slow">
              <div className=" p-4 rounded-full">
                <img src="/icons/polygon.png" />
              </div>
            </div>

          
            <div className="absolute top-1/3 right-1/3 translate-x-20 -translate-y-10 animate-spin-slow">
              <div className="p-4 rounded-full">
                <img src="/icons/Symbol_Blue.png" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
