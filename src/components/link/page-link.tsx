"use client"

import { Link } from "next-view-transitions"
import { LinkProps } from "next/link"
import { ReactNode } from "react"

type PageLinkProps = LinkProps & {
  children: ReactNode
  href: string
  className?: string
}

export const PageLink = ({
  children,
  href,
  className,
  ...props
}: PageLinkProps) => {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  )
}
