import { FC, ReactNode } from "react"
import SectionTitle from "./title"

type SectionProps = {
  title: ReactNode
  children: ReactNode
}
const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-start max-w-md gap-2">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  )
}

export default Section
