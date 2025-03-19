"use client";

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
import {
  useAccount,
  useReadContract,
  useReadContracts,
  useWriteContract,
} from "wagmi";
import copy from 'clipboard-copy';
import { useAppKitNetwork } from "@reown/appkit/react";
import { Address, formatEther, formatUnits, parseUnits } from "viem";
import { sortAddress } from "@/utils";
import { Box, Skeleton } from "@mui/material";
import { toast } from "react-toastify";
import { extractDetailsFromError } from "@/utils/extractDetailsFromError";
import { Copy } from "lucide-react";

export function ReferralTable() {
  const { writeContractAsync, isPending, isSuccess, isError } =useWriteContract();
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
      {
        ...iocConfig,
        functionName: "user2SaleType2ClaimableDetail",
        args: [address as Address, 1],
        chainId: Number(chainId) ?? 97,
      },
      {
        ...iocConfig,
        functionName: "exchangelaunchDate",
        chainId: Number(chainId),
      },
      {
        ...iocConfig,
        functionName: "saleType2IcoDetail",
        args: [1],
        chainId: Number(chainId) ?? 97,
      },

      {
        ...iocConfig,
        functionName: "getPresaleTokenDue",
        args: [1,address as Address],
        chainId: Number(chainId) ?? 97,
      },

      
    ],
  });

  const totalLength = result?.data?.[0]?.result?.toString() || "0";
  const historyTable = useReadContract({
    ...iocConfig,
    functionName: "user2SaleType2ContributorList",
    args: [address as Address, 1, BigInt(0), BigInt(totalLength)],
    chainId: Number(chainId) ?? 97,
  });

  const dateTime = (timestamp: any) => {
    const numericTimestamp = Number(timestamp);
    const date = new Date(numericTimestamp * 1000);
    return date.toLocaleString();
  };

  const claimHandler = async () => {
     try {

       const res = await writeContractAsync({
        ...iocConfig,
         functionName: "claimSaleToken",
         args: [1],

       });
       console.log(">>>>>>>>>>res208",res);

       if (isSuccess) {

         toast.success("Claim completed");
       }
     } catch (error: any) {
       console.log(">>>>>>>>>>>>.error",error);

       toast.error(extractDetailsFromError(error.message as string) as string);
     }
   };


   console.log(">>>>>>>>>>>>isError",isError);
   






 

  const addTime = (
    timestamp: bigint
  ): { newTimestamp: bigint; newDate: string } => {
    if (!timestamp) return { newTimestamp: BigInt(0), newDate: "--" };

    const additionalTime: bigint = result?.data?.[3]?.result?.vesting
      ?.CycleInMinutes
      ? BigInt(result?.data?.[3]?.result?.vesting?.CycleInMinutes) * BigInt(60)
      : BigInt(0);

    const newTimestamp: bigint = timestamp + additionalTime;
    const newDate: string = new Date(
      Number(newTimestamp) * 1000
    ).toLocaleString();

    return { newTimestamp, newDate };
  };

  const initialTimestamp: bigint =
    result?.data?.[2]?.result && typeof result?.data?.[2]?.result === "bigint"
      ? result?.data?.[2]?.result
      : BigInt(0);

  const lastClaim = addTime(initialTimestamp);
  const value = result?.data?.[4]?.result?.[2];
  const isZeroBigInt: boolean = typeof value === "bigint" && value === BigInt(0);
   const handleCopy = (item:any) => {
      copy(item);
      toast.success('Address copied to clipboard!');
  };
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-md">
      <div className="flex justify-between p-3">
        <h6 className="text-[20px] font-bold">Contributors History</h6>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {/* Last Claim Card */}
        <div
          style={{
            background:
              " linear-gradient(180deg, #2D67FE 0%, rgba(45, 103, 254, 0) 100%)",
          }}
          className="p-[1px] rounded-[20px]"
        >
          <div className="bg-[#07070A] text-white rounded-[20px] p-4 shadow-md">
            <h4 className="text-lg font-semibold">Last Claim</h4>
            <p className="text-md">
              {Number(result?.data?.[1]?.result?.lastClaimedAt) > 0
                ? dateTime(result?.data?.[1]?.result?.lastClaimedAt)
                : "--"}
            </p>
          </div>
        </div>

        {/* Next Claim Card */}
        <div
          style={{
            background:
              " linear-gradient(180deg, #2D67FE 0%, rgba(45, 103, 254, 0) 100%)",
          }}
          className="p-[1px] rounded-[20px]"
        >
          <div className="bg-[#07070A] text-white rounded-[20px] p-4 shadow-md">
            <h4 className="text-lg font-semibold">Next Claim</h4>
            <p className="text-md">{lastClaim?.newDate || "--"}</p>
          </div>
        </div>

        <div
          style={{
            background:
              " linear-gradient(180deg, #2D67FE 0%, rgba(45, 103, 254, 0) 100%)",
          }}
          className="p-[1px] rounded-[20px]"
        >
          <div className="bg-[#07070A] text-white rounded-[20px] p-4 shadow-md">
            <h4 className="text-lg font-semibold">
              Remaining Token
            </h4>
            <p className="text-md">{`${
              result?.data?.[4]?.result?.[1]
                ? Number(
                    formatUnits(result?.data?.[4]?.result[1], 18)
                  ).toFixed(2)
                : "0"
            } AIZU`}</p>
          </div>
        </div>

        {/* Claim Button Card */}
        <div
          style={{
            background:
              " linear-gradient(180deg, #2D67FE 0%, rgba(45, 103, 254, 0) 100%)",
          }}
          className="p-[1px] rounded-[20px]"
        >
          <div className="bg-[#07070A] text-white rounded-[20px] p-4 shadow-md flex items-center justify-center">
            <CommonButton
            onClick={()=>claimHandler()}
            disabled={isZeroBigInt|| isPending}
              title={`${isPending ? "Claiming...":"Claim"}  ${
                result?.data?.[4]?.result?.[2]
                  ? Number(
                      formatUnits(result?.data?.[4]?.result?.[2], 18)
                    ).toFixed(2)
                  : "0"
              } AIZU`}
              width="250px"
            />
          </div>
        </div>
      </div>
      <div className="max-h-80 overflow-y-auto scrollbar-none">
        <Table className="min-w-full">
          <TableHeader className="sticky top-0 bg-[#2D67FE4D] shadow">
            <TableRow className="border-[#2D67FE4D]">
              <TableHead className="whitespace-pre">USER</TableHead>
              <TableHead className="whitespace-pre">AMOUNT</TableHead>
              <TableHead className="whitespace-pre">Coin</TableHead>
              <TableHead className="whitespace-pre">QUANTITY</TableHead>

              <TableHead className="whitespace-pre">Date & Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&>*:nth-child(odd)]:bg-[#15171C] [&>*:nth-child(even)]:bg-[#07070A]">
            {historyTable.isLoading ? (
              [...Array(5)].map((_, index) => (
                <TableRow key={index} className="border-b-0">
                  {[...Array(5)].map((_, i) => (
                    <TableCell key={i} className="text-white">
                      <Skeleton variant="text" width={100} height={20} />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : historyTable?.data && historyTable?.data?.length > 0 ? (
              historyTable?.data.map((item: any, index: number) => (
                <TableRow key={index} className="border-b-0">
                  <TableCell className="text-white">
                   <Box sx={{display:"flex",alignItems:"center"}}>
                   {sortAddress(item?.user)}
                    <Box onClick={()=>handleCopy(item?.user)}>
                    <Copy color="#fff" />
                </Box>
                   </Box>
                  </TableCell>
                  <TableCell className="text-white">
                    $
                    {item?.amount
                      ? Number(formatEther(BigInt(item?.amount))).toFixed(2)
                      : "--"}
                  </TableCell>
                  <TableCell className="text-white">
                    {item?.coin === "Native" ? "BNB" : item?.coin || "--"}
                  </TableCell>
                  <TableCell className="text-white">
                    {Number(formatUnits(item?.volume, 19)).toFixed(2)} AIZU
                  </TableCell>
                  <TableCell className="text-white">
                    {dateTime(item?.at) || "--"}
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
