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
  variant?: "primary" | "secondary" | "danger"
  /**
   * Callback on button click
   */
  onClick?: () => void
}

/**
 * Just a simple Button component
 */
export default function Button({ children, variant = "primary", onClick }: ButtonProps) {
  const classnames = [
    `bg-${variant}`,
    `hover:bg-${variant}-dark`,
    "px-24",
    "py-8",
    "rounded",
    "active:outline",
    "outline-offset-4",
    "outline-2",
    `outline-${variant}-dark"`,
    "font-bold",
  ].join(" ")

  return (
    <button className={classnames} onClick={onClick}>
      {children}
    </button>
  )
}
