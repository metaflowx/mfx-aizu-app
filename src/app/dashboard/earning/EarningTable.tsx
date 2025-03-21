"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import CommonButton from "@/components/ui/CommonButton";
import { stakeConfig, StakeContractAddress } from "@/constants/contract";
import { useAccount, useBlockNumber, useReadContract, useWriteContract } from "wagmi";
import { useAppKitNetwork } from "@reown/appkit/react";
import { Address, formatEther } from "viem";
import { sortAddress } from "@/utils";
import moment from "moment";
import { toast } from "react-toastify";
import { extractDetailsFromError } from "@/utils/extractDetailsFromError";
import { StakeABI } from "@/app/ABI/StakeABI";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import { Copy } from "lucide-react";
import copy from "clipboard-copy";


export function EarningTable() {
    const { data: blockNumber } = useBlockNumber({ watch: true });
  const { address } = useAccount();
  const { chainId } = useAppKitNetwork();
  const queryClient = useQueryClient();
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


  const isLoading = result?.isLoading;
  const data = result?.data ?? [];

    useEffect(() => {
      queryClient.invalidateQueries({
        queryKey: totalStakeLenth.queryKey,
      });
      queryClient.invalidateQueries({
        queryKey: result.queryKey,
      });
    }, [blockNumber, queryClient,totalStakeLenth, result]);

     const handleCopy = (item: any) => {
        copy(item);
        toast.success("Address copied to clipboard!");
      };

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-md">
      <div className="max-h-80 overflow-y-auto scrollbar-none">
        <Table className="min-w-full">
          {/* Table Header */}
          <TableHeader className="sticky top-0 bg-[#2D67FE4D]">
            <TableRow className="border-[#2865FF]">
              <TableHead className="w-1/5">User</TableHead>
              <TableHead className="w-1/5 whitespace-pre">
                Staked Amount
              </TableHead>
              <TableHead className="w-1/5">Tier</TableHead>
              <TableHead className="w-1/5 whitespace-pre">Reward</TableHead>

              <TableHead className="w-1/5 whitespace-pre ">
                Claim Reward
              </TableHead>
              <TableHead className="w-1/5 whitespace-pre">Start Time</TableHead>
              <TableHead className="w-1/5 whitespace-pre">Last Claimed</TableHead>
              <TableHead className="w-1/5 ">Action</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="[&>*:nth-child(odd)]:bg-[#15171C] [&>*:nth-child(even)]:bg-[#07070A]">
            {isLoading ? (
              [...Array(5)].map((_, index) => (
                <TableRow key={index} className="animate-pulse border-b-0">
                  {Array(8).fill("").map((_, i) => (
                    <TableCell key={i} className="py-4">
                      <div className="h-4 bg-gray-700 rounded w-3/4 mx-auto" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-white py-6">
                  No Data Found
                </TableCell>
              </TableRow>
            ) : (
              data.map((item, index) => {
                const startdate = new Date(Number(item?.startTime) * 1000);
                const lastdate = new Date(Number(item?.lastClaimTime) * 1000);

                return (
                  <TableRow key={index} className="border-b-0">
                    <TableCell className="text-white whitespace-pre">
                      <div className="flex items-center">
                      {address ? sortAddress(address) : ""}&nbsp;
                      <IconButton onClick={() => handleCopy(address)}>
                         <Copy color="#fff" />
                      </IconButton>
                      </div>
                    </TableCell>
                    <TableCell className="text-white whitespace-pre">
                      {Number(formatEther(item?.amount)).toFixed(2)} AIZU
                    </TableCell>
                    <TableCell className="text-white">
                      {Number(item?.tierId) + 1}
                    </TableCell>
                    <DailyReward index={index} address={address as Address} />
                    <TableCell className="text-white whitespace-pre">
                      {parseFloat(formatEther(item?.claimedRewards)).toFixed(2)} AIZU
                    </TableCell>
                    <TableCell className="text-white whitespace-pre">
                      {moment(startdate).format("lll")}
                    </TableCell>
                    <TableCell className="text-white whitespace-pre">
                      {moment(lastdate).format("lll")}
                    </TableCell>
                    <ActionSection item={item} index={index} />
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const ActionSection = ({ item, index }: { item: any; index: any }) => {
  const { address } = useAccount();
  const { writeContractAsync, isPending, isSuccess, isError } =
    useWriteContract();
    const { writeContractAsync:writeContractAsyncClaim, isPending:isPendingClaim, isSuccess:isSuccessClaim, isError:isErrorClaim } =
    useWriteContract();
    const { writeContractAsync:writeContractAsyncUnstake, isPending:isPendingUnstake, isSuccess:isSuccessUnstake, isError:isErrorUnstake } =
    useWriteContract();
  const { chainId } = useAppKitNetwork();
  const tierData = useReadContract({
    ...stakeConfig,
    functionName: "getTier",
    args: [item?.tierId],
    chainId: Number(chainId) ?? 97,
  });

  const handleClaim = async () => {
    try {
      const res = await writeContractAsyncClaim({
        address: StakeContractAddress,
        abi: StakeABI,
        functionName: "claimReward",
        args: [BigInt(index)],
      });

      if (res) {
        toast.success("claim successfully.");
      }
    } catch (error: any) {
      console.log(">>>>>>>>>>>>.error", error);

      toast.error(extractDetailsFromError(error.message as string) as string);
    }
  };


  const handleRestake = async () => {
    try {
      const res = await writeContractAsync({
        address: StakeContractAddress,
        abi: StakeABI,
        functionName: "restake",
        args: [BigInt(index)],
      });

      if (res) {
        toast.success("Re-Stake successfully");
      }
    } catch (error: any) {
      console.log(">>>>>>>>>>>>.error", error);

      toast.error(extractDetailsFromError(error.message as string) as string);
    }
  };

  const handleUnstake = async () => {
    try {
      const res = await writeContractAsyncUnstake({
        address: StakeContractAddress,
        abi: StakeABI,
        functionName: "unstake",
        args: [address as Address, BigInt(index)],
      });

      if (res) {
        toast.success("Un-Stake successfully");
      }
    } catch (error: any) {
      console.log(">>>>>>>>>>>>.error", error);

      toast.error(extractDetailsFromError(error.message as string) as string);
    }
  };


  return (
    <TableCell className="text-white ">
      <div className="flex items-center justify-end space-x-2">
        <Button
        onClick={()=>handleClaim()}
          disabled={isPendingClaim}
          className="w-[86px] bg-black border border-[#2865FF] text-white px-3 py-1 rounded-[50px] h-[50px] "
        >
         {isPendingClaim ? "Claiming...":"Claim"} 
        </Button>
        {tierData?.data?.isUnstakedEnabled && (
          <CommonButton onClick={()=>handleUnstake()} disabled={isPendingUnstake} title={`${isPendingUnstake ? "Unstaking..." : "Unstake"}`} width="100px" />
        )}
        <CommonButton
          disabled={isPending}
          onClick={() => handleRestake()}
          title={`${isPending ? "Restaking..." : "Restake"}`}
          width="100px"
        />
      </div>
    </TableCell>
  );
};

const DailyReward = ({
  index,
  address,
}: {
  index: number;
  address: Address;
}) => {
  const { data: blockNumber } = useBlockNumber({ watch: true });
  const queryClient = useQueryClient();
  const { chainId } = useAppKitNetwork();
  const dailyReward = useReadContract({
    ...stakeConfig,
    functionName: "calculateRewards",
    args: [address, BigInt(index)],
    chainId: Number(chainId) ?? 97,
  });
  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: dailyReward.queryKey,
    });
    
  }, [blockNumber, queryClient,dailyReward]);

  return (
    <TableCell className="text-white whitespace-pre">
      {dailyReward?.data
        ? parseFloat(formatEther(dailyReward?.data)).toFixed(2)
        : "0.00"}{" "}
      AIZU
    </TableCell>
  );
};
