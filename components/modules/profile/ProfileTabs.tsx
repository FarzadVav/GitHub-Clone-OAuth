import React, { PropsWithChildren } from "react"

const tabs = ["Overview", "Repositories", "Projects", "Packages", "Stars"]

const ProfileTabs = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="border-b-2 border-base-content/10 w-full flex items-center gap-3 pb-6 mb-6">
        {tabs.map((tab, i) => (
          <button className={`btn ${i === 1 ? "btn-primary" : "btn-ghost"}`}>{tab}</button>
        ))}
      </div>
      {children}
    </>
  )
}

export default ProfileTabs
