import RepoBox from "@/components/RepoBox"
import { getRepositories } from "@/lib/fetchers/repositories.fetchers"
import getUUID from "@/lib/getUUID"

const Repositories = async () => {
  const repos = await getRepositories()

  return (
    <div className="w-full flex flex-wrap gap-3">
      {repos?.map((repo) => (
        <RepoBox key={getUUID()} {...repo} />
      ))}
    </div>
  )
}

export default Repositories
