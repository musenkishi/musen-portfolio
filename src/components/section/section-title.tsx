import { FC, ReactNode } from "react"

type SectionTitleProps = {
  children: ReactNode
}

const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return (
    <h3 className="underline text-xl font-bold underline-offset-8 decoration-secondary decoration-[0.25rem] mt-3 mb-4">
      {children}
    </h3>
  )
}

export default SectionTitle
