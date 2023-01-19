import { Color } from "../../utils/color.type"

type BadgeStyle = {
  base: string
  container: string
  colors: Record<Color, string>
  positioning: string
  wrapper: string
}

const style: BadgeStyle = {
  base: "rounded-full font-bold text-xs w-16 h-16",
  container: "relative",
  colors: {
    default: "bg-jg",
    danger: "bg-br"
  },
  positioning: "absolute top-0 right-0 translate-x-1/3 -translate-y-1/3",
  wrapper: "block text-font-invert text-center"
}

export default style