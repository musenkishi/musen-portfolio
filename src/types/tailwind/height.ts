export type HeightProps =
  | `${number}`
  | `${number}/${number}`
  | "auto"
  | "px"
  | "full"
  | "screen"
  | "dvh"
  | "dvw"
  | "lvh"
  | "lvw"
  | "svh"
  | "svw"
  | "min"
  | "max"
  | "fit"
  | `(${string})`
  | `[${string}]`
