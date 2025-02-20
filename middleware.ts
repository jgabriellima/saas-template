import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from "next/server"

const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"])

// export default clerkMiddleware(async (auth, request) => {
  // if (!isPublicRoute(request)) {
    // await auth.protect()
  // }
// })

export default clerkMiddleware(async (auth, req) => {
  const isAuth = await auth()
  
  if (!isPublicRoute(req) && !isAuth.userId) {
    // Só redireciona para sign-in se não estiver autenticado
    return isAuth.redirectToSignIn()
  }
  
  return NextResponse.next()
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}