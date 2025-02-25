import screenshot1 from "@/assets/images/projects/tabscape_01.png"
import screenshot2 from "@/assets/images/projects/tabscape_02.png"
import { Project } from "@/src/types/projects/project"
import { ProjectID } from "../paths"

const projectTabscape: Project = {
  id: ProjectID.TABSCAPE,
  badge: "2022",
  title: "Tabscape",
  metadata: {
    platform: "Google Chrome, & Firefox",
    stack: ["Typescript", "Node.js", "React", "Material Design"],
    source: [
      {
        href: "https://github.com/musenkishi/nutab",
        label: "GitHub",
      },
    ],
    download: [
      {
        href: "https://chrome.google.com/webstore/detail/nutab/hgfkdmpjfkddgkbliejpkdldeahjkfgk",
        label: "Google Chrome",
      },
      {
        href: "https://addons.mozilla.org/en-US/firefox/addon/tabscape",
        label: "Firefox",
      },
    ],
    repository: {
      owner: "musenkishi",
      repository: "nutab",
    },
  },
  screenshots: [screenshot1, screenshot2],
  description: [
    {
      title: "Tabscape",
      markdown: `
Replaces your new tab page with a minimalistic clock and beautiful backgrounds. A new background will automatically fade in every 5 minutes and you can choose your own theme by typing in your own keywords. Tabscape will search through Unsplash's collection of photos and randomly pick a new background that fits your keywords.

Tabscape uses the popular website [Unsplash](https://unsplash.com/?utm_source=NuTab&utm_medium=referral) as its source of backgrounds.
      `,
    },
  ],
}

export default projectTabscape
