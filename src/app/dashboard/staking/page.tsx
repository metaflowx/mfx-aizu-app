"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, Timer, TrendingUp } from "lucide-react"

export default function StakingPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Staking</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Total Staked</h3>
              <p className="text-2xl font-bold">0.000 AIZU</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">≈ $0.000 USD</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">APR</h3>
              <p className="text-2xl font-bold">12.5%</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Annual Percentage Rate</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Timer className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Lock Period</h3>
              <p className="text-2xl font-bold">30 Days</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">Minimum staking period</p>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Stake AIZU</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Amount to Stake</label>
              <Input type="number" placeholder="0.000" />
              <p className="text-sm text-muted-foreground mt-2">Available: 0.000 AIZU</p>
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
              Stake Now
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Your Stakes</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b">
              <div>
                <p className="font-medium">Staked Amount</p>
                <p className="text-2xl font-bold">0.000 AIZU</p>
              </div>
              <Button variant="outline">Unstake</Button>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Rewards Earned</p>
              <p className="text-lg font-semibold">0.000 AIZU</p>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}