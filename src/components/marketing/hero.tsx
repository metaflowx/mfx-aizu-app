"use client";

import { useEffect, useState } from "react";
import CommonButton from "../ui/CommonButton";
import CoinSelector from "./banner/CoinSelector";
import TimerCounter from "./banner/TimerCounter";
import HeaderStats from "./banner/HeaderStats";

export default function Hero() {
  const [amount, setAmount] = useState<string>("");
  const [selectedToken, setSelectedToken] = useState("tether");
  const [progress, setProgress] = useState(30);
  const max = 100;
  const progressWidth = (progress / max) * 100;

  return (
    <main className="min-h-screen  max-w-[68rem] mx-auto  flex items-center justify-center sm:mt-10 2xl:mt:5 mt-10">
      <div
        style={{
          background:
            "linear-gradient(180deg, #2865FF 0%, rgba(40, 101, 255, 0) 100%)",
          padding: "1px",
        }}
        className="rounded-[20px] w-full"
      >
        <div className="w-full bg-[#0D0D0D] p-6 rounded-[20px] ">
          {/* Header Stats */}
         <HeaderStats />

          {/* Title */}
          <h1 className="text-4xl font-bold text-center text-white mb-10">
            BUY AIZU
          </h1>

          {/* Countdown Timer */}
         <TimerCounter />

          <div
            style={{
              background:
                "linear-gradient(90deg, #DD4242 0%, rgba(221, 66, 66, 0) 100%)",
              border: "1px solid #DD4242",
            }}
            className="w-full h-[20px] rounded-full mb-6"
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
              <span className="text-white">1 AIZU</span>
              <span className="text-white mx-1">+</span>
              <img
                src="/images/coin-icon/usdt.png"
                className="w-6 h-6 bg-[#26A17B] rounded-full"
              />
              <span className="text-white">0.81 USDT</span>
            </div>
            <div className="text-white text-sm sm:mt-0 mt-[15px]">
              Final phase is LIVE. Listing price 2$
            </div>
          </div>

          {/* Step 1 */}
         <CoinSelector selectedToken={selectedToken} setSelectedToken={setSelectedToken} />

          {/* Step 2 */}
          <div className="mb-8">
            <h2 className="text-white text-lg mb-4 sm:text-center text-left">
              Step 2 - Enter the Amount of Token You Would Like to Purchase
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
               style={{
                background:
                  
                     "linear-gradient(180deg, rgba(166, 166, 166, 0) 0%, #A6A6A6 50%, rgba(166, 166, 166, 0) 100%)",
                backdropFilter: "blur(0.8748223781585693px)",
              }}
              className="rounded-[8px] w-full p-[1px]"
              >

              <div className="flex bg-[#15171C] rounded-[8px] p-4">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-transparent text-white w-full outline-none"
                  placeholder="0"
                />
                <div className="flex items-center gap-2">
                  <img
                    src="/images/coin-icon/usdt.png"
                    className="w-5 h-5 bg-[#26A17B] rounded-full"
                  />
                  <span className="text-white">USDT</span>
                </div>
              </div>
              </div>
              <div
               style={{
                background:
                  
                     "linear-gradient(180deg, rgba(166, 166, 166, 0) 0%, #A6A6A6 50%, rgba(166, 166, 166, 0) 100%)",
                backdropFilter: "blur(0.8748223781585693px)",
              }}
              className="rounded-[8px] w-full p-[1px]"
              >

              <div className="flex bg-[#15171C] rounded-lg p-4">
                <input
                  type="number"
                  value={amount ? (parseFloat(amount) / 0.81).toFixed(2) : ""}
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
            </div>
          </div>

          {/* Connect Wallet Button */}

          <CommonButton title="Connect Wallet" width="100%" />

          <p className="text-center text-gray-400 text-sm hover:text-gray-300 cursor-pointer pt-5">
            Don't have a wallet?
          </p>
        </div>
      </div>
    </main>
  );
}
