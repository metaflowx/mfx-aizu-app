import React from "react";
import Chart from "./tokennomics/Chart";

const data={
  "supply": "10,000,000,000",
  "presalePrice": "$0.01",
  "publicPrice": "$0.06",
  "chartData": [
    { "name": "100x", "value": 25, "color": "#0088FE" },
    { "name": "Presale", "value": 5, "color": "#00C49F" },
    { "name": "Public Launch", "value": 5, "color": "#FFBB28" },
    { "name": "Reserves", "value": 40, "color": "#FF8042" },
    { "name": "Team", "value": 5, "color": "#AF52BF" },
    { "name": "Marketing", "value": 10, "color": "#8042FF" },
    { "name": "Exchange Pool", "value": 10, "color": "#4280FF" }
  ],
  "roadmap": [
    {
      "date": "01-2024",
      "title": "Milestone #01",
      "description": "3 AIZU B2B AI Tools Launch"
    },
    // ... more milestones
  ]
}

const TokenomicsPage = () => {
  return (
    <div className=" text-white min-h-screen">
      {/* Video Section */}
     {/* <Chart data={data.chartData} /> */}
    </div>
  );
};

export default TokenomicsPage;
