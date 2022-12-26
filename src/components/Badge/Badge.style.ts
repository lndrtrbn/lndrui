import { Color } from "../../utils/color.type"

type BadgeStyle = {
  base: string
  container: string
  colors: Record<Color, string>
  wrapper: string
}

const style: BadgeStyle = {
  base: "absolute top-0 right-0 rounded-full font-bold translate-x-1/3 -translate-y-1/3 min-w-12 min-h-12 text-sm",
  container: "relative",
  colors: {
    primary: "bg-primary",
    secondary: "bg-secondary",
    danger: "bg-danger"
  },
  wrapper: "block px-4 min-w-16 text-center text-font-invert"
}

export default style