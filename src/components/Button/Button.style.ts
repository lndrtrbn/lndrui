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
  base: "px-24 h-40 rounded active:outline outline-2 flex justify-center items-center gap-8",
  disabled: "pointer-events-none opacity-40",
  asIcon: "w-40 px-0",
  text: "font-bold text-font-invert fill-font-invert dark:text-font dark:fill-font",
  variants: {
    plain: {
      default: "bg-jg hover:bg-jg-d20 outline-4 outline-jg/30 dark:outline-jg-l40/30",
      danger: "bg-br hover:bg-br-d20 outline-4 outline-br/30 dark:outline-br-l20/30",
    },
    link: {
      default: "text-jg fill-jg hover:bg-jg/20 outline-jg/80 dark:text-jg-l20 dark:fill-jg-l20",
      danger: "text-br fill-br hover:bg-br/20 outline-br/80 dark:text-br-l20 dark:fill-br-l20",
    },
  }
}

export default style