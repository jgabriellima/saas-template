import { Bell, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserProfileButton } from "./user-button"

export function NavBar() {
    return (
        <nav className="border-b">
            <div className="max-w-[1400px] mx-auto px-4 h-14 flex items-center justify-between">
                <div className="flex items-center space-x-8">
                    <div className="font-semibold text-xl">PilePeak.ai</div>
                    <div className="flex items-center space-x-4 text-sm">
                        <button className="text-primary">Dashboard</button>
                        <button className="text-gray-600">My portfolio</button>
                    </div>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-600">Saved</button>
                        <button className="text-gray-600">Lists</button>
                        <Button variant="outline" size="sm">
                            Generate <Plus className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                    <Bell className="w-5 h-5 text-gray-600" />
                    <UserProfileButton />
                </div>
            </div>
        </nav>
    )
} 