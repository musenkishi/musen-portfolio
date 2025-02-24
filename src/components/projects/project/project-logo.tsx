import Image, { StaticImageData } from "next/image"
import { FC, ReactNode } from "react"

type ProjectLogoProps = {
  logo: ReactNode | StaticImageData
}

const ProjectLogo: FC<ProjectLogoProps> = ({ logo }) => {
  const isStaticImageData = (data: unknown): data is StaticImageData =>
    typeof data === "object" && data !== null && "src" in data

  if (isStaticImageData(logo)) {
    return <Image src={logo} alt={"Project Logo"} />
  } else {
    return logo
  }
}

export default ProjectLogo
