"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Share2, Users } from "lucide-react";
import { ReferralTable } from "@/components/referral-table";

export default function ReferralPage() {
  const referralLink = "https://ico.aizu.com/dashboard/?ref=0xbe...6a5d";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
  };

  return (
    <>
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
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
                  <p className="text-[18px] font-[400] text-white flex items-center">
                    https://ico.aizu.com/dashboard/?ref={" "}
                    <Copy className="h-4 w-4" />
                  </p>
                  <img src="/images/referral/share.png" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <img src="/images/buy/token.png" className="w-[430px] h-[290px] " />
          </div>
        </div>
      </Card>

      <h2 className="mt-5 text-[25px] md:text-[40px] text-white font-[400]">Direct Referral</h2>

      <Card className="overflow-hidden">
        
        <ReferralTable />
      </Card>
    </>
  );
}
