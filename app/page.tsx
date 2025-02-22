import { Button } from "@/components/components/ui/button"
import Flex from "@/src/components/flex"
import Grid from "@/src/components/grid"
import { PageLink } from "@/src/components/link/page-link"
import SocialLink from "@/src/components/link/social-link"
import Paragraph from "@/src/components/paragraph"
import BioTimeline from "@/src/components/root/bio-timeline"
import Greeting from "@/src/components/root/greeting"
import ProfileCard from "@/src/components/root/profile-card"
import Section from "@/src/components/section/section"
import { RiBlueskyFill, RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri"

export default function Home() {
  return (
    <Grid alignItems="center" justifyItems="center">
      {/* <div className="w-full lg:max-w-5xl flex flex-col content-center items-center gap-4"> */}
      <Flex>
        <Greeting className="lg:mt-[-6rem] md:mt-[-5rem] sm:mt-[-5rem] " />
        <ProfileCard />
        <Grid flow="row" columns={{ md: 2, sm: 1 }} gap={4} padding={4}>
          <Section title="Me">
            <Paragraph>
              I&apos;m a full-stack developer based in Uppsala with a passion
              for building all things user oriented. I have a lot of experience
              launching products, from planning and designing all the way to
              solving real-life problems with code. When not online, you can
              find me riding down mountains both in winter and summer.
            </Paragraph>
            <Button asChild variant="secondary" className="self-center mt-2">
              <PageLink href="/projects">My portfolio</PageLink>
            </Button>
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
        </Grid>
      </Flex>
    </Grid>
  )
}
