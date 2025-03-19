"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Share2, Users } from "lucide-react";
import { ReferralTable } from "@/components/referral-table";
import ReferralCard from "@/components/dashboard/ReferralCard";
import RefTable from "./RefTable";

export default function ReferralPage() {
  const referralLink = "https://ico.aizu.com/dashboard/?ref=0xbe...6a5d";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
  };

  return (
    <>
   
   <ReferralCard type="image" />

      <h2 className="mt-5 text-[25px] md:text-[40px] text-white font-[400]">Direct Referral</h2>

      <Card className="overflow-hidden">
        
       <RefTable />
      </Card>
    </>
  );
}
