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
  asIcon?: boolean
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
  asIcon = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={classNames(
        buttonStyle.base,
        disabled && buttonStyle.disabled,
        asIcon && buttonStyle.asIcon,
        buttonStyle.variants[variant][color]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
