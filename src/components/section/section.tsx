import { CSSProperties, FC, ReactNode } from "react"
import SectionTitle from "./section-title"

export type SectionProps = {
  title: ReactNode
  children?: ReactNode
  style?: CSSProperties
}
const Section: FC<SectionProps> = ({ title, children, style }) => {
  return (
    <div className="appear-in-animation flex flex-col items-start max-w-md gap-2" style={style}>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  )
}

export default Section
