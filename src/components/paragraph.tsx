import { FC, ReactNode } from "react"

type ParagraphProps = {
  children: ReactNode
}

const Paragraph: FC<ParagraphProps> = ({ children }) => {
  return <p className="text-justify">{children}</p>
}

export default Paragraph
