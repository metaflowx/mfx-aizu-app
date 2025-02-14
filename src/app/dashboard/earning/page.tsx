"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Coins, Gift, Trophy, Users } from "lucide-react"

export default function EarningPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Earning</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Coins className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Total Earnings</h3>
              <p className="text-2xl font-bold">$0.000</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Referral Earnings</h3>
              <p className="text-2xl font-bold">$0.000</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Staking Rewards</h3>
              <p className="text-2xl font-bold">$0.000</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Gift className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Bonus Rewards</h3>
              <p className="text-2xl font-bold">$0.000</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Earning History</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex justify-between items-center pb-4 border-b last:border-0">
                <div>
                  <p className="font-medium">Staking Reward</p>
                  <p className="text-sm text-muted-foreground">March {10 + i}, 2024</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">+0.025 AIZU</p>
                  <p className="text-sm text-muted-foreground">≈ $0.50</p>
                </div>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full mt-4">
            View All History
          </Button>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Earning Stats</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Daily Average</span>
                <span className="font-medium">$0.000</span>
              </div>
              <div className="h-2 bg-secondary rounded-full">
                <div className="h-full w-1/3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Weekly Average</span>
                <span className="font-medium">$0.000</span>
              </div>
              <div className="h-2 bg-secondary rounded-full">
                <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">Monthly Average</span>
                <span className="font-medium">$0.000</span>
              </div>
              <div className="h-2 bg-secondary rounded-full">
                <div className="h-full w-2/3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}