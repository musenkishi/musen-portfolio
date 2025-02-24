import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/components/ui/dialog"
import { cn } from "@/components/lib/utils"
import Image, { StaticImageData } from "next/image"
import { FC } from "react"

type ZoomableImageProps = {
  src: StaticImageData
  alt: string
}

const ZoomableImage: FC<ZoomableImageProps> = ({ src, alt }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            "max-w-xs",
            "rounded-2xl",
            "duration-150",
            "ease-in-out",
            "hover:bg-secondary/75",
            "scale-100",
            "hover:scale-102"
          )}
        >
          <Image
            src={src}
            placeholder="blur"
            alt={alt}
            className={cn("rounded-2xl", "size-fit")}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-7xl border-0 bg-transparent p-0">
        <DialogTitle />
        <div className="relative h-[calc(100vh-220px)] w-full overflow-clip rounded-md bg-transparent shadow-md">
          <Image
            src={src}
            fill
            alt={alt || ""}
            className="h-full w-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ZoomableImage
