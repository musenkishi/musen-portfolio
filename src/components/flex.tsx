import { FC, ReactNode } from "react"
import { TailwindProps } from "../types/tailwind/tailwind"
import {
  generateTailwind,
  generateTailwindClasses,
} from "../util/tailwind-adapter"

type FlexProps = TailwindProps & {
  children?: ReactNode
}

//<div className="w-full lg:max-w-5xl flex flex-col content-center items-center gap-4">

const Flex: FC<FlexProps> = ({ children, ...props }) => {
  return (
    <div className={generateTailwindClasses("flex", generateTailwind(props))}>
      {children}
    </div>
  )
}

const example = () => {
  return (
    <Flex
      direction="column"
      width="full"
      lg={{ maxWidth: "5xl" }}
      alignContent="center"
      alignItems="center"
      gap={4}
    ></Flex>
  )
}

export default Flex
