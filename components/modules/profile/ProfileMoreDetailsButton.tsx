"use client"

import { useId } from "react"
import { CalendarIcon, ClockIcon, DocumentTextIcon, MapPinIcon } from "@heroicons/react/24/outline"

import Modal from "@/components/Modal"
import showModalHandler from "@/lib/showModal"
import { UserT } from "@/lib/types/user.types"

const ProfileMoreDetailsButton = ({ user }: { user: UserT | null }) => {
  const id = useId()

  return (
    <>
      <button
        className="ghost-link-btn italic font-semibold md:hidden"
        onClick={() => showModalHandler(id)}
      >
        <span>More details</span>
        <DocumentTextIcon strokeWidth={2} className="size-4" />
      </button>

      <Modal id={id}>
        <div className="bg-base-300 w-full flex items-center p-3 rounded">
          <MapPinIcon className="size-4" />
          <span className="ml-3">{user?.location}</span>
        </div>
        <div className="bg-base-300 w-full flex items-center p-3 mt-1 rounded">
          <CalendarIcon className="size-4" />
          <span className="ml-3">{new Date(user?.created_at || "").toLocaleDateString()}</span>
        </div>
        <div className="bg-base-300 w-full flex items-center p-3 mt-1 rounded">
          <ClockIcon className="size-4" />
          <span className="ml-3">{new Date(user?.updated_at || "").toLocaleDateString()}</span>
        </div>
      </Modal>
    </>
  )
}

export default ProfileMoreDetailsButton
