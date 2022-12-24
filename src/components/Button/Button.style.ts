export type ButtonColor = "primary" | "secondary" | "danger"
export type ButtonVariant = "plain" | "link"

type ButtonColorStyles = Record<ButtonColor,string>
type ButtonVariantStyles = Record<ButtonVariant, ButtonColorStyles>

type ButtonStyle = {
  base: string
  disabled: string
  variants: ButtonVariantStyles
}

const buttonStyle: ButtonStyle = {
  base: "px-24 h-40 rounded active:outline outline-4 font-bold text-font-invert",
  disabled: "pointer-events-none opacity-50",
  variants: {
    plain: {
      primary: "bg-primary hover:bg-primary-accent outline-primary/30",
      secondary: "bg-secondary hover:bg-secondary-accent outline-secondary/30",
      danger: "bg-danger hover:bg-danger-accent outline-danger/30",
    },
    link: {
      primary: "outline-2 bg-transparent text-primary hover:bg-primary/20 hover:text-primary-accent outline-primary/60",
      secondary: "outline-2 bg-transparent text-secondary hover:bg-secondary/20 hover:text-secondary-accent outline-secondary/60",
      danger: "outline-2 bg-transparent text-danger hover:bg-danger/20 hover:text-danger-accent outline-danger/60",
    },
  }
}

export default buttonStyle