export type ButtonColor = "primary" | "secondary" | "danger"
export type ButtonVariant = "plain" | "link"

export function theme(color: ButtonColor, variant: ButtonVariant) {
  const baseStyle: string[] = [
    "px-24",
    "py-8",
    "rounded",
    "active:outline",
    "outline-offset-4",
    "outline-2",
    "font-bold",
    "text-font-invert",
  ]

  const style = {
    plain: {
      primary: [
        "bg-primary",
        "hover:bg-primary-alt1",
        "outline-primary-alt1",
      ],
      secondary: [
        "bg-secondary",
        "hover:bg-secondary-alt1",
        "outline-secondary-alt1",
      ],
      danger: [
        "bg-danger",
        "hover:bg-danger-alt1",
        "outline-danger-alt1",
      ],
    },
    link: {
      primary: [
        "bg-transparent",
        "text-primary",
        "hover:bg-primary-alt3",
        "outline-primary",
      ],
      secondary: [
        "bg-transparent",
        "text-secondary",
        "hover:bg-secondary-alt3",
        "outline-secondary",
      ],
      danger: [
        "bg-transparent",
        "text-danger",
        "hover:bg-danger-alt3",
        "outline-danger",
      ],
    },
  }

  return [...baseStyle, ...style[variant][color]].join(" ")
}
