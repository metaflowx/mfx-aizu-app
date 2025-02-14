"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Share2, Users } from "lucide-react"
import { ReferralTable } from "@/components/referral-table"

export default function ReferralPage() {
  const referralLink = "https://ico.aizu.com/dashboard/?ref=0xbe...6a5d"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink)
  }

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Referral Program</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Total Referrals</h3>
              <p className="text-2xl font-bold">0</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Share2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Commission Rate</h3>
              <p className="text-2xl font-bold">5%</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Total Earnings</h3>
              <p className="text-2xl font-bold">$0.000</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Your Referral Link</h3>
          <div className="flex gap-4">
            <div className="flex-1 p-3 bg-secondary rounded-lg text-sm break-all">
              {referralLink}
            </div>
            <Button variant="outline" size="icon" onClick={copyToClipboard}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">How It Works</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                1
              </div>
              <div>
                <p className="font-medium">Share your referral link</p>
                <p className="text-sm text-muted-foreground">Share your unique referral link with friends</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                2
              </div>
              <div>
                <p className="font-medium">Friends make a purchase</p>
                <p className="text-sm text-muted-foreground">Your friends buy AIZU tokens using your link</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                3
              </div>
              <div>
                <p className="font-medium">Earn commission</p>
                <p className="text-sm text-muted-foreground">Get 5% commission on their purchases</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-6">Referral History</h3>
        <ReferralTable />
      </Card>
    </>
  )
}