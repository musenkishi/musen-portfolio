import { FC } from "react"

const Footer: FC = () => {
  return (
    <footer className="text-sm opacity-40 text-center py-8">
      &copy; {new Date().getFullYear()} Freddie Lust-Hed. All Rights Reserved.
    </footer>
  )
}

export default Footer
