import { CSSProperties, FC, ReactNode } from "react"
import SectionTitle from "./section-title"

export type SectionProps = {
  title: ReactNode
  children?: ReactNode
  style?: CSSProperties
  maxWidth?: "sm" | "md" | "lg" | "xl"
}
const Section: FC<SectionProps> = ({ title, children, style, maxWidth }) => {

  const mw = maxWidth ? "max-w-" + maxWidth : ""

  return (
    <div
      className={"appear-in-animation flex flex-col items-start " + mw + " gap-2"}
      style={style}
    >
      <SectionTitle>{title}</SectionTitle>
      {children}
    </div>
  )
}

export default Section
