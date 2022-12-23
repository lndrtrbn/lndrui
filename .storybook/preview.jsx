import "../src/styles/index.css"

import { ThemeProvider } from "../src/contexts"
import ThemeSwitch from "./ThemeSwitch"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
}

export const decorators = [
  (Story) => (
    <ThemeProvider defaultTheme="light">
      <ThemeSwitch>
        <Story />
      </ThemeSwitch>
    </ThemeProvider>
  ),
]
