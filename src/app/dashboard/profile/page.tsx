"use client"

import ReferralCard from "@/components/dashboard/ReferralCard"
import { Card } from "@/components/ui/card"
import ShareModal from "@/components/ui/ShareModal"
import { contractConfig } from "@/constants/contract"
import { sortAddress } from "@/utils"
import copy from "clipboard-copy";
import { Address, formatEther, formatUnits, parseUnits, zeroAddress } from "viem";
import {
 
  Copy
} from "lucide-react"
import { toast } from "react-toastify"
import { useAccount, useReadContract } from "wagmi"
import { useAppKitNetwork } from "@reown/appkit/react"
import { useEffect, useState } from "react"

export default function ProfilePage() {
    const { chainId } = useAppKitNetwork();
      const [url, setUrl] = useState("");
        const [url1, setUrl1] = useState("");
  const {address}=useAccount()
   const handleCopy = (item: any) => {
      copy(item);
      toast.success("Address copied to clipboard!");
    };


      const getReffAdd = useReadContract({
        ...contractConfig,
        functionName: "getReferrer",
        args: [address as Address],
        chainId: Number(chainId) ?? 97,
      });

      console.log(">>>>>>>>>>>>>getReffAdd",getReffAdd);

       useEffect(() => {
         
          
              if (typeof window !== "undefined") {
                setUrl(`${window.location.host}/?ref=${sortAddress(address||"")}`);
                setUrl1(`${window.location.host}/?ref=${address}`);
      
              }
            }, [address]);

             const copyToClipboard = () => {
                    navigator.clipboard.writeText(url1).then(() => {
                      toast.success("Copied")
                    
                    });
                  };
      
      
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-[25px] md:text-[40px] font-[400] text-white ">Profile</h1>
      </div>

      <Card className="p-6">
        
      <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <div className="flex items-center pb-10">
              <img src="/images/profile/profile.png" />
              <h3 className="flex items-center text-white text-[16px]  md:text-[24px] font-[400] pl-5 ">
             {address ? sortAddress(address) :""}  <Copy style={{cursor:"pointer"}} onClick={() => handleCopy(address)} />
              </h3>
            </div>
            

            <div className="flex w-full items-center mt-8">
              <div
                style={{
                  background:
                    "linear-gradient(270deg, rgba(166, 166, 166, 0.7) 0%, rgba(166, 166, 166, 0) 50%, rgba(166, 166, 166, 0.7) 100%)",
                }}
                className="p-[1px] rounded-[8px]  h-[100%] "
              >
              
              </div> 
              <div className="pl-3 w-full flex">
                <h3 className="text-[16px] font-[400] whitespace-pre flex">
                You Referred By : {getReffAdd?.data===zeroAddress?<> <span className="text-[15px] font-[700]">You are not referred by anyone.</span></> : (
                  <>
                  <div className="flex">
                  {getReffAdd?.data ? sortAddress(getReffAdd?.data):""}&nbsp;
                  {getReffAdd?.data && (

                  <Copy style={{cursor:"pointer"}} onClick={() => handleCopy(address)} /> 
                  )}
                    </div> 
                  </>
                )}  
                </h3>
              
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
                              {url}&nbsp; <Copy onClick={copyToClipboard} color="#fff" style={{cursor:"pointer"}} />
                             </p>
                             <ShareModal referLink={url1} />
                           </div>
                         </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
          <img src="/images/buy/aizucoin.png"  />
          </div>
        </div>

      </Card>


     
    </>
  )
}