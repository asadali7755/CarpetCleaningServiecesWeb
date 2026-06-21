import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";

  if (host === "carpetcleaningdubai.com") {
    url.host = "www.carpetcleaningdubai.com";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images|llms.txt|robots.txt|sitemap.xml|manifest.webmanifest|icon|apple-icon|opengraph-image).*)"],
};
