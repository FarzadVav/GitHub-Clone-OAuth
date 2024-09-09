import { verifySession } from "@/lib/sessions"
import Repository from "@/lib/types/repository.types"

const getRepositories = async () => {
  const session = await verifySession()
  if (!session) {
    return null
  }

  const repositoriesResponse = await fetch("https://api.github.com/user/repos", {
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })
  if (!repositoriesResponse.ok) {
    return null
  }

  const responseResult = (await repositoriesResponse.json()) as Repository[]
  return responseResult
}

const Repos = async () => {
  const repositories = await getRepositories()
  // @ts-ignore
  console.log("repositories --------------------->", repositories[0])

  return (
    <div>
      {repositories?.map((repo) => (
        <div>{repo.name}</div>
      ))}
    </div>
  )
}

export default Repos
