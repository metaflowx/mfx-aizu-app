import React from 'react'

export default function CoinSelector({ selectedToken, setSelectedToken }: { selectedToken?: any, setSelectedToken?: any }) {
  return (
    <div className="mb-8">
      <h2 data-aos="fade-right" className="text-white text-lg mb-4 sm:text-center text-left">
        Step 1 - Select the Payment Method (BEP20)
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          {
            id: "tether",
            name: "USDT",
            color: "#26A17B",
            imgurl: "/images/coin-icon/usdt.png",
          },
          {
            id: "binance",
            name: "BNB",
            color: "#F3BA2F",
            imgurl: "/images/coin-icon/bnb.svg",
            
          },
          {
            id: "solana",
            name: "SOL",
            color: "#DC1FFF",
            imgurl: "/images/coin-icon/usdc.svg",
          },
          {
            id: "ethereum",
            name: "ETH",
            color: "#627EEA",
            imgurl: "/images/coin-icon/eth.svg",
          },
        ].map((token) => (
          <div
         
            key={token.id}
            className={`rounded-[3px] w-full p-[1px] cursor-pointer transition-all duration-300
              ${selectedToken.id === token.id ? "bg-[#2865FF]" : "bg-gradient-to-b from-transparent via-gray-400 to-transparent"}
              hover:bg-[#3A75FF]`}
            onClick={() => setSelectedToken(token)}
          >
            <button
              className={`flex flex-wrap sm:flex w-full items-center justify-center gap-2 py-3 rounded-[3px] 
                ${selectedToken.id === token.id ? "bg-[#2865FF]" : "bg-[#15171C]"}`}
            >
              <img
                src={token.imgurl}
                className="w-5 h-5 rounded-full"
                style={{ backgroundColor: token.color }}
              />
              <span className="text-white">{token.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
