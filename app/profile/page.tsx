import Link from "next/link"

const Profile = async () => {
  return (
    <div>
      <h3 className="text-xl font-bold">This is overview page</h3>
      <p className="mt-1">
        Please switch to{" "}
        <Link className="ghost-link-btn inline-block text-primary" href={"/profile/repositories"}>
          /repositories
        </Link>{" "}
        page to see your public and private GitHub repos ✌️
      </p>
      <p className="text-base-content/75 italic select-none mt-12">
        Created with ♥ by Farzad Vahdati
      </p>
    </div>
  )
}

export default Profile
