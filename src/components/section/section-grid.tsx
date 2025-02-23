import { FC, ReactNode } from "react"
import { cn } from "@/components/lib/utils"

type GridProps = {
  children?: ReactNode
}

const gridClasses = cn(
  "grid",
  "grid-flow-row",
  "md:grid-cols-2",
  "sm:grid-cols-1",
  "gap-8",
  "p-8"
)

const SectionGrid: FC<GridProps> = ({ children }) => {
  return <div className={gridClasses}>{children}</div>
}

export default SectionGrid
