import React from "react"

import ProfileHeader from "@/components/modules/profile/ProfileHeader"
import ProfileSideBar from "@/components/modules/profile/ProfileSideBar"

const ProfileLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-screen h-screen flex">
      <ProfileSideBar />
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
