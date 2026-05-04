import { NextResponse } from "next/server";

// Private routes that require authentication
const PRIVATE_ROUTES = ["/my-profile", "/tile"];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if the current path is a private route
  const isPrivate = PRIVATE_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (!isPrivate) {
    return NextResponse.next();
  }

  // BetterAuth stores session in "better-auth.session_token" cookie
  const sessionToken =
    request.cookies.get("better-auth.session_token")?.value;

  if (!sessionToken) {
    // Redirect unauthenticated users to login, preserving the intended URL
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next/static  (static files)
     * - _next/image   (image optimisation)
     * - favicon.ico
     * - /api/auth     (BetterAuth API routes must stay public)
     */
    "/((?!_next/static|_next/image|favicon.ico|api/auth).*)",
  ],
};