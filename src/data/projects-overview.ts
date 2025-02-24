import thumbTaleTraveler from "@/assets/images/projects/tale-traveler-banner.png"
import thumbBackspace from "@/assets/images/projects/backspace_banner.png"
import thumbWally from "@/assets/images/projects/wally_banner.png"
import thumbSmsBox from "@/assets/images/projects/sms_banner.png"
import thumbBlockEngine from "@/assets/images/projects/beb_banner.png"
import thumbTabscape from "@/assets/images/projects/tabscape_banner.png"
import thumbWatchdog from "@/assets/images/projects/watchdog_banner.png"
import { ProjectItemData } from "../components/projects/projects-item"

type ProjectSection = {
  title: string
  projects: ProjectItemData[]
}

const taleTraveler: ProjectItemData = {
  thumbnail: thumbTaleTraveler,
  title: "Tale Traveler",
  path: "tale-traveler",
  description: "A virtual adventure app to motivate walking",
}
const backSpace: ProjectItemData = {
  thumbnail: thumbBackspace,
  title: "Backspace",
  path: "backspace",
  description: "Point of Sale and Admin apps for H&M and sub-brands",
}

const wally: ProjectItemData = {
  thumbnail: thumbWally,
  title: "Wally",
  path: "wally",
  description: "Wallpaper app for Android with wallbase used as source",
}

const smsBox: ProjectItemData = {
  thumbnail: thumbSmsBox,
  title: "SMS Box",
  path: "sms-box",
  description: "Real-time SMS management and customer engagement tool",
}

const blockEngineBuilder: ProjectItemData = {
  thumbnail: thumbBlockEngine,
  title: "Block Engine Builder",
  path: "block-engine-builder",
  description:
    "Modular IDE for creating and configuring phone service workflows",
}

const tabScape: ProjectItemData = {
  thumbnail: thumbTabscape,
  title: "Tabscape",
  path: "tabscape",
  description: "Web extension to show random backgrounds and clock in new tabs",
}

const bahnhofWatchdog: ProjectItemData = {
  thumbnail: thumbWatchdog,
  title: "Bahnhof Watchdog",
  path: "bahnhof-watchdog",
  description:
    "Node.js service that notifies you of outages and price changes from your ISP",
}

export const projectsItems: ProjectSection[] = [
  { title: "Android", projects: [taleTraveler, backSpace, wally] },
  {
    title: "Web",
    projects: [smsBox, blockEngineBuilder, tabScape, bahnhofWatchdog],
  },
]
