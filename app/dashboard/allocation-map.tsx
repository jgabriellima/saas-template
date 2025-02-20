"use client"

import { Card } from "@/components/ui/card"

const allocations = [
  { name: "Bitcoin", symbol: "BTC", value: 19.62, amount: "0.264", price: "$36,998.62" },
  { name: "Cardano", symbol: "ADA", value: 16.1, amount: "21,390", price: "$0.47" },
  { name: "Algorand", symbol: "ALGO", value: 11.65, amount: "44,351", price: "$0.16" },
  { name: "Polkadot", symbol: "DOT", value: 11.24, amount: "1,096", price: "$6.32" },
]

export function AllocationMap() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {allocations.map((coin) => (
        <Card key={coin.symbol} className="p-4 bg-gray-50">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100" />
              <div>
                <div className="font-medium">{coin.name}</div>
                <div className="text-xs text-gray-600">{coin.symbol}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium">{coin.amount}</div>
              <div className="text-xs text-gray-600">{coin.value}%</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

