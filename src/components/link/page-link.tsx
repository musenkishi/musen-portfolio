"use client"

import TLink, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"

type MyLinkProps = LinkProps & {
  children: ReactNode
  href: string
}

export const PageLink = ({ children, href, ...props }: MyLinkProps) => {
  const router = useRouter()

  const sleep = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()

    const body = document.querySelector("main")

    body?.classList.add("page-transition")
    await sleep(250)
    router.push(href)
    body?.classList.remove("page-transition")
  }

  return (
    <TLink onClick={handleTransition} href={href} {...props}>
      {children}
    </TLink>
  )
}
