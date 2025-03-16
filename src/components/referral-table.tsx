"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CommonButton from "./ui/CommonButton";
import { iocConfig } from "@/constants/contract";
import { useAccount, useReadContract, useReadContracts } from "wagmi";
import { useAppKitNetwork } from "@reown/appkit/react";
import { Address, formatEther } from "viem";
import { sortAddress } from "@/utils";
import { Skeleton } from "@mui/material";

export function ReferralTable() {
  const { address } = useAccount();
  const { chainId } = useAppKitNetwork();
  const result = useReadContracts({
    contracts: [
      {
        ...iocConfig,
        functionName: "totalContributorLengthForUser",
        args: [address as Address, 1],
        chainId: Number(chainId) ?? 97,
      },
    ],
  });

  const totalLength = result?.data?.[0]?.result?.toString() || "0";
  const historyTable = useReadContract({
    ...iocConfig,
    functionName: "user2SaleType2ContributorList",
    args: [
      address as Address,
      0,
      BigInt(0),
      BigInt(totalLength),
    ],
    chainId: Number(chainId) ?? 97,
  });

  const dateTime = (timestamp: any) => {
    const numericTimestamp = Number(timestamp);
    const date = new Date(numericTimestamp * 1000);
    return date.toLocaleString();
  };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-md">
      <div className="max-h-80 overflow-y-auto scrollbar-none">
        <Table className="min-w-full">
          <TableHeader className="sticky top-0 bg-[#2D67FE4D] shadow">
            <TableRow className="border-[#2D67FE4D]">
              <TableHead className="whitespace-pre">USER</TableHead>
              <TableHead className="whitespace-pre">AMOUNT</TableHead>
              <TableHead className="whitespace-pre">Coin</TableHead>
              <TableHead className="whitespace-pre">QUANTITY</TableHead>
              <TableHead className="whitespace-pre">Last Claimed</TableHead>
              <TableHead className="whitespace-pre">Date & Time</TableHead>
              <TableHead className="whitespace-pre">Next Claim</TableHead>
              <TableHead className="whitespace-pre">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&>*:nth-child(odd)]:bg-[#15171C] [&>*:nth-child(even)]:bg-[#07070A]">
            {historyTable.isLoading ? (
              [...Array(5)].map((_, index) => (
                <TableRow key={index} className="border-b-0">
                  {[...Array(8)].map((_, i) => (
                    <TableCell key={i} className="text-white">
                      <Skeleton variant="text" width={100} height={20} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) :historyTable?.data && historyTable?.data?.length > 0 ? (
              historyTable?.data.map((item: any, index: number) => (
                <TableRow key={index} className="border-b-0">
                  <TableCell className="text-white">{sortAddress(item?.user)}</TableCell>
                  <TableCell className="text-white">
                    ${item?.amount ? Number(formatEther(BigInt(item?.amount))).toFixed(6) : "--"}
                  </TableCell>
                  <TableCell className="text-white">
                    {item?.coin === "Native" ? "BNB" : item?.coin || "--"}
                  </TableCell>
                  <TableCell className="text-white">{item.quantity}</TableCell>
                  <TableCell className="text-white">{dateTime(item?.at) || "--"}</TableCell>
                  <TableCell className="text-white">{item.date}</TableCell>
                  <TableCell className="text-white">12-05-25</TableCell>
                  <TableCell className="text-white">
                    <CommonButton title="Claim" />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-white py-4">
                  No Data Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
