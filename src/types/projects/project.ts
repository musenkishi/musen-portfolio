import { ProjectID } from "@/src/data/paths"
import { RepositoryData } from "@/src/external/github"
import { StaticImageData } from "next/image"

export type MetaLink = {
  href: string
  label: string
  disabled?: boolean
  tooltip?: string
}

export type StaticMetaData = {
  platform: string
  stack: string[]
  source?: MetaLink[]
  download?: MetaLink[]
  link?: MetaLink[]
  repository?: RepositoryData
}

export type Section = {
  title: string
  markdown: string
}

export type Project = {
  id: ProjectID
  badge: string
  title: string
  metadata: StaticMetaData
  description: Section[]
  screenshots: StaticImageData[]
}
