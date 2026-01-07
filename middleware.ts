import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/contact") {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

// Only run middleware on /contact
export const config = {
  matcher: ["/contact"],
};
