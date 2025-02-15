"use client"
import { Card } from "@/components/ui/card";
import CommonButton from "@/components/ui/CommonButton";
import React, { useState } from "react";
import Speedometer from "./TestingMeter";

export default function PredicationCard() {
    const datalist =[
        {
            logo:"/images/trading/neutral.png",
            title:"Neutral",
            value:"45-65",
             bg:"bg-[#15171C]"
        },
        {
            logo:"/images/trading/buy.png",
            title:"Buy",
            value:"+1.06",
            bg:"bg-[#01FD4833]"
        },
        {
            logo:"/images/trading/sell.png",
            title:"Sell",
            value:"-0.06",
            bg:"bg-[#FF3D3333]"
        },
    ]
     const [speed, setSpeed] = useState(65); // Default speed
    
      const checkSpeed = () => {
        const newSpeed = Math.floor(Math.random() * 101); // Random speed between 0 and 100
        setSpeed(newSpeed);
      };
  return (
    <Card className="p-4 space-y-3 ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[24px] font-[600] text-white pb-3">Prediction Meter</h2>

        <div
        style={{
            backdropFilter: "blur(0.8748223781585693px)"

        }}
        
        className="border border-[#A6A6A633] rounded-[30px] p-2 w-60 bg-black">
          <select className="w-full p-2 rounded-[30px] bg-transparent focus:outline-none">
            <option value="bitcoin"><img src="/images/trading/bitcoin.png" /> Bitcoin</option>
            <option value="ethereum"><img src="/images/trading/bitcoin.png" /> Ethereum</option>
            <option value="polygon"><img src="/images/trading/bitcoin.png" /> Polygon</option>
          </select>
        </div>

        <div className="py-3">
            <Speedometer speed={speed} />
            {/* <img src="/images/trading/meter.png" /> */}
        </div>
        {datalist.map((item,index)=>{
            return(
                <div className="flex justify-between items-center w-full pb-5">

                    <div >
                        <div className="flex items-center">
                            <img src={item.logo} className="w-[30px] h-[30px] " />
                            <h4 className="pl-3">{item.title}</h4>
                        </div>
                    </div>
                    <div className={`${item.bg} rounded-[4px] h-[31px] flex justify-center items-center px-4`}>
                        <h3>
                            {item.value}
                        </h3>
                    </div>


                </div>
            )
        })}
        <CommonButton onClick={()=>checkSpeed()} title="Start Predict" />
      </div>
    </Card>
  );
}
