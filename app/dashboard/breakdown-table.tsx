import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const tokens = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    amount: "0.264",
    value: "$9,767.63",
    allocation: "19.62%",
    price: "$36,998.62",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    amount: "3.05",
    value: "$8,124.76",
    allocation: "12.25%",
    price: "$2,008.12",
  },
]

export function BreakdownTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Token</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Value</TableHead>
          <TableHead className="text-right">Allocation</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tokens.map((token) => (
          <TableRow key={token.symbol}>
            <TableCell>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-100" />
                <div>
                  <div className="font-medium">{token.name}</div>
                  <div className="text-xs text-gray-600">{token.symbol}</div>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-right">{token.amount}</TableCell>
            <TableCell className="text-right">{token.value}</TableCell>
            <TableCell className="text-right">{token.allocation}</TableCell>
            <TableCell className="text-right">{token.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

