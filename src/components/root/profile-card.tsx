import Image from "next/image"
import { FC } from "react"
import profilePic from "@/assets/images/profile.png"

const MyAvatar: FC = () => {
  return (
    <Image
      src={profilePic}
      alt="Profile Picture"
      className="shrink-0 rounded-full size-26 border-3 border-secondary-500"
    />
  )
}

const ProfileCard: FC = () => {
  return (
    <div className={"opacity-0 appear-in-animation delay-150 flex flex-wrap gap-12 justify-center items-center"}>
      <div>
        <span className="text-4xl font-bold grow-0">Freddie Lust-Hed</span>
        <p>Digital Craftsman</p>
      </div>
      <MyAvatar />
    </div>
  )
}

export default ProfileCard
