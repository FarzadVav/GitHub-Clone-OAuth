const Home = () => {
  return (
    <div>
      <h1 className="text-5xl">Hello title</h1>
      <a
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&scope=repo`}
        className="btn btn-primary"
      >
        Sign in
      </a>
    </div>
  )
}

export default Home
