import { FC, ReactNode } from "react"
import { cn } from "@/components/lib/utils"

type FlexProps = {
  children?: ReactNode
}

const rootFlexClasses = cn(
  "w-full",
  "flex",
  "flex-col",
  "content-center",
  "items-center",
  "gap-4",
  "p-2"
)

const RootFlex: FC<FlexProps> = ({ children }) => {
  return <div className={rootFlexClasses}>{children}</div>
}

export default RootFlex
