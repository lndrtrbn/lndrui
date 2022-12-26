import classNames from "classnames"
import { ReactNode } from "react"

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
  color = "primary",
}: BadgeProps) {
  const label =
    maxValue && value && value > maxValue
      ? `${maxValue}+`
      : `${value}`

  return (
    <div className={classNames(style.container)}>
      <div className={classNames(style.base, style.colors[color])}>
        {(value || value === 0) && (
          <span className={classNames(style.wrapper)}>{label}</span>
        )}
      </div>
      {children}
    </div>
  )
}
