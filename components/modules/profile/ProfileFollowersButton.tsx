"use client"

import { useId } from "react"

import { FollowerT } from "@/lib/types/follower.types"
import Modal from "@/components/Modal"
import showModalHandler from "@/lib/showModal"

const ProfileFollowersButton = ({ followrs }: { followrs: FollowerT[] }) => {
  const id = useId()

  return (
    <>
      <button className="ghost-link-btn italic font-semibold" onClick={() => showModalHandler(id)}>
        {followrs.length} Followers
      </button>

      <Modal id={id}>
        {followrs.map((user) => (
          <div className="bg-base-300 w-full p-3 mt-1 first:mt-0 rounded">{user.login}</div>
        ))}
      </Modal>
    </>
  )
}

export default ProfileFollowersButton
