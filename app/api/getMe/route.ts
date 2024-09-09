import { verifySession } from "@/lib/sessions"

export const GET = async (request: Request) => {
  const session = request.headers.get("Authorization") || ""
  const verifiedSession = await verifySession(session)

  if (!verifiedSession) {
    return Response.json({ message: "session is not valid" }, { status: 403 })
  }

  const githubResponse = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${verifiedSession.access_token}`
    }
  })
  const responseResult = await githubResponse.json()

  return Response.json(responseResult)
}