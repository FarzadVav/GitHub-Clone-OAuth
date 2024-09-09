import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid"

const SignInButton = () => {
  const githubAuthorizeUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&scope=repo`

  return (
    <a href={githubAuthorizeUrl} className="btn btn-primary font-bold">
      <span>Sign in</span>
      <ArrowTopRightOnSquareIcon className="size-4" />
    </a>
  )
}

export default SignInButton
