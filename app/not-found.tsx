import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <Button asChild variant="outline">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}

