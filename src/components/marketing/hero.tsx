"use client";

import { useEffect, useMemo, useState } from "react";
import CommonButton from "../ui/CommonButton";
import CoinSelector from "./banner/CoinSelector";
import TimerCounter from "./banner/TimerCounter";
import HeaderStats from "./banner/HeaderStats";
import { toast } from "react-toastify";
import AnimatedBorderTrail from "../borderanimation";
import { MagicCard } from "../ui/magic-card";
import {
  useAccount,
  useBalance,
  useBlockNumber,
  useReadContract,
  useReadContracts,
  useWriteContract,
} from "wagmi";
import {
  contractConfig,
  ICOContractAddress,
  iocConfig,
  tokenConfig,
} from "@/constants/contract";
import {
  Address,
  erc20Abi,
  formatEther,
  formatUnits,
  parseEther,
  parseUnits,
  zeroAddress,
} from "viem";
import {
  useAppKit,
  useAppKitAccount,
  useAppKitNetwork,
} from "@reown/appkit/react";
import { handleNegativeValue } from "@/utils";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import useCheckAllowance from "@/hooks/useCheckAllowance";
import { IcoABI } from "@/app/ABI/IcoABI";
import { useSearchParams } from "next/navigation";
import { extractDetailsFromError } from "@/utils/extractDetailsFromError";
import PhaseDisplay from "./PhaseDisplay";
import shortenString from "@/lib/shortenString";
 
