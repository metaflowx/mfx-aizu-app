import { iocConfig } from '@/constants/contract';
import { useAppKitNetwork } from '@reown/appkit/react';
import React, { useMemo } from 'react'
import { useReadContract, useReadContracts } from 'wagmi';
import { erc20Abi, zeroAddress } from "viem";
export default function CoinSelector({ selectedToken, setSelectedToken }: { selectedToken?: any, setSelectedToken?: any }) {
  const { chainId } = useAppKitNetwork();
  const result = useReadContracts({
    contracts: [
      {
        ...iocConfig,
        functionName: "getAcceptedTokenList",
        chainId: Number(chainId),
      },
    ],
  });
  const tokenAddrss = useMemo(() => {
    const tokenlist =
      result && result.data && result.data && result.data[0]?.result;
    if (tokenlist && tokenlist?.length > 0) {
      const mergeArray = [...tokenlist, zeroAddress];
      return mergeArray;
    }
  }, [result]);

  
  return (
    <div  className="mb-8  ">
      <h2 data-aos="fade-right" className="text-white text-lg mb-4 sm:text-center text-left">
        Step 1 - Select the Payment Method (BEP20)
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {tokenAddrss?.map((coin: any, index: number) => (
          <TokenData
          chainId={chainId}
          coin={coin}
          index={index}
          setCoinType={(coinData: any) => {
            setSelectedToken(coinData);
           
          }}
          coinType={selectedToken}
        />
        ))}
      </div>
    </div>
  )
}

const TokenData=({
  coin,
  chainId,
  index,
  setCoinType,
  coinType,
}:{
  coin: any;
  chainId: any;
  index: number;
  setCoinType: any;
  coinType: any;
})=>{
  const { data: symbol } = useReadContract({
    abi: erc20Abi,
    address: coin,
    functionName: "symbol",
    query: {
      enabled: coin !== zeroAddress,
    },
    chainId: Number(chainId),
  });
  return(
    <div
         
            key={index}
            className={`rounded-[3px] w-full p-[1px] cursor-pointer transition-all duration-300
              ${coinType.tokenname === (coin === zeroAddress ? "BNB" : symbol) ? "bg-[#2865FF]" : "bg-gradient-to-b from-transparent via-gray-400 to-transparent"}
              hover:bg-[#3A75FF]`}
            onClick={() =>   setCoinType({
              address: coin,
              tokenname: coin === zeroAddress ? "BNB" : symbol,
            })}
          >
            <button
              className={`flex flex-wrap sm:flex w-full items-center justify-center gap-2 py-3 rounded-[3px] 
                ${coinType.tokenname === (coin === zeroAddress ? "BNB" : symbol) ? "bg-[#2865FF]" : "bg-[#15171C]"}`}
            >
              <img
                src={symbol==="BTCB" ? "/images/coin-icon/btcb.png": symbol==="USDT" ? "/images/coin-icon/usdt.png": `/images/coin-icon/${coin === zeroAddress ? "bnb": symbol?.toLowerCase()}.svg`  }
                className="w-5 h-5 rounded-full"
               
              />
              <span className="text-white"> {coin === zeroAddress ? "BNB" : symbol}</span>
            </button>
          </div>
  )
}