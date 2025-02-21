import { Button } from "@/components/components/ui/button"
import Link from "next/link"
import { FC, ReactNode } from "react"

type SocialLinkProps = {
  href: string
  label: string
  icon: ReactNode
}

const SocialLink: FC<SocialLinkProps> = ({ href, label, icon }) => {
  return (
    <Button asChild variant="ghost">
      <Link href={href} target="_blank" className="font-semibold">
        {icon} {label}
      </Link>
    </Button>
  )
}

export default SocialLink
