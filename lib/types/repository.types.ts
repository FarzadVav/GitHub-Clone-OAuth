export type RepositoryT = {
  name: string
  description: string
  html_url: string
  default_branch: string
  private: boolean
  owner: {
    login: string
    html_url: string
  }
  updated_at: string
}