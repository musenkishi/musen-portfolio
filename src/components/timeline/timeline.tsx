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
    <div className="relative flex flex-col items-start gap-4">
      {/* <div className="absolute inset-0 flex items-center">
        <div className="h-full w-px bg-gray-200 dark:bg-gray-700" />
      </div> */}
      {items.map((event, index) => (
        <div
          key={index}
          className="relative flex items-center justify-start gap-4 text-primary-500 dark:text-primary-300"
        >
          <Badge variant="outline">{event.date}</Badge>
          {/* <div className="w-px h-10 bg-primary-500/50 dark:bg-primary-200/50" /> */}
          <div className="flex-1 flex-col w-md">
            <div className="text-base font-semibold">{event.title}</div>
            <div className="text-sm">{event.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
