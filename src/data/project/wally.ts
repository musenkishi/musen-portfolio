import screenshot1 from "@/assets/images/projects/wally_01.png"
import screenshot2 from "@/assets/images/projects/wally_02.png"
import screenshot3 from "@/assets/images/projects/wally_03.png"
import screenshot4 from "@/assets/images/projects/wally_04.png"
import { Project } from "@/src/types/projects/project"
import { ProjectID } from "../paths"

const projectWally: Project = {
  id: ProjectID.WALLY,
  badge: "2014-2016",
  title: "Wally",
  metadata: {
    platform: "Android",
    stack: ["Android", "Java", "Material Design"],
    source: [
      {
        href: "https://github.com/musenkishi/wally",
        label: "GitHub",
      },
    ],
    download: [
      {
        href: "https://play.google.com/store/apps/details?id=com.musenkishi.wally",
        label: "v1.6.1",
        disabled: true,
        tooltip: "No longer maintained. Try at your own risk.",
      },
    ],
    repository: {
      owner: "musenkishi",
      repository: "wally",
    },
  },
  screenshots: [screenshot1, screenshot4, screenshot2, screenshot3],
  description: [
    {
      title: "Wally",
      markdown: `
Utilizing Google's Material Design principles, Wally is meant to give a perfectly fluid user flow with subtle animations and bright colors. Using wallhaven.cc as the source of wallpapers, you have a really neat set of tools to find just what you're looking for.

- Browse and save/set wallpapers
- Filter wallpapers by categories, resolution, and/or aspect ratio
- Search by text
- Search by tags
- Browse random wallpapers
- Browse your saved wallpapers     
    
Wally uses the popular website [Wallhaven](http://wallhaven.cc/) as its source of wallpapers.
      `,
    },
    {
      title: "Media coverage",
      markdown: `
- **PC för Alla**
> [Wally: Ännu fler sköna bakgrunder](https://pcforalla.idg.se/2.1054/1.584612/wally--annu-fler-skona-bakgrunder)
- **Android Police**
> [10 Beautiful, Cool, And Original Wallpaper Apps To Dress Up Your Android Device](https://www.androidpolice.com/2015/10/31/10-beautiful-cool-and-original-wallpaper-apps-to-dress-up-your-android-device/#Wally)
      `,
    },
  ],
}

export default projectWally
