export type RepositoryData = {
  owner: string
  repository: string
  token?: string
}

export const isRepositoryData = (obj: unknown): obj is RepositoryData => {
  if (typeof obj !== "object" || obj === null) return false
  return (
    "owner" in obj &&
    typeof obj.owner === "string" &&
    "repository" in obj &&
    typeof obj.repository === "string"
  )
}

export const getRepoLastUpdate = async (
  repositoryData: RepositoryData
): Promise<string> => {
  const { owner, repository: reposority, token } = repositoryData
  const headers: Record<string, string> = {
    "User-Agent": "Node.js musen.dev token",
    Accept: "application/vnd.github.v3+json",
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${reposority}/commits`,
    { headers }
  )

  if (!response.ok) {
    throw new Error(`GitHub API responded with status: ${response.status}`)
  }

  const [latestCommit] = await response.json()
  return new Date(latestCommit.commit.author.date).toISOString()
}
