import Link from "next/link"
import { FC, ReactNode } from "react"
import { RiExternalLinkFill } from "react-icons/ri"

type InlineLinkProps = {
  href: string
  isExternal?: boolean
  showExternalIcon?: boolean
  children: ReactNode
}

const InlineLink: FC<InlineLinkProps> = ({
  href,
  isExternal,
  showExternalIcon,
  children,
}) => {
  return (
    <span className="inline font-bold hover:underline text-secondary-700 dark:text-secondary-300">
      <Link href={href} target={isExternal ? "_blank" : "_self"}>
        <span className="inline-flex flex-row items-center gap-1">
          {children} {showExternalIcon && <RiExternalLinkFill />}
        </span>
      </Link>
    </span>
  )
}

export default InlineLink
