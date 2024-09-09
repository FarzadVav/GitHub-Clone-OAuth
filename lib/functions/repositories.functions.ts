export const createDownloadUrl = (username: string, name: string, branch: string) => {
  return `https://github.com/${username}/${name}/archive/refs/heads/${branch}.zip`
}