import SkillStack from "@/src/components/root/skill-stack"
import { Project } from "@/src/types/projects/project"
import screenshot1 from "@/assets/images/projects/tale-traveler-screenshot-1.png"
import screenshot2 from "@/assets/images/projects/tale-traveler-screenshot-2.png"

const taleTraveler: Project = {
  badge: "2024 | Open alpha",
  title: "Tale Traveler",
  icon: <>Put some icon here</>,
  metadata: [
    {
      label: "Platform",
      value: "Android",
    },
    {
      label: "Stack",
      value: (
        <SkillStack
          skills={[
            "Android",
            "Kotlin",
            "Jetpack Compose",
            "Rive",
            "Typescript",
            "Bun",
          ]}
        />
      ),
    },
    { label: "Source", value: <span>Put link here</span> },
  ],
  description: <>Just some random text for desc</>,
  screenshots: [screenshot1, screenshot2],
}

export default taleTraveler
