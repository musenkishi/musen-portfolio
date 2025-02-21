import Badge from "@/src/components/badge"
import SocialLink from "@/src/components/link/social-link"
import Paragraph from "@/src/components/paragraph"
import BioTimeline from "@/src/components/root/bio-timeline"
import Greeting from "@/src/components/root/greeting"
import ProfileCard from "@/src/components/root/profile-card"
import Section from "@/src/components/section/section"
import { RiBlueskyFill, RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri"

export default function Home() {
  return (
    <div className="grid items-center justify-items-center">
      <div className="w-full lg:max-w-5xl flex flex-col content-center items-center gap-4">
        <Greeting className="lg:mt-[-6rem] md:mt-[-5rem] sm:mt-[-5rem] " />
        <ProfileCard />
        <div className="grid grid-flow-row lg:grid-cols-2 md:grid-cols-1 gap-x-16 gap-y-4">
          <Section title="Me">
            <div className="flex gap-2">
              <Badge variant="default">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="accent">Accent</Badge>
            </div>
            <Paragraph>
              I&apos;m a full-stack developer based in Uppsala with a passion
              for building all things user oriented. I have a lot of experience
              launching products, from planning and designing all the way to
              solving real-life problems with code. When not online, you can
              find me riding down mountains both in winter and summer.
            </Paragraph>
          </Section>
          <Section title="Timeline">
            <BioTimeline />
          </Section>
          <Section title="I ❤️">
            <Paragraph>
              Art, Music, Mountains, Guitar, Video Games, Snowboard, Electric
              Mountainboard, Space, Baking
            </Paragraph>
          </Section>
          <Section title="On the web">
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
          </Section>
        </div>
      </div>
    </div>
  )
}
