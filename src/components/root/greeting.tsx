import { FC } from "react"

const Greeting: FC<{ className?: string }> = ({ className }) => {
  return (
    <span
      className={
        className +
        " text-center backdrop-blur-md mb-6 p-4 bg-white/20 dark:bg-white/10 rounded-xl"
      }
    >
      Hello, I&apos;m a full-stack developer in Sweden!
    </span>
  )
}

export default Greeting
