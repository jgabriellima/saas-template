export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-2">Create an account</h1>
          <p className="text-gray-600">Start tracking your crypto portfolio</p>
        </div>
        <SignUp
          appearance={{
            elements: {
              rootBox: "mx-auto w-full",
              card: "bg-white shadow-none border rounded-xl p-6",
              headerTitle: "text-2xl font-semibold",
              headerSubtitle: "text-gray-600",
              socialButtonsBlockButton: "border-gray-200 hover:bg-gray-50",
              formButtonPrimary: "bg-primary hover:bg-primary/90",
              footerActionLink: "text-primary hover:text-primary/90",
            },
          }}
        />
      </div>
    </div>
  )
}

