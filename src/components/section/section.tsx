import { FC, ReactNode } from "react"
import SectionTitle from "./title"

type SectionProps = {
  title: ReactNode
  children: ReactNode
}
//<div className="grid grid-flow-row lg:grid-cols-2 md:grid-cols-1 gap-16">
const Section: FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-start min-w-sm max-w-md gap-2">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  )
}

export default Section
