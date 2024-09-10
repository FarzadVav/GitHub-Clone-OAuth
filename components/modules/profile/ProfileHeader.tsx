import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline"

import SignOutButton from "@/components/SignOutButton"

const ProfileHeader = () => {
  return (
    <header className="h-16 w-full flex items-center px-6">
      <h1 className="text-lg font-bold sm:text-xl">
        GitHub <span className="text-accent">Clone</span>
      </h1>
      <label className="input input-sm input-bordered flex items-center gap-2 ml-6 max-md:hidden">
        <input type="text" className="grow" placeholder="Search" />
        <kbd className="kbd kbd-xs">⌘</kbd>
        <kbd className="kbd kbd-xs">k</kbd>
      </label>
      <div className="flex items-center gap-1 ml-auto">
        <SignOutButton />
        <button className="btn btn-square btn-ghost sm:hidden">
          <Bars3Icon className="size-4" />
        </button>
        <button className="btn btn-square btn-ghost max-sm:hidden md:hidden">
          <MagnifyingGlassIcon className="size-4" />
        </button>
        <button className="btn btn-square btn-ghost max-sm:hidden">
          <BellIcon className="size-4" />
        </button>
        <button className="btn btn-square btn-ghost max-sm:hidden">
          <Cog6ToothIcon className="size-4" />
        </button>
      </div>
    </header>
  )
}

export default ProfileHeader
