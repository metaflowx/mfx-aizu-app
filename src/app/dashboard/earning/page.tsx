"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coins, Gift, Trophy, Users } from "lucide-react"
import { StatsCard } from "@/components/stats-card";
import { EarningTable } from "./EarningTable";

export default function EarningPage() {
  const earningsData = [
    { id: 1, title: "Total Earnings", amount: "$0.000", sunvalue:"$0.000" },
    { id: 2, title: "Referral Earnings", amount: "$0.000", sunvalue:"$0.000"  },
    { id: 3, title: "Staking Rewards", amount: "$0.000", sunvalue:"$0.000" },
    { id: 4, title: "Bonus Rewards", amount: "$0.000", sunvalue:"$0.000" },
  ];
  return (
    <>
     

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-8">
      {earningsData.map((item) => (
        <StatsCard
                 title={item?.title}
                 value={item?.amount}
                 subValue={item?.sunvalue}
               />
      ))}
    </div>

      <Card className="overflow-hidden mt-4">
        <EarningTable />
      </Card>
    </>
  )
}