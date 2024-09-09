"use client"

import signOut from "@/actions/signOut"
import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/outline"

const SignOutButton = () => {
  return (
    <button className="btn btn-ghost text-error hover:bg-error/20" onClick={() => signOut()}>
      <span>Sign out</span>
      <ArrowLeftStartOnRectangleIcon className="size-4 -scale-x-100" />
    </button>
  )
}

export default SignOutButton
