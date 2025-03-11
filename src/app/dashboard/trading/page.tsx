"use client"
import MarketValueTable from "./MarketValueTable"
import PredicationCard from "./innercard/PredicationCard"
import PriceStatics from "./innercard/PriceStatics"
import TradingHistory from "./innercard/TradingHistory"
import MainDashboard from "./MainDashboard"
import MainChart from "./MainChart"
import CommonButton from "@/components/ui/CommonButton"
import { useLiveOrders, useOrders } from "@/hooks/useLiveOrders"
import { useState } from "react"

export default function TradingPage() {
  const { data: liveOrders, isLoading: isLoadingLive, error: errorLive } = useLiveOrders();
  const { data: orders, isLoading: isLoadingOrders, error: errorOrders } = useOrders();
  console.log(">>>>>>>>>>>>>data",liveOrders);
  const [tabType,setTabType]=useState("live")
  return (
    <>
    
<div className="pb-2">
<CommonButton title="Connect with Binance" width="280px" />
</div>
      <MainDashboard />
      <div className="flex items-center py-2" >
      <h3 className="text-white">Apply for Bot access Whitelist </h3>&nbsp;
      <CommonButton title="Apply" width="150px" />

      </div>
    
      <MainChart />

      

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-5">
       
          <PredicationCard />
          <PriceStatics />

          <TradingHistory />

        

      </div>
      {tabType==="live" ? (
        <MarketValueTable tabType={tabType} setTabType={setTabType} data={liveOrders} isLoading={isLoadingLive} />
      ):(
        <MarketValueTable tabType={tabType} setTabType={setTabType} data={orders} isLoading={isLoadingOrders} />
      )}
        
    </>
  )
}