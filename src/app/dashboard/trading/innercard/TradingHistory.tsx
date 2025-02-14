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

export default function TradingHistory() {
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
    <Card>


        <div className='overflow-hidden '>
        <h4 className='pt-4 text-white text-[24px] font-[400] pb-2 px-2'>Trading History</h4>

        <div className="w-full overflow-hidden rounded-lg   shadow-md">
      <div className="max-h-[25rem] overflow-y-auto scrollbar-none">
        <Table className="min-w-full max-h-80">
          <TableHeader className="sticky top-0 bg-[#2D67FE4D] shadow">
            <TableRow className="border-[#2D67FE4D]">
             

              <TableHead className="w-1/5">Coin</TableHead>
              <TableHead className="w-1/5">Price</TableHead>
              <TableHead className="w-1/5 ">Amount</TableHead>
            



            </TableRow>
          </TableHeader>
          <TableBody className="[&>*:nth-child(odd)]:bg-[#15171C] [&>*:nth-child(even)]:bg-[#07070A] max-h-80">
            {listData.map((item:any, index:any) => (
              <TableRow key={index} className="border-b-0">
                
              
                <TableCell className="text-white">
                <img src={item.logo} />
                    {item.coinname}</TableCell>
               
                <TableCell className=" text-white">{item.price}</TableCell>

                <TableCell className=" text-white">{item.mcap}</TableCell>
               

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>


        </div>
      
    </Card>
  )
}
