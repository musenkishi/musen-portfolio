import { cn } from "@/components/lib/utils"
import { StaticImageData } from "next/image"
import { FC } from "react"
import ZoomableImage from "../../zoomable-image"

type ScreenshotsMasonryProps = {
  images: StaticImageData[]
}

const ScreenshotsMasonry: FC<ScreenshotsMasonryProps> = ({ images }) => {
  return (
    <div
      className={cn(
        "w-full",
        "flex",
        "flex-row",
        "flex-wrap",
        "items-center",
        "content-center",
        "justify-center",
        "gap-4"
      )}
    >
      {images.map((image, index) => {
        return (
          <ZoomableImage
            key={index}
            src={image}
            alt={`screenshot ${index + 1}`}
          />
        )
      })}
    </div>
  )
}

export default ScreenshotsMasonry
