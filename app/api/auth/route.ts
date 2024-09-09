import { createSession } from "@/lib/sessions"
import { redirect } from "next/navigation"

export const GET = async (request: Request) => {
  const url = new URL(request.url)
  const code = url.searchParams.get("code") || ""

  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
  const clientSecret = process.env.NEXT_PUBLIC_CLIENT_SECRET
  if (!clientId || !clientSecret || !code) {
    return Response.json(
      { message: "clientId or clientSecret or auth-code is missing :((" },
      { status: 500 }
    )
  }

  const githubAccessTokenUrl = "https://github.com/login/oauth/access_token"
  const fetchUrlParams = `?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`
  const githubResponse = await fetch(githubAccessTokenUrl + fetchUrlParams, {
    headers: {
      Accept: "application/json"
    }
  })
  const responseResult = await githubResponse.json()
  
  createSession(responseResult)
  redirect("/")
}