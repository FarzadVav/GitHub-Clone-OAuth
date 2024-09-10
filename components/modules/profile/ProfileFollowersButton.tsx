"use client"

import Image from "next/image"
import { useId } from "react"
import { UsersIcon } from "@heroicons/react/24/outline"

import { FollowerT } from "@/lib/types/follower.types"
import Modal from "@/components/Modal"
import showModalHandler from "@/lib/showModal"
import getUUID from "@/lib/getUUID"

const ProfileFollowersButton = ({ followrs }: { followrs: FollowerT[] }) => {
  const id = useId()

  return (
    <>
      <button className="ghost-link-btn italic font-semibold" onClick={() => showModalHandler(id)}>
        <span>{followrs.length} Followers</span>
        <UsersIcon strokeWidth={2} className="size-4 lg:hidden" />
      </button>

      <Modal id={id}>
        {followrs.map((user) => (
          <div
            key={getUUID()}
            className="bg-base-300 w-full flex items-center p-3 mt-1 first:mt-0 rounded"
          >
            <div className="bg-base-100 size-10 rounded-full">
              <Image
                className="size-full rounded-full"
                src={user.avatar_url}
                alt={user.login + "profile"}
                width={40}
                height={40}
              />
            </div>

            <a className="ghost-link-btn font-bold ml-3" href={user.html_url}>
              {user.login}
            </a>

            <span className="border text-xs py-0.5 px-2 ml-3 rounded-full">{user.type}</span>
          </div>
        ))}
      </Modal>
    </>
  )
}

export default ProfileFollowersButton
