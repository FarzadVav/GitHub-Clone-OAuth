import Image from "next/image"
import {
  ArrowUpRightIcon,
  ArrowUpTrayIcon,
  CalendarIcon,
  ClockIcon,
  FolderPlusIcon,
  MapPinIcon,
  PencilSquareIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline"

import getUser, { getFollowers } from "@/lib/fetchers/user.fetchers"

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

      <div className="bg-base-300 ring-4 ring-transparent size-48 rounded-lg absolute left-6 -bottom-32 transition-shadow group hover:ring-base-content/10">
        <Image
          className="size-full object-cover object-center rounded-lg"
          src={user?.avatar_url || ""}
          alt={user?.name || "github avatar"}
          width={192}
          height={192}
        />
        <button
          className="btn btn-sm btn-square bg-opacity-95 absolute right-3 bottom-3 transition-all opacity-0 group-hover:opacity-100"
          title="upload avatar"
          aria-label="upload avatar"
        >
          <ArrowUpTrayIcon className="size-3.5" />
        </button>
      </div>

      <div className="w-[calc(100%-13.5rem)] h-32 flex items-center absolute -bottom-32 left-[13.5rem]">
        <div className="h-full w-full flex flex-col px-6 pt-6">
          <a
            className="ghost-link-btn flex items-center w-max"
            href={user?.html_url}
            target="_blank"
          >
            <h2 className="text-3xl font-extrabold">
              {user?.login} <span className="font-bold text-xl">({user?.name})</span>
            </h2>
            <ArrowUpRightIcon strokeWidth={2} className="size-6 ml-3" />
          </a>
          <div className="flex items-center gap-3 mt-1.5">
            <div className="border-r border-base-content/10 pr-4 mr-1">
              <button className="ghost-link-btn italic font-semibold">
                {followrs?.length} Followers
              </button>
            </div>
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
          <p className="text-base-content/75 mt-auto truncate">{user?.bio}</p>
        </div>
        <div className="flex items-center absolute top-6 right-6">
          <button className="btn btn-accent font-bold">
            <span>New Repository</span>
            <FolderPlusIcon strokeWidth={2} className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileCover
