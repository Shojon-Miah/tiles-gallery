import { NextResponse } from "next/server";

const PRIVATE_ROUTES = ["/my-profile", "/tile"];

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  const isPrivate = PRIVATE_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  if (!isPrivate) {
    return NextResponse.next();
  }

  const sessionToken =
    request.cookies.get("better-auth.session_token")?.value;

  if (!sessionToken) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/auth).*)",
  ],
};
