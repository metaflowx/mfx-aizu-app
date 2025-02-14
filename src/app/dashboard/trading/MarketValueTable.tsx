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
    const listData=[
        {
            coinname:'Bitcoin',
            logo:"/images/trading/bitcoin.png",
            price:"$16,839.10",
            mcap:"324.01B",
            volume:"14,674,311,168",
            graph:"/images/trading/graph.png"
        },
        {
            coinname:'Bitcoin',
            logo:"/images/trading/bitcoin.png",
            price:"$16,839.10",
            mcap:"324.01B",
            volume:"14,674,311,168",
            graph:"/images/trading/graph.png"
        },
        {
            coinname:'Bitcoin',
            logo:"/images/trading/bitcoin.png",
            price:"$16,839.10",
            mcap:"324.01B",
            volume:"14,674,311,168",
            graph:"/images/trading/graph.png"
        },
        {
            coinname:'Bitcoin',
            logo:"/images/trading/bitcoin.png",
            price:"$16,839.10",
            mcap:"324.01B",
            volume:"14,674,311,168",
            graph:"/images/trading/graph.png"
        },
        {
            coinname:'Bitcoin',
            logo:"/images/trading/bitcoin.png",
            price:"$16,839.10",
            mcap:"324.01B",
            volume:"14,674,311,168",
            graph:"/images/trading/graph.png"
        },
    ]
  return (
    <div>

        <h4 className='pt-4 text-white text-[24px] font-[400] pb-2'>Crypto Currencies Market Value</h4>

        <Card className='overflow-hidden'>

        <div className="w-full overflow-hidden rounded-lg   shadow-md">
      <div className="max-h-80 overflow-y-auto scrollbar-none">
        <Table className="min-w-full">
          <TableHeader className="sticky top-0 bg-[#2D67FE4D] shadow">
            <TableRow className="border-[#2D67FE4D]">
              <TableHead className="w-1/5">Sr.No</TableHead>

              <TableHead className="w-1/5">Name</TableHead>
              <TableHead className="w-1/5">Symbol</TableHead>
              <TableHead className="w-1/5 ">Price</TableHead>
              <TableHead className="w-1/5 ">Market Cap</TableHead>
              <TableHead className="w-1/5 ">Graph</TableHead>
              <TableHead className="w-1/5 ">Volume</TableHead>



            </TableRow>
          </TableHeader>
          <TableBody className="[&>*:nth-child(odd)]:bg-[#15171C] [&>*:nth-child(even)]:bg-[#07070A]">
            {listData.map((item:any, index:any) => (
              <TableRow key={index} className="border-b-0">
                <TableCell className="text-white">{index+1}</TableCell>

                <TableCell className="text-white">{item.coinname}</TableCell>
                <TableCell className="text-white">
                    <img src={item.logo} />
                </TableCell>
                <TableCell className=" text-white">{item.price}</TableCell>

                <TableCell className=" text-white">{item.mcap}</TableCell>
                <TableCell className=" text-white">
                    <img src={item.graph} />
                </TableCell>
                <TableCell className=" text-white">{item.volume}</TableCell>

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
