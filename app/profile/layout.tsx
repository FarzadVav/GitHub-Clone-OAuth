import React from "react"
import { Bars3Icon } from "@heroicons/react/24/outline"

import ProfileHeader from "@/components/modules/profile/ProfileHeader"

const ProfileLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-16 h-full">
        <div className="size-16 flex justify-center items-center">
          <button className="btn btn-square">
            <Bars3Icon className="size-4" />
          </button>
        </div>
      </div>
      <div className=" h-full w-[calc(100%-4rem)]">
        <ProfileHeader />
        <div className="bg-base-200 w-full min-h-[calc(100%-4rem)] p-6 rounded-tl-lg overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout
