import {
  Tooltip as BaseTooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/components/ui/tooltip"
import { FC, ReactNode } from "react"
import { ColorVariant } from "@/src/types/tailwind/variant"

type ToolTipProps = {
  toolTip: ReactNode
  side?: "top" | "right" | "bottom" | "left"
  variant?: ColorVariant
  children: ReactNode
}

const Tooltip: FC<ToolTipProps> = ({
  toolTip,
  side = "top",
  variant = "primary",
  children,
}) => {
  return (
    <BaseTooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side} variant={variant}>
        {toolTip}
      </TooltipContent>
    </BaseTooltip>
  )
}

export default Tooltip
