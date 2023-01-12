import { ReactNode, useState } from "react"
import { twMerge } from "tailwind-merge"

import style from "./Tooltip.style"

export type TooltipProps = {
  title: string
  children?: ReactNode
}

/**
 * TODO: Component documentation
 */
export default function Tooltip({ children, title }: TooltipProps) {
  const [show, setShow] = useState(false)

  return (
    <div
      className={twMerge(style.container)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && (
        <div className={twMerge(style.positioning)}>
          <div className={twMerge(style.wrapper, style.base)}>
            {title}
          </div>
        </div>
      )}
      {children}
    </div>
  )
}
