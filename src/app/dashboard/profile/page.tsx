"use client"

import { Card } from "@/components/ui/card"
import ShareModal from "@/components/ui/ShareModal"
import {
 
  Copy
} from "lucide-react"

export default function ProfilePage() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[25px] md:text-[40px] font-[400] text-white ">Profile</h1>
      </div>

      <Card className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="flex items-center pb-10">
              <img src="/images/profile/profile.png" />
              <h3 className="flex items-center text-white text-[16px]  md:text-[24px] font-[400] pl-5 ">
              0x39deb3.....e2ac64rd  <Copy />
              </h3>
            </div>
            <div className="flex w-full items-center">
              <div
                style={{
                  background:
                    "linear-gradient(270deg, rgba(166, 166, 166, 0.7) 0%, rgba(166, 166, 166, 0) 50%, rgba(166, 166, 166, 0.7) 100%)",
                }}
                className="p-[1px] rounded-[8px]  h-[100%] "
              >
                <div className="bg-[#000000] rounded-[8px] h-[60px] w-[60px] flex justify-center items-center">
                  <img src="/images/referral/gift.png" />
                </div>
              </div>
              <div className="pl-3">
                <h3 className="text-[20px] font-[400]">Your referrals</h3>
                <p className="text-[20px] font-[700]">0.00</p>
              </div>
            </div>

            <div className="flex w-full items-center mt-8">
              <div
                style={{
                  background:
                    "linear-gradient(270deg, rgba(166, 166, 166, 0.7) 0%, rgba(166, 166, 166, 0) 50%, rgba(166, 166, 166, 0.7) 100%)",
                }}
                className="p-[1px] rounded-[8px]  h-[100%] "
              >
                <div className="bg-[#000000] rounded-[8px] h-[60px] w-[60px] flex justify-center items-center">
                  <img src="/images/referral/dollar.png" />
                </div>
              </div>
              <div className="pl-3">
                <h3 className="text-[20px] font-[400]">
                  Your referral earnings
                </h3>
                <p className="text-[20px] font-[700]">0.00</p>
              </div>
            </div>

            <div className="mt-16">
              <div
                style={{
                  background:
                    " linear-gradient(90deg, rgba(40, 101, 255, 0) 0%, #2865FF 50%, rgba(40, 101, 255, 0) 100%)",
                }}
                className="p-[1px]"
              >
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(40, 101, 255, 0) 0%, rgba(221, 66, 66, 0.7) 50%, rgba(40, 101, 255, 0) 100%) ",
                  }}
                  className=" flex  items-center justify-between"
                >
                  <p className="text-[14px] md:text-[18px] font-[400] text-white flex items-center">
                    https://ico.aizu.com/dashboard/?ref={" "}
                    <Copy className="h-4 w-4" />
                  </p>
                  <img src="/images/referral/share.png" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
          <img src="/images/buy/aizucoin.png"  />
          </div>
        </div>

      </Card>


     
    </>
  )
}