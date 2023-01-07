import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

import style from "./Tooltip.style"

export type TooltipProps = {
  children?: ReactNode
}

/**
 * TODO: Component documentation
 */
export default function Tooltip({ children }: TooltipProps) {
  return <div className={twMerge(style.base)}>{children}</div>
}
