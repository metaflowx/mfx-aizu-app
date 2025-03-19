import { contractConfig, iocConfig } from "@/constants/contract";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { useAccount, useReadContract, useReadContracts } from "wagmi";
import { Address, formatEther, formatUnits, parseUnits } from "viem";
import { useAppKitNetwork } from "@reown/appkit/react";
import { Box, Skeleton } from "@mui/material";
import { sortAddress } from "@/utils";
import { Copy } from "lucide-react";
import { toast } from "react-toastify";
import copy from "clipboard-copy";
export default function RefTable() {
  const { chainId } = useAppKitNetwork();
  const { address } = useAccount();

  const getRef = useReadContract({
    ...contractConfig,
    functionName: "getReferralsCount",
    args: [address as Address],
    chainId: Number(chainId) ?? 97,
  });

  const dataRef =
    Number(getRef?.data) > 0 ? BigInt(Number(getRef.data)) : BigInt(0);

  const result = useReadContract({
    ...contractConfig,
    functionName: "getDirectReferrals",
    args: [address as Address, BigInt(0), dataRef],
    chainId: Number(chainId) ?? 97,
  });

  return (
    <div>
      <div className="max-h-80 overflow-y-auto scrollbar-none">
        <Table className="min-w-full">
          <TableHeader className="sticky top-0 bg-[#2D67FE4D] shadow">
            <TableRow className="border-[#2D67FE4D]">
              <TableHead className="whitespace-pre">User</TableHead>
              <TableHead className="whitespace-pre">Bonus</TableHead>
              <TableHead className="whitespace-pre">Profit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&>*:nth-child(odd)]:bg-[#15171C] [&>*:nth-child(even)]:bg-[#07070A]">
            {result.isLoading ? (
              [...Array(3)].map((_, index) => (
                <TableRow key={index} className="border-b-0">
                  {[...Array(3)].map((_, i) => (
                    <TableCell key={i} className="text-white">
                      <Skeleton variant="text" width={100} height={20} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : result?.data && result?.data?.length > 0 ? (
              result?.data.map((item: any, index: number) => (
                <TableBodyData index={index} item={item} />
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

const TableBodyData = ({ index, item }: { index: number; item: any }) => {
  const { chainId } = useAppKitNetwork();
  const getRef = useReadContract({
    ...iocConfig,
    functionName: "user2SaleType2Contributor",
    args: [item as Address, 1],
    chainId: Number(chainId) ?? 97,
    query: {
      select(data) {
        const value = parseFloat(formatEther(data.volume)) * 0.1;
        return value.toFixed(2);
      },
    },
  });

  const handleCopy = (item: any) => {
    copy(item);
    toast.success("Address copied to clipboard!");
  };
  return (
    <TableRow key={index} className="border-b-0">
      <TableCell className="text-white">
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {sortAddress(item)}&nbsp;
          <Box onClick={() => handleCopy(item)}>
            <Copy color="#fff" />
          </Box>
        </Box>
      </TableCell>
      <TableCell className="text-white">10%</TableCell>
      <TableCell className="text-white">
        {getRef?.data ? getRef?.data : 0} AIZU
      </TableCell>
    </TableRow>
  );
};
