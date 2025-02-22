import { FC, ReactNode } from "react"
import {
  AlignItemsProps,
  FlowProps,
  GapProps,
  PaddingProps,
  SizeProps,
} from "../types/tailwind-types"
import {
  generateTailwindClasses,
  generateAlignItems,
  generateGap,
  generateGridColumns,
  generateGridFlow,
  generatePadding,
  generateJustifyItems,
} from "../util/tailwind-adapter"

type GridProps = {
  children?: ReactNode
  columns?: SizeProps
  flow?: FlowProps
  gap?: GapProps
  padding?: PaddingProps
  alignItems?: AlignItemsProps
  justifyItems?: AlignItemsProps
}

const Grid: FC<GridProps> = ({
  children,
  columns,
  flow,
  gap,
  padding,
  alignItems,
  justifyItems,
}) => {
  return (
    <div
      className={generateTailwindClasses(
        "grid",
        generateGridFlow(flow),
        generateGridColumns(columns),
        generateAlignItems(alignItems),
        generateJustifyItems(justifyItems),
        generateGap(gap),
        generatePadding(padding)
      )}
    >
      {children}
    </div>
  )
}

export default Grid
