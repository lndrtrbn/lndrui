import { ReactNode } from "react"

import { ButtonColor, ButtonVariant, theme } from "./Button.theme"

export type ButtonProps = {
  /**
   * Content to insert inside the button
   */
  children?: ReactNode
  /**
   * The style of the button
   */
  variant?: ButtonVariant
  /**
   * The color of the button
   */
  color?: ButtonColor
  /**
   * Callback on button click
   */
  onClick?: () => void
}

/**
 * Just a simple Button component
 */
export default function Button({
  children,
  variant = "plain",
  color = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button className={theme(color, variant)} onClick={onClick}>
      {children}
    </button>
  )
}
