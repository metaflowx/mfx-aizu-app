"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import CommonButton from "@/components/ui/CommonButton"
import { stakeConfig } from "@/constants/contract"
import { useAccount, useReadContract } from "wagmi"
import { useAppKitNetwork } from "@reown/appkit/react"
import { Address, formatEther } from "viem";
import { sortAddress } from "@/utils"
import moment from "moment"
interface ReferralData {
  user: string
  amount: string
  reward: string
  date: string
  claimdate: string
}

const data: ReferralData[] = [
  { user: "0x578e...ea4", amount: "8K IB", reward: "100 IB", date: "Jun 12 2024 23:11:38 PM", claimdate: "Jun 12 2024 23:11:38 PM" },
  { user: "0x578e...ea4", amount: "8K IB", reward: "100 IB", date: "Jun 12 2024 23:11:38 PM", claimdate: "Jun 12 2024 23:11:38 PM" },
  { user: "0x578e...ea4", amount: "8K IB", reward: "100 IB", date: "Jun 12 2024 23:11:38 PM", claimdate: "Jun 12 2024 23:11:38 PM" },
  { user: "0x578e...ea4", amount: "8K IB", reward: "100 IB", date: "Jun 12 2024 23:11:38 PM", claimdate: "Jun 12 2024 23:11:38 PM" },
  { user: "0x578e...ea4", amount: "8K IB", reward: "100 IB", date: "Jun 12 2024 23:11:38 PM", claimdate: "Jun 12 2024 23:11:38 PM" },
]

export function EarningTable() {
  const { address } = useAccount()
  const { chainId } = useAppKitNetwork();


  const totalStakeLenth = useReadContract({
    ...stakeConfig,
    functionName: "totalStakedLengthForUser",
    args: [address as Address],
    chainId: Number(chainId) ?? 97,
  });

  const result = useReadContract({
    ...stakeConfig,
    functionName: "user2StakerList",
    args: [address as Address, BigInt(0), BigInt(totalStakeLenth?.data || 0)],
    chainId: Number(chainId) ?? 97,
  });



  console.log(">>>>>>>>>>>>>>.result", result);



  return (
    <div className="w-full overflow-hidden rounded-lg shadow-md">
      <div className="max-h-80 overflow-y-auto scrollbar-none">
        <Table className="min-w-full">
          {/* Table Header */}
          <TableHeader className="sticky top-0 bg-[#2D67FE4D]">
            <TableRow className="border-[#2865FF]">
              <TableHead className="w-1/5">User</TableHead>
              <TableHead className="w-1/5 whitespace-pre">Staked Amount</TableHead>
              <TableHead className="w-1/5">Tier</TableHead>
              <TableHead className="w-1/5 whitespace-pre">Reward</TableHead>

              <TableHead className="w-1/5 whitespace-pre ">Claim Reward</TableHead>
              <TableHead className="w-1/5 ">Start Time</TableHead>
              <TableHead className="w-1/5 ">Last Claimed</TableHead>
              <TableHead className="w-1/5 ">Action</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="[&>*:nth-child(odd)]:bg-[#15171C] [&>*:nth-child(even)]:bg-[#07070A]">
            {result?.data?.map((item, index) => {
              const startdate = new Date(Number(item?.startTime) * 1000);
              const lastdate = new Date(Number(item?.startTime) * 1000);

              return (
                <TableRow key={index} className="border-b-0">
                  <TableCell className="text-white">{address ? sortAddress(address) : ""}</TableCell>
                  <TableCell className="text-white whitespace-pre">{formatEther(item?.amount)} AIZU</TableCell>
                  <TableCell className="text-white">{Number(item?.tierId) + 1}</TableCell>
                  <DailyReward index={index} address={address as Address} />
                  <TableCell className="text-white whitespace-pre">{formatEther(item?.claimedRewards)} AIZU</TableCell>
                  <TableCell className="text-white whitespace-pre ">{moment(startdate).format("lll")}</TableCell>
                  <TableCell className="text-white whitespace-pre ">{moment(lastdate).format("lll")}</TableCell>

                  {/* Action Buttons */}
                  <ActionSection item={item} />
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

const ActionSection = ({ item }: { item: any }) => {
  const { chainId } = useAppKitNetwork();
  const tierData = useReadContract({
    ...stakeConfig,
    functionName: "getTier",
    args: [item?.tierId],
    chainId: Number(chainId) ?? 97,
  });

  return (
    <TableCell className="text-white ">
      <div className="flex items-center justify-end space-x-2">
        <Button className="w-[86px] bg-black border border-[#2865FF] text-white px-3 py-1 rounded-[50px] h-[50px] ">
          Claim
        </Button>
        {tierData?.data?.isUnstakedEnabled && (
          <CommonButton title="Unstake" width="100px" />
        )}
        <CommonButton title="Restake" width="100px" />
      </div>
    </TableCell>
  )
}

const DailyReward = ({ index, address }: { index: number, address: Address }) => {
  const { chainId } = useAppKitNetwork();
  const dailyReward = useReadContract({
    ...stakeConfig,
    functionName: "calculateRewards",
    args: [address, BigInt(index)],
    chainId: Number(chainId) ?? 97,
  });
  return (
    <TableCell className="text-white whitespace-pre">{dailyReward?.data?parseFloat(formatEther(dailyReward?.data)).toFixed(2):"0.00"} AIZU</TableCell>
  )
}
