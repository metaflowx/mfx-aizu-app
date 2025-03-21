import { convertToAbbreviated } from "@/utils";
import moment from "moment";
import React from "react";
import {
  Address,
  erc20Abi,
  formatEther,
  formatUnits,
  parseEther,
  parseUnits,
  zeroAddress,
} from "viem";

export default function HeaderStats({calciulatedToken}:{calciulatedToken:any}) {
  const date = new Date(Number(calciulatedToken?.launchDate) * 1000);

  
  return (
    <div
      style={{
        border: "1px solid #2D67FE80",
        boxShadow: "0px 0px 8px 0px #2D67FE80",
      }}
      data-aos="fade-up"
      className="rounded-[12px] flex justify-center items-center w-full  
      transition-all duration-300 ease-in-out transform  
      hover:shadow-[0px_0px_16px_4px_#2D67FE80]"
    >
      <div className="flex justify-between text-white rounded-[12px] w-full p-4">
        <div>
          <p className="text-[14px] md:text-[18px] font-[400]">USDT Raised</p>
          <p className="text-[14px] md:text-[18px] font-[700]"> ${calciulatedToken?.totalSale >0 ? convertToAbbreviated(Number(calciulatedToken?.totalSale) +137000) :0 || 137000}</p>
        </div>
        <div className="text-center">
          <p className="text-[14px] md:text-[18px] font-[400]">Listing date</p>
          <p className="text-[14px] md:text-[18px] font-[700]">{moment(date).format("lll")||""}</p>
        </div>
        <div className="text-right">
          <p className="text-[14px] md:text-[18px] font-[400]">Holders</p>
          <p className="text-[14px] md:text-[18px] font-[700]">{convertToAbbreviated(Number(calciulatedToken?.totalContributors)+7500) || 7500}</p>
        </div>
      </div>
    </div>
  );
}
