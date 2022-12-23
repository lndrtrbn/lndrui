import classNames from "classnames"
import { ReactNode } from "react"

import buttonStyle, {
  ButtonColor,
  ButtonVariant,
} from "./Button.style"

export type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  color?: ButtonColor
  disabled?: boolean
  onClick?: () => void
}

/**
 * Just a simple Button component
 */
export default function Button({
  children,
  variant = "plain",
  color = "primary",
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = classNames(
    buttonStyle.base,
    disabled && buttonStyle.disabled,
    buttonStyle.variants[variant][color]
  )

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
