"use client";


import { Card } from "@/components/ui/card";
import { StatsCard } from "../stats-card";
import { ReferralTable } from "../referral-table";
import Hero from "../marketing/hero";
import ReferralCard from "./ReferralCard";
import { useAccount, useReadContract } from "wagmi";
import { Address, erc20Abi, formatEther } from "viem";
import { iocConfig, TokenContractAddress } from "@/constants/contract";
import { useAppKitNetwork } from "@reown/appkit/react";
import { convertToAbbreviated } from "@/utils";

export default function Dashboard() {
  const { chainId } = useAppKitNetwork();
  const { address } = useAccount();
  const { data: resultOfTokenBalance } = useReadContract({
    abi: erc20Abi,
    address: TokenContractAddress,
    functionName: "balanceOf",
    args: [address as Address],
    account: address,
  });
  const { data: tokenPriceUSDT } = useReadContract({
    ...iocConfig,
    functionName: "getSaleTokenPrice",
    args: [1],
    chainId: Number(chainId) ?? 97,
  });
  const tokenPrice = tokenPriceUSDT && tokenPriceUSDT;
  const tokenPriceBig = Number(formatEther(BigInt(tokenPrice ?? 0)));
  const aizuUSDTAmount =
    Number(formatEther(BigInt(resultOfTokenBalance ?? 0))) * tokenPriceBig;

    const getRef = useReadContract({
        ...iocConfig,
        functionName: "user2SaleType2Contributor",
        args: [address as Address, 1],
        chainId: Number(chainId) ?? 97,
        query: {
          select(data) {
            const value = parseFloat(formatEther(data.volume)) * 0.1;
            return value.toFixed(2);
          },
        },
      });
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <StatsCard
          title="Your Wallet Balance"
          value={`${convertToAbbreviated(Number(
            formatEther(BigInt(resultOfTokenBalance ?? 0))
          ))}  AIZU`}
          subValue={`$${convertToAbbreviated(Number(aizuUSDTAmount))}`}
        />
        <StatsCard
          title="Your Coin Worth at Launch"
          value={`${convertToAbbreviated(Number(getRef?.data||0)) || 0} AIZU`}
          subValue={`$${convertToAbbreviated(Number(getRef?.data||0) * Number(0.06)) || 0 }`}
        />
        <StatsCard
          title="Projected AIZU at $1"
          value={`${convertToAbbreviated(Number(getRef?.data||0)) || 0} AIZU`}
          subValue={`$${convertToAbbreviated(Number(getRef?.data||0) * Number(1)) || 0 }`}
        />
      </div>

      <div className="mb-8">
        <Hero type="dashboard" />
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <Card className="overflow-hidden">
          <ReferralTable />
        </Card>
        <ReferralCard type="text" />
      </div>
    </>
  );
}
