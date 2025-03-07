import { Card } from "@/components/ui/card";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

// Helper function to format timestamps
const formatDateTime = (timestamp: number, format: "time" | "date") => {
  if (!timestamp) return "N/A";
  
  const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds

  if (format === "time") {
    return date.toLocaleTimeString("en-US", { hour12: true });
  }

  if (format === "date") {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  return "N/A";
};

// Function to calculate lifetime as HH:MM:SS
const getLifetime = (startTime: number, lastUpdateTime: number) => {
  if (!startTime || !lastUpdateTime) return "N/A";

  const diff = Math.abs(lastUpdateTime - startTime); // Difference in seconds
  const hours = Math.floor(diff / 3600);
  const minutes = Math.floor((diff % 3600) / 60);
  const seconds = diff % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

export default function MarketValueTable({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data: any;
}) {
  return (
    <div>
      <h4 className="pt-4 text-white text-[16px] md:text-[24px] font-[400] pb-2">
        Crypto Currencies Market Value
      </h4>

      <Card className="overflow-hidden">
        <div className="w-full rounded-lg shadow-md">
          <div className="max-h-[500px] overflow-y-auto scrollbar-none">
            <Table className="min-w-full">
              {/* Table Header */}
              <TableHeader className="sticky top-0 bg-[#2D67FE4D] shadow-md z-10">
                <TableRow className="border-[#2D67FE4D]">
                  <TableHead className="text-white">Symbol</TableHead>
                  <TableHead className="text-white">Timestamp</TableHead>
                  <TableHead className="text-white">Price</TableHead>
                  <TableHead className="text-white">Last Price</TableHead>
                  <TableHead className="text-white">Order</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">PNL</TableHead>
                  <TableHead className="text-white">Start Time</TableHead>
                  <TableHead className="text-white">Last Update</TableHead>
                  <TableHead className="text-white">Lifetime</TableHead>
                  <TableHead className="text-white">PNL High</TableHead>
                  <TableHead className="text-white">PNL Low</TableHead>
                  <TableHead className="text-white">PNL %</TableHead>
                  <TableHead className="text-white">Quantity</TableHead>
                  <TableHead className="text-white">Date</TableHead>
                </TableRow>
              </TableHeader>

              {/* Table Body */}
              <TableBody className="[&>*:nth-child(odd)]:bg-[#15171C] [&>*:nth-child(even)]:bg-[#07070A]">
                {isLoading ? (
                  [...Array(10)].map((_, index) => (
                    <TableRow key={index} className="border-b-0">
                      {[...Array(15)].map((_, i) => (
                        <TableCell key={i}>
                          <Skeleton className="h-5 w-full" />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  data &&
                  data.map((trade: any, index: number) => {
                    const startTime = formatDateTime(trade?.timestamp, "time");
                    const lastUpdateTime = formatDateTime(trade?.lastUpdateTime, "time");
                    const lifetime = getLifetime(trade?.timestamp, trade?.lastUpdateTime);
                    const formattedDate = formatDateTime(trade?.timestamp, "date");

                    return (
                      <TableRow key={index} className="border-b-0 text-[16px] font-[400]">
                        <TableCell className="text-white">{trade?.symbol}</TableCell>
                        <TableCell className="text-white">{trade?.timestamp}</TableCell>
                        <TableCell className="text-white">{trade?.price}</TableCell>
                        <TableCell className="text-white">{trade?.lastPrice}</TableCell>
                        <TableCell className="text-white">{trade?.order_type}</TableCell>
                        <TableCell className="text-white">{trade?.status}</TableCell>
                        <TableCell className={`text-white ${trade?.pnl?.toString()?.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                          {trade?.pnl}
                        </TableCell>
                        <TableCell className="text-white">{startTime}</TableCell>
                        <TableCell className="text-white">{lastUpdateTime}</TableCell>
                        <TableCell className="text-white">{lifetime}</TableCell>
                        <TableCell className="text-white">{trade?.pnlHigh}</TableCell>
                        <TableCell className="text-white">{trade?.pnlLow}</TableCell>
                        <TableCell className={`text-white ${trade?.pnlPercentage?.toString()?.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                          {trade?.pnlPercentage}
                        </TableCell>
                        <TableCell className="text-white">{trade?.quantity}</TableCell>
                        <TableCell className="text-white">{formattedDate}</TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </Card>
    </div>
  );
}
