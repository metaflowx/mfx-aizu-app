import { StatsCard } from "@/components/stats-card";
import React from "react";

export default function MainDashboard() {
  const dashboardData = [
    {
      title: "Total Profit",
      value: "$23,768",
    },
    {
      title: "Today's Profit",
      value: "$23,768",
    },
    {
      title: "Coins",
      value: "",
      isCoin: true,
    },
  ];
  return (
    <div className="grid grid-cols-1  sm:grid-cols-3 gap-4">
      {dashboardData.map((item) => {
        return (
          <StatsCard
            title={item.title}
            value={item.value}
            subValue=""
            isCoin={item.isCoin}
          />
        );
      })}
    </div>
  );
}
