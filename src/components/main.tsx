"use client"

import { FC, ReactNode, useEffect } from "react"

type MainProps = {
  children?: ReactNode
}

const Main: FC<MainProps> = ({ children }) => {
  useEffect(() => {
    const main = document.querySelector("main")
    main?.classList.remove("page-transition")
  }, [])

  return <main>{children}</main>
}

export default Main
