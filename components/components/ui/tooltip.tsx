import { cn } from "@/components/lib/utils"
import { ColorVariant } from "@/src/types/tailwind/variant"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import * as React from "react"

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 4,
  variant = "primary",
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> & {
  variant?: ColorVariant
}) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          "bg-" + variant,
          "text-" + variant + "-foreground",
          "animate-in",
          "fade-in-0",
          "zoom-in-95",
          "data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0",
          "data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          "z-50",
          "max-w-sm",
          "rounded-md",
          "px-3",
          "ms-2",
          "py-1.5",
          "text-xs",
          className
        )}
        {...props}
      >
        {children}
        <div
          className={cn(
            "bg-" + variant,
            "-mb-2",
            "z-50",
            "size-2.5",
            "translate-y-[calc(-50%_-_0.4rem)]",
            "-translate-x-4",
            "rotate-45",
            "rounded-[2px]"
          )}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
