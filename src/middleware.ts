import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/
const rootDomain = "master.com"

const matcher = (pathname: string) => 
  pathname.startsWith("/_next") ||
  pathname.startsWith("/api") ||
  pathname.startsWith("/static") ||
  PUBLIC_FILE.test(pathname)

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl
  if(matcher(url.pathname)) return NextResponse.next()

  const hostname = req.headers.get("host") || rootDomain

  const currentHost =
    process.env.NODE_ENV === "production" && process.env.VERCEL === "1"
      ? hostname.replace(`.${rootDomain}`, "")
      : hostname.replace(`.localhost:3000`, "")

  const currentSite = hostname === rootDomain ? 'master' : currentHost

  url.pathname = `/${currentSite}${url.pathname}`
  return NextResponse.rewrite(url)
}