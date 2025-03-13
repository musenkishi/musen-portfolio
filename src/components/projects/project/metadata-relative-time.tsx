import { getRepoLastUpdate, RepositoryData } from "@/src/external/github"
import { FC } from "react"
import RelativeTime from "../../relative-time"

type MetaDataRelativeTimeProps = {
  data: RepositoryData
}

const GitHubRelativeTime: FC<MetaDataRelativeTimeProps> = async ({
  data,
}) => {
  const lastUpdated = await getRepoLastUpdate(data)
  return <RelativeTime date={new Date(lastUpdated)} />
}

export default GitHubRelativeTime
