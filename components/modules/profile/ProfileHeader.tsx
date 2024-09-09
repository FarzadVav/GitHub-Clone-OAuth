import { ArrowLeftStartOnRectangleIcon, BellIcon, Cog6ToothIcon } from "@heroicons/react/24/outline"

const ProfileHeader = () => {
  return (
    <header className="h-16 w-full flex items-center px-6">
      <h1 className="text-xl font-bold">
        GitHub <span className="text-accent">Clone</span>
      </h1>
      <label className="input input-sm input-bordered flex items-center gap-2 ml-6">
        <input type="text" className="grow" placeholder="Search" />
        <kbd className="kbd kbd-xs">⌘</kbd>
        <kbd className="kbd kbd-xs">k</kbd>
      </label>
      <div className="flex items-center gap-1 ml-auto">
        <button className="btn btn-ghost text-error hover:bg-error/20">
          <span>Sign out</span>
          <ArrowLeftStartOnRectangleIcon className="size-4 -scale-x-100" />
        </button>
        <button className="btn btn-square btn-ghost">
          <BellIcon className="size-4" />
        </button>
        <button className="btn btn-square btn-ghost">
          <Cog6ToothIcon className="size-4" />
        </button>
      </div>
    </header>
  )
}

export default ProfileHeader
