import { FC, Suspense } from "react"
import { getRepoLastUpdate } from "../external/github"
import RelativeTime from "./relative-time"

const Footer: FC = async () => {
  const lastUpdated = await getRepoLastUpdate(
    "musenkishi",
    "musen-portfolio",
    process.env.GITHUB_ACCESS_TOKEN
  )

  return (
    <footer className="text-sm opacity-40 text-center py-8">
      <div>
        &copy; {new Date().getFullYear()} Freddie Lust-Hed. All Rights Reserved.
      </div>
      <div className="text-xs">
        Last updated:{" "}
        <Suspense fallback="">
          <RelativeTime date={new Date(lastUpdated)} />
        </Suspense>
      </div>
    </footer>
  )
}

export default Footer
