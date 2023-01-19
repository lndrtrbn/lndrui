import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

import { Color } from "../../utils/color.type"
import style from "./Badge.style"

export type BadgeProps = {
  children?: ReactNode
  value?: number
  maxValue?: number
  color?: Color
}

/**
 * Component that displays a badge into top-right corner of children
 */
export default function Badge({
  children,
  value,
  maxValue,
  color = "default",
}: BadgeProps) {
  const label =
    maxValue && value && value > maxValue
      ? `${maxValue}+`
      : `${value}`

  return (
    <div className={twMerge(style.container)}>
      <div
        className={twMerge(
          style.positioning,
          style.colors[color],
          style.base,
          label.length === 2 && "w-24",
          label.length === 3 && "w-24",
          label.length === 4 && "w-32"
        )}
      >
        {(value || value === 0) && (
          <span className={twMerge(style.wrapper)}>{label}</span>
        )}
      </div>
      {children}
    </div>
  )
}
