"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Copy, Wallet } from "lucide-react";
import { StatsCard } from "../stats-card";
import { ReferralTable } from "../referral-table";
import Hero from "../marketing/hero";
import ShareModal from "../ui/ShareModal";
import ReferralCard from "./ReferralCard";

export default function Dashboard() {
  return (
    <>
      

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <StatsCard
          title="Your Wallet Balance"
          value="0.000 AIZU"
          subValue="$0.000"
        />
        <StatsCard
          title="Your Coin Worth at Launch"
          value="$0.000"
          subValue="$0.000"
        />
        <StatsCard
          title="Projected AIZU at $1"
          value="$0.000"
          subValue="$0.000"
        />
      </div>

      <div className="mb-8">
        <Hero type="dashboard" />
      </div>

      <div className="grid gap-4 md:grid-cols-1">
      <Card className="overflow-hidden">
          <ReferralTable />
        </Card>
       <ReferralCard type="text" />
       
      </div>
    </>
  );
}
