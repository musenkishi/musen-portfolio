import screenshot1 from "@/assets/images/projects/backspace_1.png"
import screenshot2 from "@/assets/images/projects/backspace_2.png"
import screenshot3 from "@/assets/images/projects/backspace_3.png"
import screenshot4 from "@/assets/images/projects/backspace_4.png"
import { Project } from "@/src/types/projects/project"
import { ProjectID } from "../paths"

const projectBackspace: Project = {
  id: ProjectID.BACKSPACE,
  badge: "2023",
  title: "Backspace",
  metadata: {
    platform: "Android",
    stack: ["Android", "Kotlin", "Jetpack Compose"],
    link: [
      {
        href: "https://www.storelens.com/how-it-works",
        label: "Store Lens",
      },
    ],
  },
  screenshots: [screenshot1, screenshot4, screenshot2, screenshot3],
  description: [
    {
      title: "Backspace",
      markdown: `Backspace is a cutting-edge app developed for H&M staff and sub-brands, including Arket, Cos, Monki, and Weekday, to elevate customer service and streamline store operations. It empowers staff to scan items, process all types of payments, print receipts, handle returns and refunds, and assist customers in exploring the in-store catalogue, all from a handheld device. Expanding its capabilities, Backspace is set to become a stationary POS system replacing traditional cash registers and is also available as a self-checkout app on tablets, enabling customers to manage their own purchases independently, reducing wait times and improving store efficiency. By consolidating essential functions into one user-friendly platform, Backspace transforms the retail experience, allowing staff to focus on delivering personalized service and building meaningful customer relationships.

The application includes authentication, backend integration, and a robust permission based system.`,
    },
  ],
}

export default projectBackspace
