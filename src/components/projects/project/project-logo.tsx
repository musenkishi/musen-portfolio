import { ProjectID } from "@/src/data/paths"
import { FC } from "react"
import RiveWelcomeView from "@/src/components/rive/RiveWelcomeView"
import logoBackspace from "@/assets/images/projects/backspace_icon.svg"
import logoWally from "@/assets/images/projects/wally_icon.png"
import logoSmsBox from "@/assets/images/projects/sms_icon.svg"
import logoBlockEngineBuilder from "@/assets/images/projects/beb_icon.svg"
import logoTabscape from "@/assets/images/projects/tabscape_icon.svg"
import logoBahnhofWatchdog from "@/assets/images/projects/watchdog.svg"
import Image, { StaticImageData } from "next/image"

type ProjectLogoRendererProps = {
  id: ProjectID
}

const ProjectLogo: FC<ProjectLogoRendererProps> = ({ id }) => {
  const LogoImage: FC<{ src: StaticImageData; alt: string }> = ({
    src,
    alt,
  }) => (
    <Image
      className="size-42"
      src={src}
      alt={alt}
    />
  )

  const renderLogo = () => {
    switch (id) {
      case ProjectID.TALE_TRAVELER:
        return <RiveWelcomeView />
      case ProjectID.BACKSPACE:
        return <LogoImage src={logoBackspace} alt="Backspace logo" />
      case ProjectID.WALLY:
        return <LogoImage src={logoWally} alt="Wally logo" />
      case ProjectID.SMS_BOX:
        return <LogoImage src={logoSmsBox} alt="SMS Box logo" />
      case ProjectID.BLOCK_ENGINE_BUILDER:
        return (
          <LogoImage
            src={logoBlockEngineBuilder}
            alt="Block Engine Builder logo"
          />
        )
      case ProjectID.TABSCAPE:
        return <LogoImage src={logoTabscape} alt="Tabscape logo" />
      case ProjectID.BAHNHOF_WATCHDOG:
        return (
          <LogoImage src={logoBahnhofWatchdog} alt="Bahnhof Watchdog logo" />
        )
      default:
        return <p>No logo found for this project.</p>
    }
  }

  return (
    <div className="w-full h-52 flex items-center justify-center">
      {renderLogo()}{" "}
    </div>
  )
}

export default ProjectLogo
