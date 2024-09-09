import { NextRequest, NextResponse } from "next/server"
import { cookieOptions } from "./lib/sessions"

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const session = request.cookies.get(cookieOptions.name)?.value || ""

  const getMeResponse = await fetch(`${process.env.API_URL}/getMe`, {
    headers: {
      Authorization: session
    }
  })
  const isSessionValid = getMeResponse.ok

  if (isSessionValid) {
    const response = pathname.includes("/repos")
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/repos", request.url))

    return response
  } else {
    const response = pathname.includes("/repos")
      ? NextResponse.redirect(new URL("/", request.url))
      : NextResponse.next()
    response.cookies.delete(cookieOptions.name)

    return response
  }
}

export const config = {
  matcher: ["/", "/repos"],
}