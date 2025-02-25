import screenshot1 from "@/assets/images/projects/beb_01.png"
import { Project } from "@/src/types/projects/project"
import { ProjectID } from "../paths"

const projectBlockEngineBuilder: Project = {
  id: ProjectID.BLOCK_ENGINE_BUILDER,
  badge: "2023",
  title: "Block Engine Builder",
  metadata: {
    platform: "Google Chrome, Edge, & Firefox",
    stack: ["Typescript", "Node.js", "React"],
    link: [
      {
        href: "https://voice.viatel.se/",
        label: "Viatel Block Engine Builder",
      },
    ],
  },
  screenshots: [screenshot1],
  description: [
    {
      title: "Block Engine Builder",
      markdown: `
Viatel Block Engine Builder is a modular node development environment for creating new phone services and configure well-tested functional blocks to create advanced user flows. To realize a service, many blocks and detailed configurations are required, including blocks for service start and end, subroutines, database queries, prompts, file handling, variable management, logical operations, and more. Each block has one entry and one or several exits, with the capability to handle local variables within subroutines.

The environment includes authentication, backend integration, and a robust error validation system.
      `,
    },
  ],
}

export default projectBlockEngineBuilder
