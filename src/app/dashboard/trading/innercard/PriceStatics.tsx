import { Card } from "@/components/ui/card";
import CommonButton from "@/components/ui/CommonButton";
import React from "react";

export default function PriceStatics() {
  const datalist = [
    {
      title: "Price Change",
      value: "+380.30(0.26%) .  today",
      color: "text-[#FF3D33]",
    },
    {
    
      title: "Trade Value",
      value: "$245,36,465.652",
      color: "text-white",
     
    },
    {
    
      title: "Market Rank",
      value: "#1",
      color: "text-white",
    
    },
    {
    
        title: "This Week High",
        value: "$68,990.90",
        color: "text-[#01FD48]",
      
      },
      {
    
        title: "This Week Low",
        value: "$28,825.76",
        color: "text-[#FF3D33]",
      
      },
      {
    
        title: "Market Dominance",
        value: "70%",
        color: "text-white",
      
      },
      {
    
        title: "Alltime High",
        value: "$28,825.76",
        color: "text-white",
      
      },
  ];
  return (
    <Card className="p-4 space-y-3 ">
      <div className="flex flex-col justify-start items-start ">
        <h2 className="text-[24px] font-[600] text-white pb-3">
          Bitcoin Price Statistics
        </h2>

        <h3 className="text-[17px] font-[400] pb-3">
          Bitcoin value in USD{" "}
          <span className="text-[17px] font-[700] ">$42,808.47</span>{" "}
        </h3>

        {datalist.map((item, index) => {
          return (
            <div className="flex justify-between items-center w-full pb-5">
              <div>
                <div className="flex items-center">
                  <h4 className="text-[16px] font-[600] ">{item.title}</h4>
                </div>
              </div>
              <div
                className={` rounded-[4px] h-[31px] flex justify-center items-center px-4`}
              >
                <h3 className={`${item.color}`} >{item.value}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
