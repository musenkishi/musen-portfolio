import { FC, ReactNode } from "react"
import Badge from "../badge"

type TimelineItem = {
  date: string
  title: string
  description: ReactNode
}

type TimelineProps = {
  items: TimelineItem[]
}

const Timeline: FC<TimelineProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-2">
      {items.map((event, index) => (
        <div
          key={index}
          className="flex max-w-md items-center justify-center gap-4 text-primary-foreground"
        >
          <div className="w-14 flex flex-col items-center">
            <Badge variant="outline">{event.date}</Badge>
          </div>
          <div className="w-px h-full bg-primary/50" />
          <div className="flex flex-1 max-w-sm">
            <div className="flex flex-1 flex-col">
              <div className="text-base font-semibold">{event.title}</div>
              <div className="text-sm">{event.description}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
