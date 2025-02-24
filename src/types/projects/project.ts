import { StaticImageData } from "next/image"
import { ReactNode } from "react"

export type MetaData = {
    label: string,
    value: string | ReactNode
}

export type Project = {
    badge: string
    title: string
    icon: StaticImageData | ReactNode
    metadata: MetaData[]
    description: ReactNode
    screenshots: StaticImageData[]
}