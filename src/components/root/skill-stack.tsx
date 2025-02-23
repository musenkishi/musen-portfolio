import { FC } from "react"
import Badge, { BadgeVariant } from "../badge"

type SkillStackProps = {
  skills: string[]
}

const SkillStack: FC<SkillStackProps> = ({ skills }) => {
  const badgeVariants: BadgeVariant[] = ["default", "secondary", "accent"]
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {skills.map((skill, index) => {
        const hash = Array.from(skill).reduce(
          (total, char) => total + char.charCodeAt(0),
          0
        )
        const variant = badgeVariants[hash % badgeVariants.length]
        return (
          <Badge
            key={skill}
            variant={variant}
            className={"appear-in-animation"}
            style={{
              opacity: 0,
              animationDelay: index * 50 + "ms",
            }}
          >
            {skill}
          </Badge>
        )
      })}
    </div>
  )
}

export default SkillStack
