"use client"

import NextLink, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"

type MyLinkProps = LinkProps & {
  children: ReactNode
  href: string
  className?: string
}

export const PageLink = ({
  children,
  href,
  className,
  ...props
}: MyLinkProps) => {
  const router = useRouter()

  const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()

    const main = document.querySelector("main")

    main?.classList.add("page-transition")
    await sleep(250)
    router.push(href)
    await sleep(250)
    main?.classList.remove("page-transition")
  }

  return (
    <NextLink
      onClick={handleTransition}
      href={href}
      className={className}
      {...props}
    >
      {children}
    </NextLink>
  )
}
