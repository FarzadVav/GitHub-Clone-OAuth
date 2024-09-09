"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { PropsWithChildren } from "react"

import getUUID from "@/lib/getUUID"

const tabs = [
  { name: "Overview", href: "/profile" },
  { name: "Repositories", href: "/profile/repositories" },
  { name: "Projects", href: "#" },
  { name: "Packages", href: "#" },
  { name: "Stars", href: "#" },
]

const ProfileTabs = ({ children }: PropsWithChildren) => {
  const pathname = usePathname()

  return (
    <>
      <div className="border-b-2 border-base-content/10 w-full flex items-center gap-3 pb-6 mb-6">
        {tabs.map((tab) => (
          <Link key={getUUID()} href={tab.href}>
            <button className={`btn ${pathname.endsWith(tab.href) ? "btn-primary" : "btn-ghost"}`}>
              {tab.name}
            </button>
          </Link>
        ))}
      </div>
      {children}
    </>
  )
}

export default ProfileTabs
