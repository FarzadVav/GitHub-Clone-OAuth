import { ArrowDownTrayIcon } from "@heroicons/react/24/outline"

import { createDownloadUrl } from "@/lib/functions/repositories.functions"
import getTimeAgo from "@/lib/getTimeAgo"
import { RepositoryT } from "@/lib/types/repository.types"

const RepoBox = ({ ...repo }: RepositoryT) => {
  const downloadUrl = createDownloadUrl(repo.owner.login, repo.name, repo.default_branch)

  return (
    <div className="bg-base-100 w-[calc(50%-0.75rem/2)] flex flex-col p-6 rounded-lg">
      <div className="flex items-center">
        <a
          className="ghost-link-btn text-primary w-max text-xl font-bold"
          href={repo.html_url}
          target="_blank"
        >
          {repo.name}
        </a>

        <span className="border text-xs py-0.5 px-2 ml-3 rounded-full">
          {repo.private ? "Private" : "Public"}
        </span>

        <span className="text-sm ml-auto">
          Updated {getTimeAgo.format(new Date(repo.updated_at))}
        </span>
      </div>

      <a
        className="ghost-link-btn text-lg font-semibold"
        href={repo.owner.html_url}
        target="_blank"
      >
        {repo.owner.login}
      </a>

      <p className="text-base-content/75 mt-1 mb-4">
        {repo.description || "Description is empty..."}
      </p>

      <a className="btn w-max mt-auto" href={downloadUrl} download>
        <span>Download zip</span>
        <ArrowDownTrayIcon className="size-4" />
      </a>
    </div>
  )
}

export default RepoBox
