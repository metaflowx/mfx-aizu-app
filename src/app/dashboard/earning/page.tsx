"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coins, Gift, Trophy, Users } from "lucide-react"
import { StatsCard } from "@/components/stats-card";
import { EarningTable } from "./EarningTable";
import ComingSoon from "@/components/ComingSoon";
import { useAccount, useReadContract } from "wagmi";
import { iocConfig, stakeConfig } from "@/constants/contract";
import { Address, formatEther } from "viem";
import { useAppKitNetwork } from "@reown/appkit/react";
export default function EarningPage() {
  const {address}= useAccount()
  const { chainId } = useAppKitNetwork();
   const dailyReward = useReadContract({
      ...stakeConfig,
      functionName: "user2Staker",
      args: [address as Address, ],
      chainId: Number(chainId) ?? 97,
    });
    const tokenPrice = useReadContract({
       
              ...iocConfig,
              functionName: "getSaleTokenPrice",
              args: [1],
              chainId: Number(chainId) ?? 97,
            
    })
console.log(">>>>>>>>>>>.dailyReward",tokenPrice,dailyReward);


  const earningsData = [
    { id: 1, title: "Total Earnings", amount:dailyReward?.data?.claimedRewards ? Number(formatEther(dailyReward?.data?.claimedRewards)).toFixed(2):"0", sunvalue:  Number(formatEther(BigInt(dailyReward?.data?.claimedRewards ?? 0))) * Number(formatEther(BigInt(tokenPrice?.data ?? 0)))} ,
    { id: 2, title: "Total Staking Amount", amount: dailyReward?.data?.amount ? Number(formatEther(dailyReward?.data?.amount)).toFixed(2):"0", sunvalue:  Number(formatEther(BigInt(dailyReward?.data?.amount ?? 0))) * Number(formatEther(BigInt(tokenPrice?.data ?? 0)))  },
    // { id: 3, title: "Staking Rewards", amount: "$0.000", sunvalue:"$0.000" },
    // { id: 4, title: "Bonus Rewards", amount: "$0.000", sunvalue:"$0.000" },
  ];
  return (
    <>

    {/* <ComingSoon /> */}
     

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