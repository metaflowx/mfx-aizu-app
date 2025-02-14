"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import { StatsCard } from "../stats-card";
import { ReferralTable } from "../referral-table";
import Hero from "../marketing/hero";

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button variant="outline" className="gap-2">
          <Wallet className="h-4 w-4" />
          0xbe...6a5d
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <StatsCard
          title="Your Wallet Balance"
          value="0.000 AIZU"
          subValue="$0.000"
        />
        <StatsCard
          title="Your Coin Worth at Launch"
          value="$0.000"
          subValue="$0.000"
        />
        <StatsCard
          title="Your Spot Earnings"
          value="$0.000"
          subValue="$0.000"
        />
      </div>

      <div className="mb-8">
        <Hero type="dashboard" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
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
              <h3 className="text-[20px] font-[400]">Your referral earnings</h3>
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
                className=" flex justify-between items-center"
              >
                <p className="text-[18px] font-[400] text-white">
                  https://ico.aizu.com/dashboard/?ref=
                </p>
                <img src="/images/referral/share.png" />
              </div>
            </div>
          </div>
        </Card>
        <Card className="overflow-hidden">
          <ReferralTable />
        </Card>
      </div>
    </>
  );
}
