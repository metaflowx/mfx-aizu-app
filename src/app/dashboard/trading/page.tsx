"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Bot,
  LineChart,
  Settings,
  TrendingUp,
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react"
import MarketValueTable from "./MarketValueTable"
import PredicationCard from "./innercard/PredicationCard"
import PriceStatics from "./innercard/PriceStatics"
import TradingHistory from "./innercard/TradingHistory"
import MainDashboard from "./MainDashboard"
import MainChart from "./MainChart"
import CommonButton from "@/components/ui/CommonButton"

export default function TradingPage() {
  return (
    <>
    
<div className="pb-2">
<CommonButton title="Connect with Binance" width="280px" />
</div>
      <MainDashboard />
      <div className="flex items-center py-2" >
      <h3>Apply for Bot access Whitelist </h3>&nbsp;
      <CommonButton title="Apply" width="150px" />

      </div>
    
      <MainChart />

      

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-5">
       
          <PredicationCard />
          <PriceStatics />

          <TradingHistory />

        

      </div>
        <MarketValueTable />
    </>
  )
}