import { AlignContentProps, AlignItemsProps } from "../types/tailwind/align"
import { FlexDirection } from "../types/tailwind/flex"
import { GapProps } from "../types/tailwind/gap"
import { GridFlowProps } from "../types/tailwind/grid"
import { HeightProps } from "../types/tailwind/height"
import { MarginProps } from "../types/tailwind/margin"
import { PaddingProps } from "../types/tailwind/padding"
import { SizeProps } from "../types/tailwind/size"
import { TailwindProps } from "../types/tailwind/tailwind"
import { WidthProps } from "../types/tailwind/width"

const generateAlignContent = (
  alignment: AlignContentProps | undefined,
  prefix: string | undefined = ""
) => {
  if (!alignment) return ""
  return `${prefix}content-${alignment}`
}

const generateJustifyItems = (
  alignItems: AlignItemsProps | undefined,
  prefix: string | undefined = ""
): string => {
  if (!alignItems) return ""
  return `${prefix}justify-items-${alignItems}`
}

const generateAlignItems = (
  alignItems: AlignItemsProps | undefined,
  prefix: string | undefined = ""
): string => {
  if (!alignItems) return ""
  return `${prefix}items-${alignItems}`
}

const generateGridColumns = (
  columns: number | undefined,
  prefix: string | undefined = ""
): string => {
  if (!columns) return ""
  return `${prefix}grid-cols-${columns}`
}

const generateGridFlow = (
  flow: GridFlowProps | undefined,
  prefix: string | undefined = ""
): string => {
  if (!flow) return ""
  switch (flow) {
    case "row":
      return `${prefix}grid-flow-row`
    case "column":
      return `${prefix}grid-flow-col`
    case "dense":
    case "row dense":
      return `${prefix}grid-flow-row-dense`
    case "column dense":
      return `${prefix}grid-flow-col-dense`
    default:
      return ""
  }
}

const generateGap = (
  gap: GapProps | undefined,
  prefix: string | undefined = ""
): string => {
  if (typeof gap === "number") {
    return `${prefix}gap-${gap}`
  }
  if (gap && typeof gap === "object") {
    const gapX = gap.x ? `${prefix}gap-x-${gap.x}` : ""
    const gapY = gap.y ? `${prefix}gap-y-${gap.y}` : ""
    return `${gapX} ${gapY}`.trim()
  }
  return ""
}

const generatePadding = (
  padding: PaddingProps | undefined,
  prefix: string | undefined = ""
): string => {
  if (typeof padding === "number") {
    return `${prefix}p-${padding}`
  }
  if (padding && typeof padding === "object") {
    const classes = []
    if (padding.top !== undefined) classes.push(`pt-${padding.top}`)
    if (padding.bottom !== undefined) classes.push(`pb-${padding.bottom}`)
    if (padding.start !== undefined) classes.push(`ps-${padding.start}`)
    if (padding.end !== undefined) classes.push(`pe-${padding.end}`)
    return prefix + classes.join(" ")
  }
  return ""
}

const generateMargin = (
  margin: MarginProps | undefined,
  prefix: string | undefined = ""
): string => {
  if (typeof margin === "number") {
    return `${prefix}m-${margin}`
  }
  if (margin && typeof margin === "object") {
    const classes = []
    if (margin.top !== undefined) classes.push(`mt-${margin.top}`)
    if (margin.bottom !== undefined) classes.push(`mb-${margin.bottom}`)
    if (margin.start !== undefined) classes.push(`ms-${margin.start}`)
    if (margin.end !== undefined) classes.push(`me-${margin.end}`)
    return prefix + classes.join(" ")
  }
  return ""
}

const generateFlexDirection = (
  direction: FlexDirection | undefined,
  prefix: string | undefined = ""
) => {
  if (!direction) return ""
  switch (direction) {
    case "column":
      return `${prefix}flex-col`
    case "column reverse":
      return `${prefix}flex-col-reverse`
    case "row reverse":
      return `${prefix}flex-row-reverse`
    case "row":
    default:
      return `${prefix}flex-row`
  }
}

const generateWidth = (width: WidthProps | undefined, prefix?: string) => {
  if (!width) return ""
  return `${prefix || ""}w-${width}`
}

const generateMinWidth = (
  minWidth: WidthProps | undefined,
  prefix: string | undefined = ""
) => (!minWidth ? "" : `${prefix}min-${generateWidth(minWidth)}`)

const generateMaxWidth = (
  maxWidth: WidthProps | undefined,
  prefix: string | undefined = ""
) => (!maxWidth ? "" : `${prefix}max-${generateWidth(maxWidth)}`)

const generateHeight = (height: HeightProps | undefined, prefix?: string) => {
  if (!height) return ""
  return `${prefix || ""}h-${height}`
}

const generateMinHeight = (
  minHeight: HeightProps | undefined,
  prefix: string | undefined = ""
) => (!minHeight ? "" : `${prefix}min-${generateHeight(minHeight)}`)

const generateMaxHeight = (
  maxHeight: HeightProps | undefined,
  prefix: string | undefined
) => (!maxHeight ? "" : `${prefix}max-${generateHeight(maxHeight)}`)

const generateSize = (size: SizeProps | undefined, prefix?: string) => {
  if (!size) return ""
  return `${prefix || ""}size-${size}`
}

const generateBackground = (
  bg: string | undefined,
  prefix: string | undefined
) => {
  if (!bg) return ""
  return !bg ? "" : `${prefix || ""}${bg}`
}

export const generateTailwindClasses = (...attributes: string[]) =>
  attributes.filter((c) => !!c).join(" ")

export const generateTailwind = (
  props: TailwindProps,
  prefix?: string
): string =>
  generateTailwindClasses(
    generateWidth(props.width, prefix),
    generateMinWidth(props.minWidth, prefix),
    generateMaxWidth(props.maxWidth, prefix),
    generateHeight(props.height, prefix),
    generateMinHeight(props.minHeight, prefix),
    generateMaxHeight(props.maxHeight, prefix),
    generateSize(props.size, prefix),
    generateBackground(props.bg, prefix),
    generateFlexDirection(props.direction, prefix),
    generateGridFlow(props.flow, prefix),
    generateGridColumns(props.columns, prefix),
    generateAlignItems(props.alignItems, prefix),
    generateAlignContent(props.alignContent, prefix),
    generateJustifyItems(props.justifyItems, prefix),
    generateGap(props.gap, prefix),
    generatePadding(props.padding, prefix),
    generateMargin(props.margin, prefix),
    props.xs ? generateTailwind(props.xs, "xs:") : "",
    props.sm ? generateTailwind(props.sm, "sm:") : "",
    props.md ? generateTailwind(props.md, "md:") : "",
    props.lg ? generateTailwind(props.lg, "lg:") : "",
    props.xl ? generateTailwind(props.xl, "xl:") : ""
  )
