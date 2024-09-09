import getRepositories from "@/lib/fetchers/repositories.fetcher"

const Repositories = async () => {
  const repos = await getRepositories()
  // @ts-ignore
  console.log("repos --------------------->", repos[0])

  return (
    <div>
      {repos?.map((repo) => (
        <div>{repo.name}</div>
      ))}
    </div>
  )
}

export default Repositories
