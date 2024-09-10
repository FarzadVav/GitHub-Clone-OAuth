import ProfileHeader from "@/components/modules/profile/ProfileHeader"
import ProfileSideBar from "@/components/modules/profile/ProfileSideBar"
import ProfileCover from "@/components/modules/profile/ProfileCover"
import ProfileTabs from "@/components/modules/profile/ProfileTabs"

const ProfileLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="w-full h-screen flex">
      <ProfileSideBar />
      <div className=" h-full w-full sm:w-[calc(100%-4rem)]">
        <ProfileHeader />
        <div className="bg-base-200 w-full h-[calc(100%-4rem)] rounded-tl-lg overflow-y-auto">
          <ProfileCover />
          <div className="w-full p-6 mt-48 sm:mt-36">
            <ProfileTabs>{children}</ProfileTabs>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout
