import { SignUp as ClerkSignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-2">Create an account</h1>
          <p className="text-gray-600">Start tracking your crypto portfolio</p>
        </div>
        <ClerkSignUp />
      </div>
    </div>
  )
}

