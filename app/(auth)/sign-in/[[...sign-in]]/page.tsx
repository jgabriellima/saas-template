import { SignIn as ClerkSignIn } from "@clerk/nextjs"
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
        <ClerkSignIn />
      </div>
    </div>
  )
}

