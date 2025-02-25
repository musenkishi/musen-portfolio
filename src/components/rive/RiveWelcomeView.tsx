"use client"

import {
  useRive,
  Layout,
  Fit,
  Alignment,
  useStateMachineInput,
} from "@rive-app/react-canvas-lite"
import { FC, useEffect, useState } from "react"

const RiveWelcomeView: FC = () => {
  const [isDay, setIsDay] = useState<boolean>()

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light"
        console.log(colorScheme) // "dark" or "light"
        setIsDay(colorScheme == "light")
      })
  }, [])

  const { rive, RiveComponent } = useRive({
    src: "/assets/onboarding.riv",
    stateMachines: "stateMachine",
    layout: new Layout({
      fit: Fit.Contain, // Change to: rive.Fit.Contain, or Cover
      alignment: Alignment.Center,
    }),
    artboard: "Welcome",
    autoplay: true,
  })

  const stateIsDay = useStateMachineInput(rive, "stateMachine", "isDay", isDay)

  useEffect(() => {
    if (stateIsDay == null || isDay == undefined) {
      console.error("state machine input is null")
    } else {
      stateIsDay.value = isDay
    }
  }, [isDay, stateIsDay])

  return <RiveComponent />
}

export default RiveWelcomeView
