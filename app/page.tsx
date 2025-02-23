import Greeting from "@/src/components/root/greeting"
import ProfileCard from "@/src/components/root/profile-card"
import RootFlex from "@/src/components/root/root-flex"
import RootSections from "@/src/components/root/root-sections"

export default function Home() {
  return (
    <RootFlex>
      <Greeting />
      <ProfileCard />
      <RootSections />
    </RootFlex>
  )
}
