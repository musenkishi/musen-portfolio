import Image from "next/image"
import { FC } from "react"
import profilePic from "@/assets/images/profile.png"

type ProfileCardProps = {
  className?: string
}

const MyAvatar: FC = () => {
  return (
    <Image
      src={profilePic}
      alt="Profile Picture"
      className="rounded-full size-26 border-3 border-secondary-300"
    />
  )
}

const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  return (
    <div className={className + " flex gap-12 justify-center items-center"}>
      <div>
        <span className="text-4xl font-bold">Freddie Lust-Hed</span>
        <p>Digital Craftsman ( Developer / Designer ) </p>
      </div>
      <MyAvatar />
    </div>
  )
}

export default ProfileCard
