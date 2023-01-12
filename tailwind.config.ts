import { Config } from "tailwindcss"

import { colors } from "./src/styles/design-system/colors"
import { spacing } from "./src/styles/design-system/spacing"

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
    "./.storybook/**/*.{ts,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors,
    spacing,
  },
}

export default config
