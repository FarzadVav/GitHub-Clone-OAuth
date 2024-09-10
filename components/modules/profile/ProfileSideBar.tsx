import {
  Bars3Icon,
  BookOpenIcon,
  CubeIcon,
  DocumentTextIcon,
  FolderOpenIcon,
  StarIcon,
} from "@heroicons/react/24/outline"

import getUUID from "@/lib/getUUID"

const links = [
  { name: "Overview", icon: <BookOpenIcon className="size-4" /> },
  { name: "Repositories", icon: <FolderOpenIcon className="size-4" /> },
  { name: "Projects", icon: <DocumentTextIcon className="size-4" /> },
  { name: "Packages", icon: <CubeIcon className="size-4" /> },
  { name: "Stars", icon: <StarIcon className="size-4" /> },
]

const ProfileSideBar = () => {
  return (
    <div className="w-16 h-full max-sm:hidden">
      <div className="size-16 flex justify-center items-center">
        <button className="btn btn-square" aria-label="Menu button">
          <Bars3Icon className="size-4" />
        </button>
      </div>
      <ul className="w-full h-[calc(100%-5.5rem)] overflow-y-auto">
        {links.map((link) => (
          <li key={getUUID()} className="mx-auto w-max mt-1 first:mt-0">
            <button className="btn btn-square btn-ghost" title={link.name} aria-label={link.name}>
              {link.icon}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProfileSideBar
