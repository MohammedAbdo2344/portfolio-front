import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Redirect root to default locale
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }
}

export const config = {
  matcher: ["/"],
};
