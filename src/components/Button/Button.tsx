import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

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
  color = "default",
  disabled = false,
  asIcon = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        style.base,
        style.text,
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
