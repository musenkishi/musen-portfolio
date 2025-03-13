import Badge from "@/src/components/badge"
import InlineLink from "@/src/components/link/inline-link"
import SkillStack from "@/src/components/root/skill-stack"
import Tooltip from "@/src/components/tooltip"
import { isRepositoryData, RepositoryData } from "@/src/external/github"
import { MetaLink, StaticMetaData } from "@/src/types/projects/project"
import { FC, Suspense } from "react"
import GitHubRelativeTime from "./metadata-relative-time"
import { Skeleton } from "@/components/components/ui/skeleton"

type MetadataProps = {
  metadata: StaticMetaData
}

type MetaBadgeProps = {
  badge: string
}

const MetaBadge: FC<{ badge: string }> = ({ badge }) => (
  <Badge className="shrink-0" isTag>
    {badge}
  </Badge>
)

type MetaValueProps = {
  value: string | string[] | MetaLink[] | RepositoryData
}

const isStringArray = (value: unknown): value is string[] => {
  return Array.isArray(value) && value.every((item) => typeof item === "string")
}

const isMetaLink = (obj: unknown[]): obj is MetaLink[] => {
  if (typeof obj !== "object" || obj === null || !Array.isArray(obj)) {
    return false
  }
  if (obj.length < 1) return false
  const link = obj[0] as MetaLink
  return (
    "href" in link &&
    typeof link.href === "string" &&
    "label" in link &&
    typeof link.label === "string"
  )
}

const MetaLinkComponent: FC<{ links: MetaLink[] }> = ({ links }) => {
  return (
    <>
      {links.map((link, index) => {
        if (!!link.tooltip) {
          return (
            <Tooltip
              key={index}
              toolTip={link.tooltip}
              variant="accent"
              side="right"
            >
              <InlineLink href={link.href} isExternal showExternalIcon>
                <span className={(link.disabled && "line-through") || ""}>
                  {link.label}
                </span>
              </InlineLink>
            </Tooltip>
          )
        } else {
          return (
            <InlineLink
              key={index}
              href={link.href}
              isExternal
              showExternalIcon
            >
              <span className={(link.disabled && "line-through") || ""}>
                {link.label}
              </span>
            </InlineLink>
          )
        }
      })}
    </>
  )
}

const MetaValue: FC<MetaValueProps> = ({ value }) => {
  if (Array.isArray(value)) {
    if (value.length === 0) return null
    if (isStringArray(value)) {
      return <SkillStack skills={value} />
    }
    if (isMetaLink(value)) {
      return <MetaLinkComponent links={value} />
    }
  } else if (isRepositoryData(value)) {
    return (
      <Suspense fallback={<Skeleton className="w-20 h-3 rounded-xs" />}>
        <GitHubRelativeTime data={value} />
      </Suspense>
    )
  } else {
    return <span>{value as string}</span>
  }
}

type MetaRowProps = MetaBadgeProps & MetaValueProps

const MetaRow: FC<MetaRowProps> = ({ badge, value }) => (
  <div className="flex flex-row text-sm font-mono gap-4 md:items-center items-baseline">
    <MetaBadge badge={badge} />
    <MetaValue value={value} />
  </div>
)

const Metadata: FC<MetadataProps> = ({ metadata }) => {
  return (
    <div className="flex flex-col gap-1">
      <MetaRow badge="Platform" value={metadata.platform} />
      <MetaRow badge="Stack" value={metadata.stack} />
      {metadata.source && <MetaRow badge="Source" value={metadata.source} />}
      {metadata.download && (
        <MetaRow badge="Download" value={metadata.download} />
      )}
      {metadata.link && <MetaRow badge="Link" value={metadata.link} />}
      {metadata.repository && (
        <MetaRow badge="Last update" value={metadata.repository} />
      )}
    </div>
  )
}

export default Metadata