export default function Hero({ id, type }: { id?: string; type?: string }) {
  const { address } = useAccount();
  const queryClient = useQueryClient();
  const searchparm = useSearchParams();
  const { data: blockNumber } = useBlockNumber({ watch: true });
  const [amount, setAmount] = useState<string>("");
  const { chainId } = useAppKitNetwork();
  const [isAproveERC20, setIsApprovedERC20] = useState(true);
  const [referrer, setReferrer] = useState(
    searchparm.get("ref") || zeroAddress
  );
  const { writeContractAsync, isPending, isSuccess, isError } =
    useWriteContract();
  const [selectedToken, setSelectedToken] = useState({
    tokenname: "BNB",
    id: "tether",
    imgurl: "/images/coin-icon/usdt.png",
    address: zeroAddress,
  });

  const { open, close } = useAppKit();

  const result = useReadContracts({
    contracts: [
      {
        ...iocConfig,
        functionName: "getSaleTokenPrice",
        args: [1],
        chainId: Number(chainId) ?? 56,
      },

      {
        ...iocConfig,
        functionName: "saleType2IcoDetail",
        args: [1],
        chainId: Number(chainId) ?? 56,
      },
      {
        ...tokenConfig,
        functionName: "totalSupply",
        chainId: Number(chainId) ?? 56,
      },
      {
        ...iocConfig,
        functionName: "user2SaleType2Contributor",
        args: [address as Address, 1],
        chainId: Number(chainId) ?? 56,
      },
      {
        ...iocConfig,
        functionName: "saleType2IcoDetail",
        args: [1],
        chainId: Number(chainId),
      },

      {
        ...contractConfig,
        functionName: "getReferrer",
        args: [address as Address],
        chainId: Number(chainId) ?? 56,
      },
    ],
  });

  const tokenAddress =
    selectedToken.tokenname === "BNB" ? zeroAddress : selectedToken.address;

  const calculationresult = useReadContracts({
    contracts: [
      {
        ...iocConfig,
        functionName: "calculateUSDAmount",
        args: [tokenAddress as Address, parseEther(amount)],
        chainId: Number(chainId),
      },
      {
        ...iocConfig,
        functionName: "exchangelaunchDate",
        chainId: Number(chainId),
      },

      {
        ...iocConfig,
        functionName: "totalContributor",
        args: [1],
        chainId: Number(chainId),
      },

      {
        ...iocConfig,
        functionName: "getPaymentOption",
        args: [tokenAddress as Address],
        chainId: Number(chainId),
      },
    ],
  });

  const calciulatedToken = useMemo(() => {
    if ((result && result?.data) || amount || calculationresult) {
      const tokenPrice = result?.data && result?.data[0]?.result;
      const dividedVa = calculationresult?.data
        ? (Number(
            formatEther(BigInt(calculationresult?.data[0]?.result ?? 0))
          ) > 0
            ? Number(
                formatEther(BigInt(calculationresult?.data[0]?.result ?? 0))
              )
            : Number(amount)) / Number(formatEther(BigInt(tokenPrice ?? 0)))
        : 0;
      const purchaseToken =
        result &&
        result?.data &&
        result?.data[3]?.result &&
        formatEther(BigInt(result?.data[3]?.result?.volume));
      const tokeninUSD =
        result && result?.data
          ? Number(formatEther(BigInt(result?.data[0]?.result ?? 0)))
          : 0;
      const totalTokenSupply =
        result &&
        result?.data &&
        result?.data[4]?.result &&
        formatEther(BigInt(result?.data[4]?.result?.saleTokenAmount));
      const totalTokenQty =
        result &&
        result?.data &&
        result?.data[4]?.result &&
        formatEther(BigInt(result?.data[4]?.result?.saleQuantity));

      const totalTokenSale =
        result &&
        result?.data &&
        result?.data[4]?.result &&
        formatEther(BigInt(result?.data[4]?.result?.saleTokenAmount));

      const purchaseTokenUSD = Number(purchaseToken) * Number(tokeninUSD);
      const totalTokenSupplyUSD = Number(totalTokenSupply) * Number(tokeninUSD);
      const totalSoldToken = Number(totalTokenSale) - Number(totalTokenQty);
      const totalSaleTokenUSD = Number(totalSoldToken) * Number(tokeninUSD);
      const launchDate = calculationresult?.data?.[1]?.result;
      const totalContributors = calculationresult?.data?.[2]?.result;
      const tokenPriceData = Number(formatEther(BigInt(tokenPrice ?? 0)));

      return {
        getToken: dividedVa?.toFixed(2),
        purchaseTokenUSD: purchaseTokenUSD.toFixed(2),
        totalTokenSupplyUSD: totalTokenSupplyUSD,
        totalSale: totalSaleTokenUSD.toFixed(2),
        purchaseToken: Number(purchaseToken).toFixed(2),
        launchDate: launchDate,
        totalContributors: Number(totalContributors),
        tokenPriceData: tokenPriceData,
      };
    }
  }, [result, amount, calculationresult]);

  const resultOfCheckAllowance = useCheckAllowance({
    spenderAddress: ICOContractAddress,
    token: selectedToken.address,
  });

  useEffect(() => {
    if (resultOfCheckAllowance && address) {
      const price = parseFloat(amount === "" ? "0" : amount);
      const allowance = parseFloat(
        formatEther?.(resultOfCheckAllowance.data ?? BigInt(0))
      );
      if (allowance >= price) {
        setIsApprovedERC20(true);
      } else {
        setIsApprovedERC20(false);
      }
    }
  }, [resultOfCheckAllowance, address, amount]);

  useEffect(() => {
    queryClient.invalidateQueries({
      queryKey: resultOfCheckAllowance.queryKey,
    });
    queryClient.invalidateQueries({
      queryKey: result.queryKey,
    });
  }, [blockNumber, queryClient, result, resultOfCheckAllowance]);

  const progressWidth =
    (Number(calciulatedToken?.totalSale) /
      Number(calciulatedToken?.totalTokenSupplyUSD)) *
    100;

  const minBuy = result?.data?.[4]?.result?.minBuy
    ? Number(formatEther(BigInt(result.data[4].result.minBuy)))
    : 0;
  const maxBuy = result?.data?.[4]?.result?.maxBuy
    ? Number(formatEther(BigInt(result.data[4].result.maxBuy)))
    : 0;

    
    

  const handleBuy = async () => {
    try {
      const formattedAmount = parseUnits(amount, 18);
      const tokenAddress = selectedToken?.address;
      const res = await writeContractAsync({
        address: ICOContractAddress,
        abi: IcoABI,
        functionName: "buy",
        args: [
          1,
          tokenAddress as Address,
          formattedAmount,
          (result?.data?.[5]?.result !== zeroAddress ? result?.data?.[5]?.result as Address : referrer as Address)
         
        ],
        value:
          selectedToken?.tokenname === "BNB" ? parseEther(amount) : BigInt(0),
      });
     

      if (res) {
        setAmount("");
        toast.success("Transaction completed");
      }
    } catch (error: any) {
      console.log(">>>>>>>>>>>>.error", error);

      toast.error(extractDetailsFromError(error.message as string) as string);
    }
  };

  const approveToken = async () => {
    try {
      const formattedAmount =
        Number?.(amount) > 0
          ? parseEther?.(amount)
          : parseEther?.(
              BigInt((Number.MAX_SAFE_INTEGER ** 1.3)?.toString())?.toString()
            );
      const res = await writeContractAsync({
        abi: erc20Abi,
        address: selectedToken.address,
        functionName: "approve",
        args: [ICOContractAddress, formattedAmount],
        account: address,
      });
      if (res) {
        setIsApprovedERC20(true);
        toast.success("Token approved successfully");
      }
    } catch (error: any) {
      toast.error(extractDetailsFromError(error.message as string) as string);
    }
  };

  const { data: Balance } = useBalance({
    address: address,
  });

  const { data: resultOfTokenBalance } = useReadContract({
    abi: erc20Abi,
    address: selectedToken.address,
    functionName: "balanceOf",
    args: [address as Address],
    account: address,
    query: {
      enabled: selectedToken.tokenname === "BNB" ? false : true,
    },
  });

 

 
 

  return (
    <>
    <main
      id={id}
      className={`${
        type === "dashboard" ? "w-full" : "max-w-[68rem]"
      }  mx-auto  flex items-center justify-center sm:mt-10 2xl:mt:5 mt-10`}
    >
      <MagicCard>
        <div
          style={{
            background:
              "linear-gradient(180deg, #2865FF 0%, rgba(40, 101, 255, 0) 100%)",
            padding: "1px",
          }}
          className="rounded-[20px] w-full"
        >
          <div className="w-full bg-[#0D0D0D] p-6 rounded-[20px] ">
            {type !== "dashboard" && (
              <>
                <div className="hidden md:block">
                  <AnimatedBorderTrail
                  trailSize="lg"
                  className="w-full rounded-[12px] mb-10"
                  contentClassName="rounded-[12px]"
                  trailColor="blue"
                  duration="8s"
                >
                  <HeaderStats calciulatedToken={calciulatedToken} />
                </AnimatedBorderTrail>
                </div>

                <div className="block md:hidden mb-4">
                  
                  <HeaderStats calciulatedToken={calciulatedToken} />
               
                </div>

                {/* Title */}
                <PhaseDisplay
                tokenPrice={calciulatedToken?.tokenPriceData}
                phaseData={ result &&
                  result.data &&
                  result.data &&
                  result.data[1]?.result &&
                  result.data[1]?.result}
                 
                />

                <h1
                  data-aos="fade-right"
                  className="text-[14px] md:text-[18px] font-bold text-center text-white mb-2"
                >
Next phase will start in 
                </h1>

                {/* Countdown Timer */}
                {Math.floor(Date.now() / 1000) <=
                Number(result?.data?.[1]?.result?.startAt) ? (
                  <TimerCounter
                  phaseData={ result &&
                    result.data &&
                    result.data &&
                    result.data[1]?.result &&
                    result.data[1]?.result}
                    targetTime={
                      result &&
                      result.data &&
                      result.data &&
                      result.data[1]?.result &&
                      result.data[1]?.result &&
                      result.data[1]?.result?.startAt
                    }
                  />
                ) : (
                  <TimerCounter
                   
                    phaseData={ result &&
                      result.data &&
                      result.data &&
                      result.data[1]?.result &&
                      result.data[1]?.result}
                    targetTime={
                      result &&
                      result.data &&
                      result.data &&
                      result.data[1]?.result &&
                      result.data[1]?.result &&
                      result.data[1]?.result?.endAt
                    }
                  />
                )}
              </>
            )}

            <div
              style={{
                background: "#000",
                border: "1px solid #DD4242",
              }}
              className="w-full h-[20px] rounded-full mb-6 overflow-hidden"
            >
              <div
                style={{
                  width: `${progressWidth}%`, // Dynamically set width
                  background:
                    "linear-gradient(90deg, #DD4242 0%, rgba(221, 66, 66, 0) 100%)",
                  border: "1px solid #DD4242",
                }}
                className="h-full rounded-full transition-all duration-300 ease-in-out"
              ></div>
            </div>

            {/* Token Info */}
            <div className="block sm:flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <img
                  src="/images/coin-icon/aizu.png"
                  className="w-6 h-6 bg-[#FFD700] rounded-full"
                />
                <span data-aos="fade-right" className="text-white">
                  1 AIZU
                </span>
                <span data-aos="fade-right" className="text-white mx-1">
                  =
                </span>
                <img
                  src="/images/coin-icon/usdt.png"
                  className="w-6 h-6 bg-[#26A17B] rounded-full"
                />
                <span data-aos="fade-right" className="text-white">
                  {calciulatedToken?.tokenPriceData} USDT
                </span>
              </div>
              <div
                data-aos="fade-right"
                className="text-white text-sm sm:mt-0 mt-[15px]"
              >
                 Listing price $0.06
              </div>
            </div>

            {/* Step 1 */}
            <CoinSelector
              selectedToken={selectedToken}
              setSelectedToken={setSelectedToken}
            />

            {/* Step 2 */}
            <div className="mb-8">
              <h2
                data-aos="fade-right"
                className="text-white text-lg mb-4 sm:text-center text-left"
              >
                Step 2 - Enter the Amount of Token You Would Like to Purchase
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  data-aos="fade-down"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(166, 166, 166, 0) 0%, #A6A6A6 50%, rgba(166, 166, 166, 0) 100%)",
                    backdropFilter: "blur(0.8748223781585693px)",
                  }}
                  className="rounded-[8px] w-full p-[1px]"
                >
                  <div
                    data-aos="fade-down"
                    className="flex bg-[#15171C] rounded-[8px] p-4"
                  >
                    <input
                      type="number"
                      onKeyDown={(e) => {
                        handleNegativeValue(e);
                      }}
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="bg-transparent text-white w-full outline-none"
                      placeholder="0"
                    />

                    <div className="flex items-center gap-2">
                      <img
                        src={
                          selectedToken?.tokenname === "BTCB"
                            ? "/images/coin-icon/btcb.png"
                            : selectedToken?.tokenname === "USDT"
                            ? "/images/coin-icon/usdt.png"
                            : `/images/coin-icon/${
                                selectedToken?.address === zeroAddress
                                  ? "bnb"
                                  : selectedToken?.tokenname?.toLowerCase()
                              }.svg`
                        }
                        className="w-5 h-5 rounded-full"
                      />
                      <span className="text-white">
                        {selectedToken?.tokenname}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-down"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(166, 166, 166, 0) 0%, #A6A6A6 50%, rgba(166, 166, 166, 0) 100%)",
                    backdropFilter: "blur(0.8748223781585693px)",
                  }}
                  className="rounded-[8px] w-full p-[1px]"
                >
                  <div
                    data-aos="fade-down"
                    className="flex bg-[#15171C] rounded-lg p-4"
                  >
                    <input
                      type="number"
                      value={calciulatedToken?.getToken || 0}
                      className="bg-transparent text-white w-full outline-none"
                      readOnly
                      placeholder="0"
                    />
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/coin-icon/aizu.png"
                        className="w-5 h-5 bg-[#FFD700] rounded-full"
                      />
                      <span className="text-white">AIZU</span>
                    </div>
                  </div>
                </div>
                {amount &&
                  (calculationresult?.data?.[0]?.result ||
                    calculationresult?.data?.[3]?.result) && (
                    <>
                      {calculationresult?.data?.[3]?.result?.isStable &&
                        Number(amount) < Number(minBuy) && (
                          <p className="pt-1" style={{ color: "red" }}>
                            Min: ${minBuy}
                          </p>
                        )}

                      {
                        <>
                          {!calculationresult?.data?.[3]?.result?.isStable &&
                            Number(
                              formatEther(
                                BigInt(calculationresult?.data[0]?.result ?? 0)
                              )
                            ) < Number(minBuy) && (
                              <p className="pt-1" style={{ color: "red" }}>
                                Min: ${minBuy}
                              </p>
                            )}
                        </>
                      }
                    </>
                  )}
              </div>
            </div>

            {/* Connect Wallet Button */}

            <AnimatedBorderTrail
              data-aos="fade-up"
              trailSize="lg"
              className="w-full"
            >
              {address ? (
                <CommonButton
                  disabled={
                    (calculationresult?.data?.[3]?.result?.isStable &&
                      Number(amount) < Number(minBuy)) ||
                    (!calculationresult?.data?.[3]?.result?.isStable &&
                      Number(
                        formatEther(
                          BigInt(calculationresult?.data?.[0]?.result ?? 0)
                        )
                      ) < Number(minBuy)) ||
                    isPending ||
                    amount === "" ||
                    Number(amount) <= 0 ||
                    (selectedToken?.tokenname === "BNB"
                      ? Number(Balance?.formatted) < Number(amount) ||
                        Number(Balance?.formatted) === 0
                      : Number(formatEther(BigInt(resultOfTokenBalance ?? 0))) <
                        Number(amount))
                  }
                  onClick={() => {
                    if (selectedToken?.tokenname === "BNB") {
                      handleBuy();
                    } else {
                      !isAproveERC20 ? approveToken() : handleBuy();
                    }
                  }}
                  title={
                    isPending
                      ? selectedToken?.tokenname === "BNB" || isAproveERC20
                        ? "Buying..."
                        : "Approving..."
                      : selectedToken?.tokenname === "BNB" && amount === ""
                      ? "Please enter amount"
                      : selectedToken?.tokenname === "BNB" &&
                        Number(amount) <= 0
                      ? "Please enter correct amount"
                      : (
                          selectedToken?.tokenname === "BNB"
                            ? Number(Balance?.formatted) < Number(amount) ||
                              Number(Balance?.formatted) === 0
                            : Number(
                                formatEther(BigInt(resultOfTokenBalance ?? 0))
                              ) < Number(amount)
                        )
                      ? "Insufficient funds"
                      : selectedToken?.tokenname === "BNB" || isAproveERC20
                      ? "Buy Now"
                      : "Approve"
                  }
                  width="100%"
                />
              ) : (
                <CommonButton
                  title="Connect Wallet"
                  width="100%"
                  onClick={async () => open()}
                />
              )}
            </AnimatedBorderTrail>

            {!address &&
            <p
            data-aos="fade-up"
            className="text-center text-gray-400 text-sm hover:text-gray-300 cursor-pointer pt-5"
          >
            Don't have a wallet?
          </p> 
          }
          </div>
        </div>
      </MagicCard>
    </main>

    
    </>

    
  );
}
