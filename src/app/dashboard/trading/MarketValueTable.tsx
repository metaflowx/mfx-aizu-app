import { Card } from '@/components/ui/card'
import React from 'react'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export default function MarketValueTable() {
  const tradeHistory = [
    {
        symbol: "BTC...",
        timestamp: "1741...",
        price: "8704...",
        lastPrice: "8288...",
        orderType: "buy",
        status: "Closed",
        pnl: "-3598",
        startTime: "12:59...",
        lastUpdate: "07:15...",
        lifetime: "06:16...",
        pnlHigh: "322",
        pnlLow: "-3598",
        pnlPercentage: "-4.13",
        quantity: "1",
        date: "Tuesday"
    },
    {
        symbol: "BTC...",
        timestamp: "1741...",
        price: "8945...",
        lastPrice: "8871...",
        orderType: "sell",
        status: "Closed",
        pnl: "771",
        startTime: "11:44...",
        lastUpdate: "11:54...",
        lifetime: "00:09...",
        pnlHigh: "771",
        pnlLow: "-71",
        pnlPercentage: "0.86",
        quantity: "1",
        date: "Monday"
    },
    {
        symbol: "BTC...",
        timestamp: "1741...",
        price: "9018...",
        lastPrice: "8961...",
        orderType: "sell",
        status: "Closed",
        pnl: "570",
        startTime: "10:57...",
        lastUpdate: "11:40...",
        lifetime: "00:43...",
        pnlHigh: "666",
        pnlLow: "-778",
        pnlPercentage: "0.63",
        quantity: "1",
        date: "Monday"
    },
    {
      symbol: "BTC...",
      timestamp: "1741...",
      price: "8704...",
      lastPrice: "8288...",
      orderType: "buy",
      status: "Closed",
      pnl: "-3598",
      startTime: "12:59...",
      lastUpdate: "07:15...",
      lifetime: "06:16...",
      pnlHigh: "322",
      pnlLow: "-3598",
      pnlPercentage: "-4.13",
      quantity: "1",
      date: "Tuesday"
  },
  {
      symbol: "BTC...",
      timestamp: "1741...",
      price: "8945...",
      lastPrice: "8871...",
      orderType: "sell",
      status: "Closed",
      pnl: "771",
      startTime: "11:44...",
      lastUpdate: "11:54...",
      lifetime: "00:09...",
      pnlHigh: "771",
      pnlLow: "-71",
      pnlPercentage: "0.86",
      quantity: "1",
      date: "Monday"
  },
  {
      symbol: "BTC...",
      timestamp: "1741...",
      price: "9018...",
      lastPrice: "8961...",
      orderType: "sell",
      status: "Closed",
      pnl: "570",
      startTime: "10:57...",
      lastUpdate: "11:40...",
      lifetime: "00:43...",
      pnlHigh: "666",
      pnlLow: "-778",
      pnlPercentage: "0.63",
      quantity: "1",
      date: "Monday"
  }
];
  return (
    <div>

        <h4 className='pt-4 text-white text-[16px] md:text-[24px] font-[400] pb-2'>Crypto Currencies Market Value</h4>

        <Card className='overflow-hidden'>

        <div className="w-full overflow-hidden rounded-lg   shadow-md">
      <div className="max-h-80 overflow-y-auto scrollbar-none">
      <Table className="min-w-full max-h-80">
                            <TableHeader className="sticky top-0 bg-[#2D67FE4D] shadow">
                                <TableRow className="border-[#2D67FE4D]">
                                    <TableHead>Symbol</TableHead>
                                    <TableHead>Timestamp</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead>Last Price</TableHead>
                                    <TableHead>Order</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>PNL</TableHead>
                                    <TableHead>Start Time</TableHead>
                                    <TableHead>Last Update</TableHead>
                                    <TableHead>Lifetime</TableHead>
                                    <TableHead>PNL High</TableHead>
                                    <TableHead>PNL Low</TableHead>
                                    <TableHead>PNL %</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Date</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className="[&>*:nth-child(odd)]:bg-[#15171C] [&>*:nth-child(even)]:bg-[#07070A] max-h-80">
                                {tradeHistory.map((trade, index) => (
                                    <TableRow key={index} className="border-b-0 text-[16px] font-[400]">
                                        <TableCell className="text-white">{trade.symbol}</TableCell>
                                        <TableCell className="text-white">{trade.timestamp}</TableCell>
                                        <TableCell className="text-white">{trade.price}</TableCell>
                                        <TableCell className="text-white">{trade.lastPrice}</TableCell>
                                        <TableCell className="text-white">{trade.orderType}</TableCell>
                                        <TableCell className="text-white">{trade.status}</TableCell>
                                        <TableCell className={`text-white ${trade.pnl.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{trade.pnl}</TableCell>
                                        <TableCell className="text-white">{trade.startTime}</TableCell>
                                        <TableCell className="text-white">{trade.lastUpdate}</TableCell>
                                        <TableCell className="text-white">{trade.lifetime}</TableCell>
                                        <TableCell className="text-white">{trade.pnlHigh}</TableCell>
                                        <TableCell className="text-white">{trade.pnlLow}</TableCell>
                                        <TableCell className={`text-white ${trade.pnlPercentage.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>{trade.pnlPercentage}</TableCell>
                                        <TableCell className="text-white">{trade.quantity}</TableCell>
                                        <TableCell className="text-white">{trade.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
      </div>
    </div>


        </Card>
      
    </div>
  )
}
