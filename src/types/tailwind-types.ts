export type SizeProps =
  | number
  | {
      xs?: number
      sm?: number
      md?: number
      lg?: number
      xl?: number
    }

export type GapProps =
  | number
  | {
      x?: number
      y?: number
    }

export type FlowProps =
  | "row"
  | "column"
  | "dense"
  | "row dense"
  | "column dense"

export type PaddingProps =
  | number
  | {
      top?: number
      bottom?: number
      start?: number
      end?: number
    }

export type AlignItemsProps =
  | "start"
  | "center"
  | "end"
  | "baseline"
  | "stretch"
