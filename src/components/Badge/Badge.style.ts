import { Color } from "../../utils/color.type"

type BadgeStyle = {
  base: string
  container: string
  colors: Record<Color, string>
  positioning: string
  wrapper: string
}

const style: BadgeStyle = {
  base: "rounded-full font-bold  min-w-12 min-h-12 text-sm",
  container: "relative",
  colors: {
    primary: "bg-primary",
    secondary: "bg-secondary",
    danger: "bg-danger"
  },
  positioning: "absolute top-0 right-0 translate-x-1/3 -translate-y-1/3",
  wrapper: "block px-4 min-w-16 text-font-invert text-center"
}

export default style