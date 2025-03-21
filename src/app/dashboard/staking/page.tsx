"use client";

import AmountDialog from "./AmountDialog";
import { useState } from "react";
import { formatEther } from "viem";
import { useReadContract } from "wagmi";
import { stakeConfig } from "@/constants/contract";
import { useAppKitNetwork } from "@reown/appkit/react";

export default function StakingPage() {
  const { chainId } = useAppKitNetwork();
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const [selectedId, setSelectedId] = useState("");


  

  const handleOpen = (item: any,index:any) => {
    setOpen(true);
    setSelectedData(item);
    setSelectedId(index)
  };
  const handleClose = () => {
    setOpen(false)
    setSelectedData("")
    setSelectedId("")
  };

  const totalTierLenth = useReadContract({
    ...stakeConfig,
    functionName: "totalTierLenth",
    chainId: Number(chainId) ?? 56,
  });

  const result = useReadContract({
    ...stakeConfig,
    functionName: "getTierList",
    args: [BigInt(0), BigInt(totalTierLenth?.data || 0)],
    chainId: Number(chainId) ?? 56,
  });

  const isLoading = result.isLoading || totalTierLenth.isLoading;


  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[20px] md:text-[40px] text-white font-[700]">
          Staking Rules
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {isLoading ? (
          // Skeleton loader (4 cards)
          Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#00000080] animate-pulse p-4 rounded-[20px] h-[250px] flex flex-col justify-between"
            >
              <div className="bg-[#1f1f1f] h-[50px] rounded-md mb-4" />
              <div className="space-y-3">
                <div className="h-6 bg-[#1f1f1f] rounded w-1/2 mx-auto" />
                <div className="h-6 bg-[#1f1f1f] rounded w-3/4 mx-auto" />
                <div className="h-5 bg-[#1f1f1f] rounded w-2/3 mx-auto" />
                <div className="h-[50px] bg-[#1f1f1f] rounded-[40px]" />
              </div>
            </div>
          ))
        ) : result?.data && result.data.length > 0 ? (
          result.data.map((item, index) => (
            <div
              key={index}
              className="bg-[#00000080] hover:border hover:border-[#2865FF] p-4 rounded-[20px]"
            >
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(220, 67, 67, 0) 0%, #DC4343 50%, rgba(220, 67, 67, 0) 100%)",
                }}
                className="p-[1px] rounded-[8px]"
              >
                <div className="bg-[#15171C] rounded-[8px] h-[50px] flex flex-col items-center justify-center">
                  <h3 className="text-sm font-medium text-muted-foreground text-center">
                    {`TIER ${index + 1}`}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-5">
                <h3 className="text-[24px] font-[400] text-white pt-5">
                  {`${Number(item.returnInPercent) / 1e4}X`}
                </h3>
                <h3 className="text-[24px] font-[700] text-white">
                  {`${item?.minStaked ? formatEther(item?.minStaked) : "0"} AIZU`}
                </h3>
                <h3 className="text-[20px] font-[700] text-white pb-3 text-center">
                  {`${Number(item.lockPeriod)} Months Lockup`}
                </h3>
                <button
                  onClick={() => handleOpen(item,index)}
                  className="border bg-gradient border-[#2865FF] text-white h-[50px] w-full rounded-[40px] text-[20px] font-[400]"
                >
                  Stake
                </button>
              </div>
            </div>
          ))
        ) : (
          // No Data Found
          <div className="col-span-full text-center text-white text-lg font-medium">
            No data found.
          </div>
        )}
      </div>

      {open && (
        <AmountDialog selectedData={selectedData} open={open} onClose={handleClose} selectedId={selectedId} />
      )}
    </>
  );
}
