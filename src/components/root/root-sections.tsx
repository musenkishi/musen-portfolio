import { FC } from "react"
import SectionGrid from "../section/section-grid"
import Section, { SectionProps } from "../section/section"
import { Button } from "@/components/components/ui/button"
import { TiChevronRight } from "react-icons/ti"
import { PageLink } from "../link/page-link"
import Paragraph from "../paragraph"
import SkillStack from "./skill-stack"
import BioTimeline from "./bio-timeline"
import { RiGithubFill, RiLinkedinBoxFill, RiBlueskyFill } from "react-icons/ri"
import SocialLink from "../link/social-link"

const RootSections: FC = () => {
  const sections: SectionProps[] = [
    {
      title: "Me",
      children: (
        <>
          <Paragraph>
            I&apos;m a developer based in Uppsala with a passion for building
            all things user oriented. I have a lot of experience launching
            products, from planning and designing all the way to solving
            real-life problems with code. When not online, you can find me
            riding down mountains both in winter and summer.
          </Paragraph>
          <Button asChild variant="secondary" className="self-center mt-2">
            <PageLink href="/projects">
              My portfolio <TiChevronRight />
            </PageLink>
          </Button>
        </>
      ),
    },
    {
      title: "Skills",
      children: (
        <SkillStack
          skills={[
            "Kotlin",
            "Android",
            "Typescript",
            "React",
            "Docker",
            "Scalable Architecture",
            "Multiplatform",
            "Backend",
            "Animation",
            "Agile",
            "CI/CD",
            "DX",
            "UI",
            "UX",
          ]}
        />
      ),
    },
    { title: "Timeline", children: <BioTimeline /> },
    {
      title: "On the web",
      children: (
        <>
          <SocialLink
            href="https://github.com/musenkishi"
            icon={<RiGithubFill />}
            label="@musenkishi"
          />
          <SocialLink
            href="https://www.linkedin.com/in/freddielusthed"
            icon={<RiLinkedinBoxFill />}
            label="@freddielusthed"
          />
          <SocialLink
            href="https://bsky.app/profile/musen.dev"
            icon={<RiBlueskyFill />}
            label="@musen.dev"
          />
        </>
      ),
    },
  ]
  return (
    <SectionGrid>
      {sections.map((section, index) => {
        return (
          <Section
            key={"section-" + index}
            title={section.title}
            style={{
              opacity: 0,
              animationDelay: index * 100 + "ms",
              animationDuration: ".5s",
            }}
          >
            {section.children}
          </Section>
        )
      })}
    </SectionGrid>
  )
}

export default RootSections
