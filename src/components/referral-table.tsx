"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface ReferralData {
  user: string
  amount: string
  quantity: string
}

const data: ReferralData[] = [
  { user: "Js Reigns", amount: "57%", quantity: "$1,521" },
  { user: "Js Reigns", amount: "57%", quantity: "$1,521" },
  { user: "Js Reigns", amount: "57%", quantity: "$1,521" },
  { user: "Js Reigns", amount: "57%", quantity: "$1,521" },
  { user: "Js Reigns", amount: "57%", quantity: "$1,521" },
  { user: "Js Reigns", amount: "57%", quantity: "$1,521" },
  { user: "Js Reigns", amount: "57%", quantity: "$1,521" },
  { user: "Js Reigns", amount: "57%", quantity: "$1,521" },
]

export function ReferralTable() {
  return (
    <div className="w-full overflow-hidden rounded-lg   shadow-md">
      <div className="max-h-80 overflow-y-auto scrollbar-none">
        <Table className="min-w-full">
          <TableHeader className="sticky top-0 bg-[#2D67FE4D] shadow">
            <TableRow className="border-[#2D67FE4D]">
              <TableHead className="w-1/3">USER</TableHead>
              <TableHead className="w-1/3">AMOUNT</TableHead>
              <TableHead className="w-1/3 text-right">QUANTITY</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&>*:nth-child(odd)]:bg-[#15171C] [&>*:nth-child(even)]:bg-[#07070A]">
            {data.map((item, index) => (
              <TableRow key={index} className="border-b-0">
                <TableCell className="text-white">{item.user}</TableCell>
                <TableCell className="text-white">{item.amount}</TableCell>
                <TableCell className="text-right text-white">{item.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
