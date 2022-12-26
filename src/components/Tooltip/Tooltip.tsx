import classNames from "classnames"
import { ReactNode } from "react"

import style from "./Tooltip.style"

export type TooltipProps = {
  children?: ReactNode
}

/**
 * TODO: Component documentation
 */
export default function Tooltip({
  children
}: TooltipProps) {
  return (
    <div
      className={classNames(
        style.base,
      )}
    >
      {children}
    </div>
  )
}
