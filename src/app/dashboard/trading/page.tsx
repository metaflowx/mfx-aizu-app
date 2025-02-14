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

export default function TradingPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Algo Trading</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Active Bots</h3>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <LineChart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Total Profit</h3>
              <p className="text-2xl font-bold">$0.000</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Running Time</h3>
              <p className="text-2xl font-bold">0h</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Settings className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Success Rate</h3>
              <p className="text-2xl font-bold">0%</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Create New Bot</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Trading Pair</label>
              <Input placeholder="AIZU/USDT" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Investment Amount</label>
              <Input type="number" placeholder="0.000" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Strategy</label>
              <Input placeholder="Grid Trading" />
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
              Create Bot
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Recent Trades</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                <div className="flex items-center gap-3">
                  {i % 2 === 0 ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500" />
                  )}
                  <div>
                    <p className="font-medium">AIZU/USDT</p>
                    <p className="text-sm text-muted-foreground">Grid Trading</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${i % 2 === 0 ? "text-green-500" : "text-red-500"}`}>
                    {i % 2 === 0 ? "+" : "-"}0.025 AIZU
                  </p>
                  <p className="text-sm text-muted-foreground">≈ $0.50</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  )
}