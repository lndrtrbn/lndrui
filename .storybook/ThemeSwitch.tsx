import React, { ReactNode } from "react"
import { useThemeContext } from "../src/contexts"

type Props = {
  children?: ReactNode
}

export default function ThemeSwitch({ children }: Props) {
  const { theme } = useThemeContext()

  function toggleTheme() {
    theme.set(theme.get === "light" ? "dark" : "light")
  }

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgb(var(--color-background) / 1)",
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          background: "#adadad",
          padding: "10px",
        }}
      >
        toggle theme
      </button>

      <div>{children}</div>
    </div>
  )
}
