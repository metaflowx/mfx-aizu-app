"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, Gift, Trophy, Users } from "lucide-react";
import { StatsCard } from "@/components/stats-card";
import { EarningTable } from "./EarningTable";
import ComingSoon from "@/components/ComingSoon";
import { useAccount, useReadContract } from "wagmi";
import { iocConfig, stakeConfig } from "@/constants/contract";
import { Address, formatEther } from "viem";
import { useAppKitNetwork } from "@reown/appkit/react";
import { useMemo } from "react";
export default function EarningPage() {
  const { address } = useAccount();
  const { chainId } = useAppKitNetwork();
  const dailyReward = useReadContract({
    ...stakeConfig,
    functionName: "user2Staker",
    args: [address as Address],
    chainId: Number(chainId) ?? 56,
  });
  const totalStakeLenth = useReadContract({
    ...stakeConfig,
    functionName: "totalStakedLengthForUser",
    args: [address as Address],
    chainId: Number(chainId) ?? 56,
  });
  const tokenPrice = useReadContract({
    ...iocConfig,
    functionName: "getSaleTokenPrice",
    args: [1],
    chainId: Number(chainId) ?? 56,
  });

  const result = useReadContract({
    ...stakeConfig,
    functionName: "user2StakerList",
    args: [
      address as Address,
      BigInt(0),
      BigInt(totalStakeLenth?.data || 0),
    ],
    chainId: Number(chainId) ?? 56,
  });

  const getRef = useReadContract({
    ...iocConfig,
    functionName: "user2SaleType2Contributor",
    args: [address as Address, 1],
    chainId: Number(chainId) ?? 56,
    query: {
      select(data) {
        const value = parseFloat(formatEther(data.volume));
        return value.toFixed(2);
      },
    },
  });

  const totalPrice = useMemo(() => {
    const data = result?.data ?? [];
    const spot = Number(getRef?.data?.toString());
    const totalVol = data.map((amt: any) => {
      const tierType =
        Number(amt?.tierId) === 0 ? 10 : Number(amt?.tierId) === 1 ? 15 : 20;

      const totalAmt = parseFloat(formatEther(amt?.amount)) * tierType;
      return totalAmt;
    });
    const totalSumAmt =
      totalVol?.length > 0
        ? totalVol.reduce((a, b) => Number(a) + Number(b))
        : 0;

    return totalSumAmt + spot || 0;
  }, [result, getRef]);

  const earningsData = [
    {
      id: 1,
      title: "Total Earnings(Spot + Stake)",
      amount: totalPrice ? Number(totalPrice).toFixed(2) : "0",
      sunvalue: (
        Number(totalPrice) * Number(formatEther(BigInt(tokenPrice?.data ?? 0)))
      ).toFixed(2),
    },
    {
      id: 2,
      title: "Total Staking Amount",
      amount: dailyReward?.data?.amount
        ? Number(formatEther(dailyReward?.data?.amount)).toFixed(2)
        : "0",
      sunvalue: Number(
        Number(formatEther(BigInt(dailyReward?.data?.amount ?? 0))) *
          Number(formatEther(BigInt(tokenPrice?.data ?? 0)))
      ).toFixed(2),
    },
  ];
  return (
    <>
      {/* <ComingSoon /> */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 mb-8">
        {earningsData.map((item) => (
          <StatsCard
            title={item?.title}
            value={`${item?.amount} AIZU`}
            subValue={`$${Number(item?.sunvalue).toFixed(2)}`}
          />
        ))}
      </div>

      <Card className="overflow-hidden mt-4">
        <EarningTable />
      </Card>
    </>
  );
}
