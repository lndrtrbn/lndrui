import { Color } from "../../utils/color.type"

export type ButtonVariant = "plain" | "link"

type ButtonColorStyles = Record<Color,string>
type ButtonVariantStyles = Record<ButtonVariant, ButtonColorStyles>

type ButtonStyle = {
  base: string
  disabled: string
  asIcon: string
  text: string
  variants: ButtonVariantStyles
}

const style: ButtonStyle = {
  base: "px-24 h-40 rounded active:outline outline-4 flex justify-center items-center gap-8",
  disabled: "pointer-events-none opacity-40",
  asIcon: "w-40 px-0",
  text: "font-bold text-font-invert fill-font-invert",
  variants: {
    plain: {
      default: "bg-jg hover:bg-jg-d20 outline-jg/30",
      danger: "bg-br hover:bg-br-d20 outline-br/30",
    },
    link: {
      default: "outline-2 bg-transparent text-jg fill-jg hover:bg-jg/20 hover:text-jg-d20 hover:fill-jg-d20 outline-jg/60",
      danger: "outline-2 bg-transparent text-br fill-br hover:bg-br/20 hover:text-br-d20 hover:fill-br-d20 outline-br/60",
    },
  }
}

export default style