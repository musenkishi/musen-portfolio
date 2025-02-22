import { FC, ReactNode } from "react"
import { TailwindProps } from "../types/tailwind/tailwind"
import {
  generateTailwind,
  generateTailwindClasses,
} from "../util/tailwind-adapter"

type GridProps = TailwindProps & {
  children?: ReactNode
}

const Grid: FC<GridProps> = ({ children, ...props }) => {
  return (
    <div className={generateTailwindClasses("grid", generateTailwind(props))}>
      {children}
    </div>
  )
}

export default Grid
