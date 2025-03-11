"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import CommonButton from "./ui/CommonButton"

interface ReferralData {
  user: string
  amount: string
  quantity: string
  coin:string
  date:string


}

const data: ReferralData[] = [
  { user: "0xhfshjf", amount: "57%", quantity: "$1,521",coin: "AIZU",date:"12-02-25" },
  { user: "0xhfshjf", amount: "57%", quantity: "$1,521",coin: "AIZU",date:"12-02-25" },
  { user: "0xhfshjf", amount: "57%", quantity: "$1,521",coin: "AIZU",date:"12-02-25" },
  { user: "0xhfshjf", amount: "57%", quantity: "$1,521",coin: "AIZU",date:"12-02-25" },
  { user: "0xhfshjf", amount: "57%", quantity: "$1,521",coin: "AIZU",date:"12-02-25" },
  { user: "0xhfshjf", amount: "57%", quantity: "$1,521",coin: "AIZU",date:"12-02-25" },
  { user: "0xhfshjf", amount: "57%", quantity: "$1,521",coin: "AIZU",date:"12-02-25" },
  { user: "0xhfshjf", amount: "57%", quantity: "$1,521",coin: "AIZU",date:"12-02-25" },
]

export function ReferralTable() {
  return (
    <div className="w-full overflow-hidden rounded-lg   shadow-md">
      <div className="max-h-80 overflow-y-auto scrollbar-none">
        <Table className="min-w-full">
          <TableHeader className="sticky top-0 bg-[#2D67FE4D] shadow">
            <TableRow className="border-[#2D67FE4D]">
              <TableHead className="whitespace-pre">USER</TableHead>
              <TableHead className="whitespace-pre">AMOUNT</TableHead>
              <TableHead className="whitespace-pre">Coin</TableHead>

              <TableHead className="whitespace-pre ">QUANTITY</TableHead>
              <TableHead className="whitespace-pre ">Last Claimed</TableHead>

              <TableHead className="whitespace-pre ">Date & Time</TableHead>
              <TableHead className="whitespace-pre ">Next Claim</TableHead>

              <TableHead className="whitespace-pre ">Action</TableHead>



            </TableRow>
          </TableHeader>
          <TableBody className="[&>*:nth-child(odd)]:bg-[#15171C] [&>*:nth-child(even)]:bg-[#07070A]">
            {data.map((item, index) => (
              <TableRow key={index} className="border-b-0">
                <TableCell className="text-white">{item.user}</TableCell>
                <TableCell className="text-white">{item.amount}</TableCell>
                <TableCell className="text-white">{item.coin}</TableCell>

                <TableCell className=" text-white">{item.quantity}</TableCell>
                <TableCell className=" text-white">{item.date}</TableCell>


                <TableCell className=" text-white">{item.date}</TableCell>
                <TableCell className=" text-white">12-05-25</TableCell>
                <TableCell className=" text-white">
                  <CommonButton title="Claim" />
                </TableCell>



              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
