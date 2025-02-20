import { SignIn } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default async function SignInPage() {
  const { userId } = await auth()

  if (userId) {
    redirect("/dashboard")
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="mt-2 text-gray-600">Sign in to your PilePeak account</p>
        </div>
        <SignIn
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "shadow-none border rounded-xl p-6",
              headerTitle: "hidden",
              headerSubtitle: "hidden",
              formButtonPrimary: "bg-primary hover:bg-primary/90 text-white normal-case",
              socialButtonsBlockButton: "border border-gray-200 hover:bg-gray-50 normal-case",
              footerActionLink: "text-primary hover:text-primary/90",
            },
          }}
        />
      </div>
    </div>
  )
}

