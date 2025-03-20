"use client";

import ComingSoon from "@/components/ComingSoon";
import AmountDialog from "./AmountDialog";
import { useState } from "react";
import { toast } from "react-toastify";
import { extractDetailsFromError } from "@/utils/extractDetailsFromError";
import { parseEther, parseUnits } from "viem";
import { StakeABI } from "@/app/ABI/StakeABI";
import { useWriteContract } from "wagmi";
import { StakeContractAddress } from "@/constants/contract";

export default function StakingPage() {
  const earningsData = [
    {
      id: 1,
      title: "Default",
      title1: "No Staking",
      amount: "$0.000",
      sunvalue: "",
      des: "3 Months Vesting from TGE",
      btn: false,
    },
    {
      id: 2,
      title: "Teir 1",
      title1: "10X Your",
      amount: "$AIZU",
      sunvalue: "",
      des: "10 Months Lockup",
      btn: true,
    },
    {
      id: 3,
      title: "Teir 2",
      title1: "20x Your",
      amount: "$AIZU",
      sunvalue: "",
      des: "15 Months Lockup",
      btn: true,
    },
    {
      id: 4,
      title: "Teir 3",
      title1: "30x Your",
      amount: "$AIZU",
      sunvalue: "",
      des: "20 Months Lockup",
      btn: true,
    },
  ];
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const { writeContractAsync, isPending, isSuccess, isError } =
    useWriteContract();
  const handleOpen = (item: any) => {
    setOpen(true);
    setSelectedData(item);
  };
  const handleClose = () => setOpen(false);

  const handleSubmit = async (amount: string) => {
    try {
      const formattedAmount = parseEther(amount);

      const res = await writeContractAsync({
        address: StakeContractAddress,
        abi: StakeABI,
        functionName: "stake",
        args: [BigInt(0), formattedAmount],
      });

      if (res) {
        setOpen(false);
        toast.success("Stake completed");
      }
    } catch (error: any) {
      console.log(">>>>>>>>>>>>.error", error);

      toast.error(extractDetailsFromError(error.message as string) as string);
    }
  };

  return (
    <>
      {/* <ComingSoon /> */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[20px] md:text-[40px] text-white font-[700]">
          Staking Rules
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {earningsData.map((item) => {
          return (
            <div className="bg-[#00000080] hover:border  hover:border-[#2865FF] p-4 rounded-[20px] ">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(220, 67, 67, 0) 0%, #DC4343 50%, rgba(220, 67, 67, 0) 100%)",
                }}
                className="p-[1px] rounded-[8px]  "
              >
                <div className="bg-[#15171C] rounded-[8px] h-[50px] flex flex-col items-center justify-center ">
                  <h3 className="text-sm font-medium text-muted-foreground text-center">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-5 ">
                <h3 className="text-[24px] font-[400] text-white pt-5">
                  {item.title1}
                </h3>
                <h3 className="text-[24px] font-[700] text-white ">
                  {item.amount}
                </h3>
                <h3 className="text-[20px] font-[700] text-white pb-3 text-center">
                  {item.des}
                </h3>

                {item.btn && (
                  <button
                    onClick={() => handleOpen(item)}
                    className="border bg-gradient border-[#2865FF] text-white h-[50px] w-full rounded-[40px] text-[20px] font-[400] "
                  >
                    Stake
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <AmountDialog
          selectedData={selectedData}
          open={open}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
