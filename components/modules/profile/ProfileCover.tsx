import {
  ArrowUpRightIcon,
  CalendarIcon,
  ClockIcon,
  FolderPlusIcon,
  MapPinIcon,
  PencilSquareIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline"

const ProfileCover = () => {
  return (
    <div className="bg-primary w-full h-64 relative">
      <div className="flex items-center py-3 absolute bottom-0 right-6">
        <button className="btn btn-square" title="edit cover" aria-label="edit cover">
          <PhotoIcon className="size-4" />
        </button>
        <button className="btn btn-square ml-3" title="edit profile" aria-label="edit profile">
          <PencilSquareIcon className="size-4" />
        </button>
      </div>

      <div className="bg-base-300 size-48 rounded-lg absolute left-6 -bottom-32"></div>

      <div className="w-[calc(100%-13.5rem)] h-32 flex items-center p-3 absolute -bottom-32 left-[13.5rem]">
        <div className="h-full">
          <a className="flex items-center w-max" href="#">
            <h2 className="text-3xl font-extrabold">Farzad Vahdati</h2>
            <ArrowUpRightIcon strokeWidth={3} className="size-6 ml-3" />
          </a>
          <div className="flex items-center gap-3 mt-1.5">
            <span className="border-r border-base-content/10 italic font-semibold pr-4 mr-1">
              3,569 Followers
            </span>
            <div className="flex items-center">
              <MapPinIcon className="size-4" />
              <span className="ml-1.5">Mashhad</span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="size-4" />
              <span className="ml-1.5">one years ago</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="size-4" />
              <span className="ml-1.5">30m ago</span>
            </div>
          </div>
          <p className="text-base-content/75 mt-1.5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ex laboriosam, eius
            praesentium sed blanditiis...
          </p>
        </div>
        <div className="flex items-center ml-auto">
          <button className="btn btn-primary font-bold">
            <span>New Repository</span>
            <FolderPlusIcon strokeWidth={2} className="size-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileCover
