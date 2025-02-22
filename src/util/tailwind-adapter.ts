import {
  AlignItemsProps,
  FlowProps,
  GapProps,
  PaddingProps,
  SizeProps,
} from "../types/tailwind-types"

export const generateJustifyItems = (
  alignItems: AlignItemsProps | undefined
): string => {
  if (!alignItems) return ""
  return `justify-items-${alignItems}`
}

export const generateAlignItems = (
  alignItems: AlignItemsProps | undefined
): string => {
  if (!alignItems) return ""
  return `items-${alignItems}`
}

export const generateGridColumns = (columns: SizeProps | undefined): string => {
  if (typeof columns === "number") {
    return `grid-cols-${columns}`
  }
  if (columns && typeof columns === "object") {
    const classes = []
    if (columns.xs) classes.push(`xs:grid-cols-${columns.xs}`)
    if (columns.sm) classes.push(`sm:grid-cols-${columns.sm}`)
    if (columns.md) classes.push(`md:grid-cols-${columns.md}`)
    if (columns.lg) classes.push(`lg:grid-cols-${columns.lg}`)
    if (columns.xl) classes.push(`xl:grid-cols-${columns.xl}`)
    return classes.join(" ")
  }
  return ""
}

export const generateGridFlow = (flow: FlowProps | undefined): string => {
  if (!flow) return ""
  if (flow === "row") return "grid-flow-row"
  if (flow === "column") return "grid-flow-col"
  if (flow === "dense") return "grid-flow-row-dense"
  if (flow === "row dense") return "grid-flow-row-dense"
  if (flow === "column dense") return "grid-flow-col-dense"
  return ""
}

export const generateGap = (gap: GapProps | undefined): string => {
  if (typeof gap === "number") {
    return `gap-${gap}`
  }
  if (gap && typeof gap === "object") {
    const gapX = gap.x ? `gap-x-${gap.x}` : ""
    const gapY = gap.y ? `gap-y-${gap.y}` : ""
    return `${gapX} ${gapY}`.trim()
  }
  return ""
}

export const generatePadding = (padding: PaddingProps | undefined): string => {
  if (typeof padding === "number") {
    return `p-${padding}`
  }
  if (padding && typeof padding === "object") {
    const classes = []
    if (padding.top !== undefined) classes.push(`pt-${padding.top}`)
    if (padding.bottom !== undefined) classes.push(`pb-${padding.bottom}`)
    if (padding.start !== undefined) classes.push(`ps-${padding.start}`)
    if (padding.end !== undefined) classes.push(`pe-${padding.end}`)
    return classes.join(" ")
  }
  return ""
}

export const generateTailwindClasses = (...attributes: string[]) =>
  attributes.join(" ")
