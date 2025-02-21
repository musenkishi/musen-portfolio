import Link from "next/link"
import { FC, ReactNode } from "react"

type InlineLinkProps = {
  href: string
  isExternal?: boolean
  children: ReactNode
}

const InlineLink: FC<InlineLinkProps> = ({ href, isExternal, children }) => {
  return (
    <span className="inline font-bold hover:underline text-secondary-700 dark:text-secondary-300">
      <Link href={href} target={isExternal ? "_blank" : "_self"}>
        {children}
      </Link>
    </span>
  )
}

export default InlineLink
