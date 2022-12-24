import React, { CSSProperties, useEffect } from "react"
import { DecoratorFn } from "@storybook/react"

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
      icon: "circlehollow",
      items: [
        { value: "light", icon: "circlehollow", title: "light" },
        { value: "dark", icon: "circle", title: "dark" },
      ],
      showName: true,
    },
  },
}

const WithTheme: DecoratorFn = (Story, context) => {
  function WithThemeChild() {
    const { theme } = useThemeContext()

    useEffect(() => {
      theme.set(context.globals.theme)
    }, [context.globals.theme])

    const style: CSSProperties = {
      background: "rgb(var(--color-background) / 1)",
    }

    return (
      <div className="story-container" style={style}>
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
