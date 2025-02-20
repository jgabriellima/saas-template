import { Bell, ChevronDown, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LineChart } from "./line-chart"
import { AllocationMap } from "./allocation-map"
import { BreakdownTable } from "./breakdown-table"
import { NavBar } from "./components/nav-bar"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      
      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-light text-gray-400 mb-8">Dashboard</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <Card className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Total assets</div>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-2xl font-semibold">$49,825</span>
                    <span className="text-sm">.82</span>
                    <span className="text-xs text-green-500 bg-green-50 px-2 py-0.5 rounded">+1.9% $747.29</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600 mt-1">
                    <span>Strong performance</span>
                    <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L14.5 9H9.5L12 4Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <select className="text-sm border rounded-md px-2 py-1">
                  <option>Last 30 days</option>
                </select>
              </div>
              <LineChart />
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="text-sm text-gray-600 mb-2">Total profit</div>
                <div className="text-lg font-semibold text-green-500">+$6,801.19</div>
                <div className="text-xs text-gray-600">+15.81%</div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-gray-600 mb-2">Avg. monthly growing</div>
                <div className="text-lg font-semibold text-red-500">-1.34%</div>
                <div className="text-xs text-gray-600">-$523</div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-gray-600 mb-2">Best-profit token</div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full" />
                  <div>
                    <div className="font-medium">Cardano</div>
                    <div className="text-xs text-gray-600">ADA</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="text-sm text-gray-600 mb-2">Portfolio score</div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold">
                    B
                  </div>
                  <div>
                    <div className="font-medium">69/100</div>
                    <div className="text-xs text-gray-600">Good</div>
                  </div>
                </div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-gray-600 mb-2">AIRA</div>
                <div className="font-medium">74%</div>
                <div className="text-xs text-gray-600">Rebalance accuracy</div>
              </Card>
              <Card className="p-4">
                <div className="text-sm text-gray-600 mb-2">PRI</div>
                <div className="font-medium">0.45</div>
                <div className="text-xs text-gray-600">Resilience Index: Risky</div>
              </Card>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-medium mb-4">Allocation</h2>
              <AllocationMap />
            </div>
            <div>
              <h2 className="text-lg font-medium mb-4">Breakdown</h2>
              <BreakdownTable />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

