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
  disabled: "pointer-events-none opacity-50",
  asIcon: "w-40 px-0",
  text: "font-bold text-font-invert fill-font-invert",
  variants: {
    plain: {
      primary: "bg-primary hover:bg-primary-accent outline-primary/30",
      secondary: "bg-secondary hover:bg-secondary-accent outline-secondary/30",
      danger: "bg-danger hover:bg-danger-accent outline-danger/30",
    },
    link: {
      primary: "outline-2 bg-transparent text-primary fill-primary hover:bg-primary/20 hover:text-primary-accent hover:fill-primary-accent outline-primary/60",
      secondary: "outline-2 bg-transparent text-secondary fill-secondary hover:bg-secondary/20 hover:text-secondary-accent hover:fill-secondary-accent outline-secondary/60",
      danger: "outline-2 bg-transparent text-danger fill-danger hover:bg-danger/20 hover:text-danger-accent hover:fill-danger-accent outline-danger/60",
    },
  }
}

export default style