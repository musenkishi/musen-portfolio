"use client"

import {
  Alignment,
  Fit,
  Layout,
  useRive,
  useStateMachineInput,
} from "@rive-app/react-canvas-lite"
import { FC, useEffect } from "react"

const RiveWelcomeView: FC = () => {
  const { rive, RiveComponent } = useRive({
    src: "/assets/onboarding.riv",
    stateMachines: "stateMachine",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
    artboard: "Welcome",
    autoplay: true,
  })

  const stateIsDay = useStateMachineInput(rive, "stateMachine", "isDay")

  useEffect(() => {
    if (!stateIsDay) return

    const darkMode = window.matchMedia("(prefers-color-scheme: dark)")
    stateIsDay.value = !darkMode.matches

    const handler = (event: MediaQueryListEvent) => {
      stateIsDay.value = !event.matches
    }

    darkMode.addEventListener("change", handler)
    return () => darkMode.removeEventListener("change", handler)
  }, [stateIsDay])

  return <RiveComponent />
}

export default RiveWelcomeView
