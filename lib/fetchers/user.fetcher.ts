import { cookieOptions, verifySession } from "@/lib/sessions"
import UserT from "@/lib/types/user.type"
import { cookies } from "next/headers"

const getUser = async () => {
  const session = cookies().get(cookieOptions.name)?.value
  if (!session) {
    return null
  }

  const getMeResponse = await fetch(`${process.env.API_URL}/getMe`, {
    headers: {
      Authorization: session
    }
  })
  if (!getMeResponse.ok) {
    return null
  }

  const user = await getMeResponse.json() as UserT
  return user
}

export default getUser