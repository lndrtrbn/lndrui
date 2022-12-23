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
  base: "transition-all px-24 h-40 rounded active:outline outline-4 font-bold text-font-invert",
  disabled: "pointer-events-none opacity-40",
  variants: {
    plain: {
      primary: "bg-primary hover:bg-primary-alt1 outline-primary-alt3",
      secondary: "bg-secondary hover:bg-secondary-alt1 outline-secondary-alt3",
      danger: "bg-danger hover:bg-danger-alt1 outline-danger-alt3",
    },
    link: {
      primary: "bg-transparent text-primary hover:bg-primary-alt3 hover:text-primary-alt1 outline-primary",
      secondary: "bg-transparent text-secondary hover:bg-secondary-alt3 hover:text-secondary-alt1 outline-secondary",
      danger: "bg-transparent text-danger hover:bg-danger-alt3 hover:text-danger-alt1 outline-danger",
    },
  }
}

export default buttonStyle