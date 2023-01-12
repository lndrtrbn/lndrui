import React, { useEffect } from "react"
import { DecoratorFn } from "@storybook/react"
import { twMerge } from "tailwind-merge"

import { ThemeProvider, useThemeContext } from "../src/contexts"

import "../src/styles/index.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
}

export const globalTypes = {
  theme: {
    name: "Theme",
    defaultValue: "light",
    toolbar: {
      title: "Theme",
      icon: "circlehollow",
      items: [
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
      ],
    },
  },
}

const WithTheme: DecoratorFn = (Story, context) => {
  function WithThemeChild() {
    const { theme } = useThemeContext()

    useEffect(() => {
      theme.set(context.globals.theme)
    }, [context.globals.theme])

    return (
      <div
        className={twMerge(
          "story-container",
          theme.get === "light" ? "bg-neutral-l90" : "bg-mb-d80"
        )}
      >
        <Story />
      </div>
    )
  }

  return (
    <ThemeProvider defaultTheme="light">
      <WithThemeChild />
    </ThemeProvider>
  )
}

export const decorators = [WithTheme]
