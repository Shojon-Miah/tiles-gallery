import { NextResponse } from "next/server";

const PRIVATE_ROUTES = ["/my-profile", "/tile"];
const AUTH_ROUTES = ["/login", "/register"];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const isPrivate = PRIVATE_ROUTES.some((route) => pathname.startsWith(route));
  const isAuth = AUTH_ROUTES.some((route) => pathname.startsWith(route));

  const sessionToken =
    request.cookies.get("better-auth.session_token")?.value ||
    request.cookies.get("better-auth.session_token.development")?.value;

  // 1. Protect Private Routes
  if (isPrivate && !sessionToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // 2. Redirect logged-in users from Auth Pages
  if (isAuth && sessionToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/auth).*)"],
};

