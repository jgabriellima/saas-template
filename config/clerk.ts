if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key")
}

export const clerkConfig = {
  publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  signInUrl: "/login",
  signUpUrl: "/sign-up",
  afterSignInUrl: "/dashboard",
  afterSignUpUrl: "/dashboard",
}

