import { ReactNode } from "react"

import style from "./ButtonGroup.style"
import styles from "./ButtonGroup.module.css"
import { twMerge } from "tailwind-merge"

export type ButtonGroupProps = {
  children: ReactNode
  stacked?: boolean
}

/**
 * A component to group buttons together
 */
export default function ButtonGroup({
  children,
  stacked = true,
}: ButtonGroupProps) {
  return (
    <div
      className={twMerge(
        stacked && styles.buttonGroup,
        style.base,
        stacked && style.stacked,
        !stacked && style.spaced
      )}
    >
      <>{children}</>
    </div>
  )
}
