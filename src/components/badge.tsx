import { FC, ReactNode } from "react"

export type BadgeVariant = "default" | "secondary" | "accent" | "outline"

type BadgeProps = {
  variant?: BadgeVariant
  className?: string
  style?: React.CSSProperties
  children: ReactNode
}

const Badge: FC<BadgeProps> = ({
  variant = "default",
  className,
  style,
  children,
}) => {
  const baseStyle =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

  const variantDefault =
    "border-transparent bg-primary text-primary-foreground hover:bg-primary/80"

  const variantSecondary =
    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"

  const variantAccent =
    "border-transparent bg-accent text-accent-foreground hover:bg-accent/80"

  const variantOutline = "text-foreground"

  const getVariant = (): string => {
    switch (variant) {
      default:
      case "default":
        return variantDefault
      case "secondary":
        return variantSecondary
      case "accent":
        return variantAccent
      case "outline":
        return variantOutline
    }
  }

  return (
    <span className={className + " " + baseStyle + " " + getVariant()} style={style}>
      {children}
    </span>
  )
}

export default Badge
