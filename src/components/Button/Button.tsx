import classNames from "classnames"
import { ReactNode } from "react"

import { Color } from "../../utils/color.type"
import style, { ButtonVariant } from "./Button.style"

export type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  color?: Color
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
        style.base,
        disabled && style.disabled,
        asIcon && style.asIcon,
        style.variants[variant][color]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
