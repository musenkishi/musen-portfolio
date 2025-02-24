export async function getRepoLastUpdate(
    owner: string,
    repo: string,
    token?: string
  ): Promise<string> {
    const headers: Record<string, string> = {
      'User-Agent': 'Node.js musen.dev token',
      Accept: 'application/vnd.github.v3+json'
    }
  
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }
  
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits`,
      { headers }
    )
  
    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`)
    }
  
    const [latestCommit] = await response.json()
    return new Date(latestCommit.commit.author.date).toISOString()
  }
  