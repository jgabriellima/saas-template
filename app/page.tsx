import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function Home() {
  const { userId } = await auth()

  if (userId) {
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-md text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to PilePeak.ai</h1>
        <p className="text-gray-600 mb-8">
          Track and manage your crypto portfolio with advanced analytics and real-time data.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link href="/sign-up">Get Started</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

