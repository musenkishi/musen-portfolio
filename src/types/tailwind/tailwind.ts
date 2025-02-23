import { AlignContentProps, AlignItemsProps } from "./align"
import { Breakpoints } from "./breakpoint"
import { FlexDirection } from "./flex"
import { GapProps } from "./gap"
import { GridFlowProps } from "./grid"
import { HeightProps } from "./height"
import { MarginProps } from "./margin"
import { PaddingProps } from "./padding"
import { SizeProps } from "./size"
import { WidthProps } from "./width"

export type TailwindProps = Breakpoints & {
  width?: WidthProps
  minWidth?: WidthProps
  maxWidth?: WidthProps
  height?: HeightProps
  minHeight?: HeightProps
  maxHeight?: HeightProps
  size?: SizeProps
  bg?: string,
  columns?: number
  flow?: GridFlowProps
  gap?: GapProps
  padding?: PaddingProps
  margin?: MarginProps
  alignContent?: AlignContentProps
  alignItems?: AlignItemsProps
  justifyItems?: AlignItemsProps
  direction?: FlexDirection
}
