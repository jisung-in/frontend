import { NextRequest, NextResponse } from "next/server";
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("accessToken");

  return token
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/my"],
};
