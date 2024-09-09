import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  Bars3Icon,
  BoldIcon,
  BriefcaseIcon,
  CameraIcon,
  HomeIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline"

const links = [
  { icon: <HomeIcon className="size-4" />, name: "Home" },
  { icon: <BriefcaseIcon className="size-4" />, name: "Briefcase" },
  { icon: <SpeakerWaveIcon className="size-4" />, name: "Speaker" },
  { icon: <AcademicCapIcon className="size-4" />, name: "Educations" },
  { icon: <BoldIcon className="size-4" />, name: "Energy" },
  { icon: <CameraIcon className="size-4" />, name: "Camera" },
  { icon: <AdjustmentsHorizontalIcon className="size-4" />, name: "Filters" },
]

const ProfileSideBar = () => {
  return (
    <div className="w-16 h-full">
      <div className="size-16 flex justify-center items-center">
        <button className="btn btn-square" aria-label="Menu button">
          <Bars3Icon className="size-4" />
        </button>
      </div>
      <ul className="w-full h-[calc(100%-5.5rem)] mt-6 overflow-y-auto">
        {links.map((link) => (
          <li key={link.name} className="mx-auto w-max mt-1 first:mt-0">
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
