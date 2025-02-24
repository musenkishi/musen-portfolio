import { MetaData } from "@/src/types/projects/project"
import { FC } from "react"
import Badge from "../../badge"

type MetadataProps = {
  metadata: MetaData[]
}

const Metadata: FC<MetadataProps> = ({ metadata }) => {
  return (
    <div className="flex flex-col gap-2">
      {metadata.map((meta, index) => {
        return (
          <div key={index} className="flex flex-row gap-4 items-baseline">
            <Badge className="shrink-0" isTag>
              {meta.label}
            </Badge>
            {meta.value}
          </div>
        )
      })}
    </div>
  )
}

export default Metadata
