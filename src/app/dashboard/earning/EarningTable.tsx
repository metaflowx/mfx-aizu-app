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
import { Address } from "viem";
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
const {address} =useAccount()
   const { chainId } = useAppKitNetwork();
  

    const totalStakeLenth = useReadContract({
      ...stakeConfig,
      functionName: "totalStakedLengthForUser",
      chainId: Number(chainId) ?? 97,
    });
  
    const result = useReadContract({
      ...stakeConfig,
      functionName: "user2StakerList",
      args: [address as Address, BigInt(0), BigInt(totalStakeLenth?.data || 0)],
      chainId: Number(chainId) ?? 97,
    });

    console.log(">>>>>>>>>>>>>>.result",result);
    


  return (
    <div className="w-full overflow-hidden rounded-lg shadow-md">
      <div className="max-h-80 overflow-y-auto scrollbar-none">
        <Table className="min-w-full">
          {/* Table Header */}
          <TableHeader className="sticky top-0 bg-[#2D67FE4D]">
            <TableRow className="border-[#2865FF]">
              <TableHead className="w-1/5">User</TableHead>
              <TableHead className="w-1/5">Staked Amount</TableHead>
              <TableHead className="w-1/5 ">Reward</TableHead>
              <TableHead className="w-1/5 ">Start Time</TableHead>
              <TableHead className="w-1/5 ">Last Claimed</TableHead>
              <TableHead className="w-1/5 ">Action</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="[&>*:nth-child(odd)]:bg-[#15171C] [&>*:nth-child(even)]:bg-[#07070A]">
            {data.map((item, index) => (
              <TableRow key={index} className="border-b-0">
                <TableCell className="text-white">{item.user}</TableCell>
                <TableCell className="text-white">{item.amount}</TableCell>
                <TableCell className="text-white ">{item.reward}</TableCell>
                <TableCell className="text-white ">{item.date}</TableCell>
                <TableCell className="text-white ">{item.claimdate}</TableCell>
                
                {/* Action Buttons */}
                <TableCell className="text-white ">
                  <div className="flex items-center justify-end space-x-2">
                    <Button className="w-[86px] bg-black border border-[#2865FF] text-white px-3 py-1 rounded-[50px] h-[50px] ">
                      Claim
                    </Button>
                    <CommonButton title="Unstake" width="100px" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
