import screenshot1 from "@/assets/images/projects/sms_01.png"
import { Project } from "@/src/types/projects/project"
import { ProjectID } from "../paths"

const projectSMSBox: Project = {
  id: ProjectID.SMS_BOX,
  badge: "2022",
  title: "SMS Box",
  metadata: {
    platform: "Google Chrome, Edge, & Firefox",
    stack: ["Typescript", "Node.js", "React"],
    link: [
      {
        href: "https://sms.viatel.se/",
        label: "Viatel SMS Box",
      },
    ],
  },
  screenshots: [screenshot1],
  description: [
    {
      title: "SMS Box",
      markdown: `
Viatel SMS Box is a real-time messaging management product that enables businesses to interact with their customers promptly and efficiently. It offers a sophisticated inbox interface for sorting, viewing, and replying to SMS messages as they arrive. Key features include real-time notifications of new messages, automatic replies for various scenarios, message marking for easy prioritization, a dedicated junk folder to filter out spam, and the option to forward messages directly to email. This real-time functionality ensures that businesses can maintain immediate and organized communication with their customers through SMS.

The application includes authentication, backend integration, and a robust permission based system.      
      `,
    },
  ],
}

export default projectSMSBox
