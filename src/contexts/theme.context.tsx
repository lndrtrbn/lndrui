import { createContext, useContext, useMemo, useState } from "react"

import { ContextData, ProviderProps } from "./context.type"

type Theme = "light" | "dark"

type Context = {
  theme: ContextData<Theme | undefined>
}

const ThemeContext = createContext<Context | undefined>(undefined)

type ThemeProviderProps = ProviderProps & {
  defaultTheme?: Theme | undefined
}

const ThemeProvider = ({
  children,
  defaultTheme,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme | undefined>(defaultTheme)

  const value = useMemo<Context>(
    () => ({
      theme: {
        get: theme,
        set: setTheme,
      },
    }),
    [theme]
  )

  return (
    <div data-theme={theme}>
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContext"
    )
  }
  return context
}

export { ThemeProvider, useThemeContext }
