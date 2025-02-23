import { Button } from "@/components/components/ui/button"
import Link from "next/link"
import { FC, ReactNode } from "react"

type SocialLinkProps = {
  href: string
  label: string
  icon: ReactNode
  hideLabelOnSmall?: boolean
}

const SocialLink: FC<SocialLinkProps> = ({ href, label, icon, hideLabelOnSmall }) => {
  return (
    <Button asChild variant="ghost">
      <Link href={href} target="_blank" className="font-semibold">
        {icon} <span className={hideLabelOnSmall ? "sr-only md:not-sr-only" : ""}>{label}</span>
      </Link>
    </Button>
  )
}

export default SocialLink
