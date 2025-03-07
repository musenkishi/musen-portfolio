import { FC } from "react"

const Greeting: FC = () => {
  return (
    <span
      className={
        "appear-in-animation text-center backdrop-blur-md mb-6 p-4 bg-white/20 dark:bg-white/10 rounded-xl "
      }
    >
      Hello, I&apos;m a frontend/app developer in Sweden!
    </span>
  )
}

export default Greeting
