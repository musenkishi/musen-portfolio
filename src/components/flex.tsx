import { FC, ReactNode } from "react"
import {
  generateAlignItems,
  generateGap,
  generateTailwindClasses,
} from "../util/tailwind-adapter"

type FlexProps = {
  children?: ReactNode
}

//<div className="w-full lg:max-w-5xl flex flex-col content-center items-center gap-4">

const Flex: FC<FlexProps> = ({ children }) => {
  return (
    <div
      className={generateTailwindClasses(
        "flex",
        "flex-col",
        "w-full",
        "lg:max-w-5xl",
        "content-center",
        generateAlignItems("center"),
        generateGap(4)
      )}
    >
      {children}
    </div>
  )
}

export default Flex
