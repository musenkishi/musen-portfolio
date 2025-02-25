import screenshot1 from "@/assets/images/projects/watchdog_01.png"
import { Project } from "@/src/types/projects/project"
import { ProjectID } from "../paths"

const projectBahnhofWatchdog: Project = {
  id: ProjectID.BAHNHOF_WATCHDOG,
  badge: "2024",
  title: "Bahnhof Watchdog",
  metadata: {
    platform: "Docker, Node.js",
    stack: ["Typescript", "Node.js", "Bun", "Webhooks"],
    source: [
      {
        href: "https://github.com/musenkishi/bahnhof-watchdog",
        label: "GitHub",
      },
    ],
    repository: {
      owner: "musenkishi",
      repository: "bahnhof-watchdog",
    },
  },
  screenshots: [screenshot1],
  description: [
    {
      title: "Bahnhof Watchdog",
      markdown: `
Bahnhof Watchdog is a Node.js service that periodically checks for current and planned outages in your area from the ISP named Bahnhof. It also checks if your current subscription is priced higher than what is listed on their website. Notifications are sent via a Discord webhook or via email (Gmail only) if any issues are found.

- Monitors for current and planned outages based on your postal code.
- Compares your current subscription price with the listed price on Bahnhof's website.
- Sends notifications about outages or price discrepancies through a Discord webhook or email.

Bahnhof Watchdog ensures that you stay informed about outages and pricing changes, helping you to avoid service disruptions and potentially save money.
      `,
    },
  ],
}

export default projectBahnhofWatchdog
