import { cookieOptions, verifySession } from "@/lib/sessions"
import UserT from "@/lib/types/user.type"
import { cookies } from "next/headers"
import FollowerT from "../types/follower.type"

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

export const getFollowers = async (url?: string) => {
  if (!url) {
    return null
  }

  const session = await verifySession()
  if (!session) {
    return null
  }

  const githubResponse = await fetch(url, {
    headers: {
      Authorization: session.access_token
    }
  })
  if (!githubResponse.ok) {
    return null
  }

  const followers = await githubResponse.json() as FollowerT[]
  return followers
}

export default getUser