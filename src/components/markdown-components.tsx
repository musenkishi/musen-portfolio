import { FC, ReactNode } from "react"
import InlineLink from "./link/inline-link"

export const StrongText: FC<{ children: ReactNode }> = ({ children }) => (
  <span className="font-bold">{children}</span>
)

export const SimpleBulletList: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ul className="flex flex-col gap-2 list-disc list-inside">{children}</ul>
  )
}

export const SimpleInlineLink: FC<{ children: ReactNode; href: string }> = ({
  children,
  href,
}) => <InlineLink href={href} isExternal showExternalIcon>{children}</InlineLink>
