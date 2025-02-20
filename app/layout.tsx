import type React from "react"
import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
    appearance={{
      variables: { colorPrimary: "#000000" },
      elements: {
        formButtonPrimary:
          "bg-black border border-black border-solid hover:bg-white hover:text-black",
        socialButtonsBlockButton:
          "bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black",
        socialButtonsBlockButtonText: "font-semibold",
        formButtonReset:
          "bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black",
        membersPageInviteButton:
          "bg-black border border-black border-solid hover:bg-white hover:text-black",
        card: "bg-[#fafafa]",
      },
    }}
    >
      <html lang="en" className={inter.className}>
        <body suppressHydrationWarning>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}

