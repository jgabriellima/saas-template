import type React from "react"
import Link from "next/link"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="fixed top-4 left-4">
        <Link href="/" className="flex items-center space-x-2 text-xl font-semibold">
          <span>PilePeak.ai</span>
        </Link>
      </div>
      {children}
    </div>
  )
}

