"use client"
import React, { useEffect, useState } from 'react'
import { Card } from "@/components/ui/card";
import ShareModal from '../ui/ShareModal';
import { Copy } from 'lucide-react';
import { useAccount, useReadContracts } from 'wagmi';
import { toast } from 'react-toastify';
import { sortAddress } from '@/utils';
import { contractConfig } from '@/constants/contract';
import { useAppKitNetwork } from '@reown/appkit/react';
import { Address, formatEther, parseEther } from "viem";
export default function ReferralCard({type}:{type?:string}) {
    const {chainId} = useAppKitNetwork()
    console.log(">>>>>>>>>>>>chainId",chainId);
    
    const [url, setUrl] = useState("");
    const [url1, setUrl1] = useState("");

    const { address } = useAccount();
    const copyToClipboard = () => {
        navigator.clipboard.writeText(url1).then(() => {
          toast.success("Copied")
        
        });
      };
    useEffect(() => {
   
    
        if (typeof window !== "undefined") {
          setUrl(`${window.location.host}/?ref=${sortAddress(address||"")}`);
          setUrl1(`${window.location.host}/?ref=${address}`);

        }
      }, [address]);

      const result = useReadContracts({
        contracts: [
         
          {
            ...contractConfig,
            functionName: "getReferralRewards",
            args: [address as Address ],
            chainId: Number(chainId)??97
          },
          {
            ...contractConfig,
            functionName: 'getReferralsCount',
            args: [address as Address ],
            chainId: Number(chainId)??97
            
          },
          {
            ...contractConfig,
            functionName: 'getReferrer',
            args: [address as Address ],
            chainId: Number(chainId)??97
          },
          
         
         
        ],
      })
  return (
    <div>
       <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2">

            <div>
            <div className="flex w-full items-center">
            <div
              style={{
                background:
                  "linear-gradient(270deg, rgba(166, 166, 166, 0.7) 0%, rgba(166, 166, 166, 0) 50%, rgba(166, 166, 166, 0.7) 100%)",
              }}
              className="p-[1px] rounded-[8px]  h-[100%] "
            >
              <div className="bg-[#000000] rounded-[8px] h-[60px] w-[60px] flex justify-center items-center">
                <img src="/images/referral/gift.png" />
              </div>
            </div>
            <div className="pl-3">
              <h3 className="text-[20px] font-[400]">Your referrals</h3>
              <p className="text-[20px] font-[700]">{ result?.data?.[1]?.result? Number(result?.data[1]?.result) : 0}</p>
            </div>
          </div>

          <div className="flex w-full items-center mt-8">
            <div
              style={{
                background:
                  "linear-gradient(270deg, rgba(166, 166, 166, 0.7) 0%, rgba(166, 166, 166, 0) 50%, rgba(166, 166, 166, 0.7) 100%)",
              }}
              className="p-[1px] rounded-[8px]  h-[100%] "
            >
              <div className="bg-[#000000] rounded-[8px] h-[60px] w-[60px] flex justify-center items-center">
                <img src="/images/coin-icon/aizu.png" />
              </div>
            </div>
            <div className="pl-3">
              <h3 className="text-[20px] font-[400]">Your referral earnings</h3>
              <p className="text-[20px] font-[700]">{ result?.data?.[0]?.result? Number(formatEther(BigInt(result?.data[0]?.result))).toFixed(2) : 0} AIZU</p>
            </div>
          </div>

          <div className="mt-16">
            <div
              style={{
                background:
                  " linear-gradient(90deg, rgba(40, 101, 255, 0) 0%, #2865FF 50%, rgba(40, 101, 255, 0) 100%)",
              }}
              className="p-[1px]"
            >
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(40, 101, 255, 0) 0%, rgba(221, 66, 66, 0.7) 50%, rgba(40, 101, 255, 0) 100%) ",
                }}
                className=" flex justify-between items-center"
              >
                <p className="text-[14px] flex items-center md:text-[18px] font-[400] text-white">
                 {url} &nbsp; <Copy onClick={copyToClipboard} color="#fff" style={{cursor:"pointer"}} />
                </p>
                <ShareModal referLink={url1} />
              </div>
            </div>
          </div>
            </div>

{type==="image" && (
 <div className="w-full flex justify-center items-center">
 <img src="/images/buy/aizucoin.png"  />
</div>
)}
       
        </div>
         
        </Card>
    </div>
  )
}
