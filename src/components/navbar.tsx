import { Button } from "@/components/components/ui/button"
import { FC } from "react"
import Logo from "./logo"
import { PageLink } from "./link/page-link"

const NavBar: FC = () => {
  return (
    <nav className="fixed bg-gray-800/50 backdrop-blur-sm z-10 w-full flex items-center justify-center">
      <div className="p-4 relative flex items-center justify-start h-14 w-full lg:max-w-1/2 ">
        <Logo />
        <Button asChild variant="link">
          <PageLink href="/projects">Projects</PageLink>
        </Button>
      </div>
    </nav>
  )
}

export default NavBar
