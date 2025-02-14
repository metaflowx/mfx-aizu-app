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

export default function TradingPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Algo Trading</h1>
      </div>

      <MainDashboard />

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