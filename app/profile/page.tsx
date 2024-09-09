import getRepositories from "@/lib/fetchers/repositories.fetcher"

const Profile = async () => {
  const repositories = await getRepositories()
  // @ts-ignore
  // console.log("repositories --------------------->", repositories[0])

  return (
    <div>
      {repositories?.map((repo) => (
        <div>{repo.name}</div>
      ))}
    </div>
  )
}

export default Profile
