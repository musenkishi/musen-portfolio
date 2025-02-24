import { Button } from "@/components/components/ui/button"
import { FC } from "react"
import Logo from "./logo"
import { PageLink } from "./link/page-link"
import SocialLink from "./link/social-link"
import { RiGithubFill } from "react-icons/ri"

const NavBar: FC = () => {
  return (
    <nav className="fixed bg-gray-800/50 backdrop-blur-sm z-10 w-full flex items-center justify-center">
      <div className="p-4 relative flex items-center justify-between h-14 w-full lg:max-w-240">
        <div className="flex items-center justify-between">
          <Logo />
          <Button asChild variant="link" className="font-bold text-md">
            <PageLink href="/projects">Projects</PageLink>
          </Button>
        </div>
          <SocialLink
            href="https://github.com/musenkishi/musenkishi-homepage"
            icon={<RiGithubFill />}
            label="View source"
            hideLabelOnSmall
          />
      </div>
    </nav>
  )
}

export default NavBar
