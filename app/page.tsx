import Image from "next/image"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid"

const Home = () => {
  const githubAuthorizeUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&scope=repo`

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form className="ring-2 ring-base-content/10 bg-base-200 p-6 rounded-lg" action="">
        <div className="flex items-center">
          <Image src={"/gifs/cat.gif"} alt="github cat gif" width={120} height={120} />
          <h1 className="font-extrabold text-2xl ml-3">
            Please sign to your <br /> GitHub account{" "}
          </h1>
        </div>
        <p className="text-base-content/75 max-w-md text-justify">
          Lorem with good structure ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          nulla and hello world ea animi corporis possimus dolorem culpa dolorum fugiat perspiciatis
          earum in my goal!
        </p>
        <div className="border-t border-base-content/5 flex items-center pt-3 mt-3">
          <a href={githubAuthorizeUrl} className="btn btn-primary font-bold">
            <span>Sign in</span>
            <ArrowTopRightOnSquareIcon className="size-4" />
          </a>
          <a
            className="btn btn-link text-base-content ml-3"
            href="https://github.com"
            target="_blank"
          >
            Your dont have an account?
          </a>
        </div>
      </form>
    </div>
  )
}

export default Home
