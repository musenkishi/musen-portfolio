"use client"

import { cn } from "@/components/lib/utils"
import Image, { StaticImageData } from "next/image"
import { FC } from "react"
import { PageLink } from "../link/page-link"
import { usePathname } from "next/navigation"

export type ProjectItemData = {
  thumbnail: StaticImageData
  title: string
  path: string
  description: string
}

type ProjectItemProps = ProjectItemData & {
  delayMs?: number
}

const ProjectItem: FC<ProjectItemProps> = ({
  thumbnail,
  title,
  path,
  description,
  delayMs,
}) => {
  const pathName = usePathname()

  const rootClasses = cn([
    "flex",
    "flex-col",
    "max-w-sm",
    "gap-2",
    "shrink",
    "duration-150",
    "ease-in-out",
    "hover:bg-secondary/75",
    "scale-100",
    "hover:scale-102",
    "rounded-xl",
    "p-2",
  ])

  return (
    <PageLink href={`${pathName}/${path}`}>
      <div
        className={rootClasses}
        style={delayMs ? { animationDelay: delayMs + "ms" } : undefined}
      >
        <Image
          src={thumbnail}
          alt={title + " thumbnail"}
          placeholder="blur"
          className="rounded-xl size-fit"
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold">{title}</span>
          <span>{description}</span>
        </div>
      </div>
    </PageLink>
  )
}

export default ProjectItem
