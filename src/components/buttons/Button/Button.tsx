import { ReactNode } from "react"

import "./Button.module.css"

export type ButtonProps = {
  /**
   * Content to insert inside the button
   */
  children?: ReactNode
  /**
   * The style of the button
   */
  variant?: "default" | "transparent" | "success" | "danger"
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
  variant = "default",
  onClick,
}: ButtonProps) {
  let className = "lndrui lndrui__btn"
  if (variant !== "default") className += ` lndrui__btn--${variant}`

  return (
    <button className="text-3xl font-bold underline" onClick={onClick}>
      {children}
    </button>
  )
}
