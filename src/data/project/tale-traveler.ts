import screenshot1 from "@/assets/images/projects/tale-traveler-screenshot-1.png"
import screenshot2 from "@/assets/images/projects/tale-traveler-screenshot-2.png"
import { Project } from "@/src/types/projects/project"
import { ProjectID } from "../paths"
import '@/src/util/envConfig'

const projectTaleTraveler: Project = {
  id: ProjectID.TALE_TRAVELER,
  badge: "2024 | Open alpha",
  title: "Tale Traveler",
  metadata: {
    platform: "Android",
    stack: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "Rive",
      "Typescript",
      "Node.js",
      "Bun",
    ],
    source: [
      {
        href: "https://github.com/musenkishi/tale-traveler",
        label: "GitHub",
        disabled: true,
        tooltip: "Restricted repository. Contact for access.",
      },
    ],
    download: [
      {
        href: "https://play.google.com/store/apps/details?id=com.musen.taletraveler",
        label: "Download",
      },
    ],
    repository: {
      owner: "musenkishi",
      repository: "tale-traveler",
      token: process.env.GITHUB_ACCESS_TOKEN,
    },
  },
  screenshots: [screenshot1, screenshot2],
  description: [
    {
      title: "Tale Traveler: Walk Your Way Through Stories",
      markdown: `Tale Traveler is an innovative mobile app designed to inspire users to
          walk by transforming every step into a captivating virtual adventure.
          Marrying fitness with storytelling, Tale Traveler empowers you to
          explore new tales as you walk, offering a unique, non-competitive
          experience.`,
    },
    {
      title: "Features",
      markdown: ` 
- **Step-Driven Adventures**
  > Tale Traveler collects the number of steps taken by the user starting from the date you agree to step retrieval in the app.
- **Seamless Integration**
  > Harnesses Health Connect to track your step data accurately, making every step count towards your journey.
- **Milestone Notifications**
  > Stay informed with milestone notifications that update your progress without needing to constantly check the app.
- **Explore at Your Own Pace**
  > With no need to compete with others, set your own goals and enjoy the journey, making fitness a personal story.
      `,
    },
    {
      title: "Why Tale Traveler?",
      markdown: `In a world often dominated by competition, Tale Traveler offers a refreshing approach to wellness by focusing on personal achievement and storytelling. It's about the joy of exploration and the magic of turning everyday steps into extraordinary adventures. Whether you're a casual walker or a passionate explorer, Tale Traveler enriches your walking experience with imagination and wonder.`,
    },
  ],
}

export default projectTaleTraveler
