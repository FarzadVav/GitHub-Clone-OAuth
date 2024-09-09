import React from "react"

import ProfileHeader from "@/components/modules/profile/ProfileHeader"
import ProfileSideBar from "@/components/modules/profile/ProfileSideBar"
import ProfileCover from "@/components/modules/profile/ProfileCover"

const ProfileLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full h-screen flex">
      <ProfileSideBar />
      <div className=" h-full w-[calc(100%-4rem)]">
        <ProfileHeader />
        <div className="bg-base-200 w-full h-[calc(100%-4rem)] rounded-tl-lg overflow-y-auto">
          <ProfileCover />
          <div className="w-full p-6 mt-32">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout
