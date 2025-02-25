import { FC } from "react"
import Paragraph from "./paragraph"

type Bullet = {
  label: string
  description?: string
}

type BulletListProps = {
  list: Bullet[]
}

const BulletList: FC<BulletListProps> = ({ list }) => {
  return (
    <ul className="list-disc list-inside">
      {list.map((bullet, index) => {
        return (
          <li key={index}>
            <span className="font-bold">{bullet.label}</span>
            {bullet.description && <Paragraph>{bullet.description}</Paragraph>}
          </li>
        )
      })}
    </ul>
  )
}

export default BulletList
