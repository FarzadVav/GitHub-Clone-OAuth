import Image from "next/image"
import {
  ArrowUpRightIcon,
  ArrowUpTrayIcon,
  CalendarIcon,
  ClockIcon,
  DocumentTextIcon,
  FolderPlusIcon,
  MapPinIcon,
  PencilSquareIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline"

import { getUser, getFollowers } from "@/lib/fetchers/user.fetchers"
import ProfileFollowersButton from "./ProfileFollowersButton"

const ProfileCover = async () => {
  const user = await getUser()
  const followrs = await getFollowers(user?.followers_url)

  return (
    <div className="bg-base-300 w-full h-64 relative">
      <Image
        className="w-full h-full object-cover object-center"
        src={"/images/cover.jpg"}
        alt="cover"
        width={2000}
        height={2000}
      />

      <div className="flex items-center py-3 absolute bottom-0 right-6">
        <button className="btn btn-square" title="edit cover" aria-label="edit cover">
          <PhotoIcon className="size-4" />
        </button>
        <button className="btn btn-square ml-3" title="edit profile" aria-label="edit profile">
          <PencilSquareIcon className="size-4" />
        </button>
      </div>

      <div className="w-full h-48 flex px-6 absolute -bottom-36 left-0">
        <Image
          className="size-48 object-cover object-center rounded-lg"
          src={user?.avatar_url || ""}
          alt={user?.name || "github avatar"}
          width={192}
          height={192}
        />

        <button className="btn btn-accent font-bold absolute top-[3.75rem] right-6 max-md:hidden">
          <span>New Repository</span>
          <FolderPlusIcon strokeWidth={2} className="size-4" />
        </button>

        <div className="w-[calc(100%-12rem)] h-36 flex flex-col justify-center gap-1 px-3 pt-3 mt-auto">
          <a className="ghost-link-btn w-max" href={user?.html_url} target="_blank">
            <h2 className="font-extrabold text-xl lg:text-3xl">
              {user?.login}
              <span className="font-bold text-lg lg:text-xl">({user?.name})</span>
            </h2>
            <ArrowUpRightIcon strokeWidth={2} className="size-4 lg:size-6" />
          </a>

          <div className="flex items-center flex-wrap gap-x-4 gap-y-1">
            <ProfileFollowersButton followrs={followrs || []} />

            <button className="ghost-link-btn italic font-semibold md:hidden">
              <span>More details</span>
              <DocumentTextIcon strokeWidth={2} className="size-4" />
            </button>

            <div className="flex items-center gap-3 max-md:hidden">
              <div className="flex items-center">
                <MapPinIcon className="size-4" />
                <span className="ml-1.5">{user?.location}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="size-4" />
                <span className="ml-1.5">
                  {new Date(user?.created_at || "").toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="size-4" />
                <span className="ml-1.5">
                  {new Date(user?.updated_at || "").toLocaleDateString()}
                </span>
              </div>
            </div>

            <button className="ghost-link-btn text-accent italic font-semibold md:hidden">
              <span>New Repository</span>
              <FolderPlusIcon strokeWidth={2} className="size-4" />
            </button>
          </div>

          <p className="text-base-content/75 truncate mt-1 max-md:hidden">{user?.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCover
