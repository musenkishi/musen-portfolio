"use client"

import { FC } from "react"
import "@github/relative-time-element"

type RelativeTimeProps = {
  date: Date
}

const RelativeTime: FC<RelativeTimeProps> = ({ date }) => {
  const isValidDate = (value: Date): boolean => {
    return !isNaN(value.getTime())
  }
  if (!isValidDate(date)) return <></>

  const readableDate = date.toLocaleString("en-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
  return (
    <relative-time
      tense={date < new Date() ? "past" : "future"}
      datetime={date.toISOString()}
      title={readableDate}
    >
      {readableDate}
    </relative-time>
  )
}

export default RelativeTime
