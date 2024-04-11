import { NextResponse } from "next/server";
export async function middleware() {
  // const session = await auth();
  // if (!session) {
  //   return NextResponse.redirect("/login");
  // }
}

export const config = {
  matcher: ["/my"],
};
