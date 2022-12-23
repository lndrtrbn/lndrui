import classNames from "classnames"
import { ReactNode } from "react"

import buttonGroupStyle from "./ButtonGroup.style"
import styles from "./ButtonGroup.module.css"

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
  const classes = classNames(
    stacked && styles.buttonGroup,
    buttonGroupStyle.base,
    stacked && buttonGroupStyle.stacked,
    !stacked && buttonGroupStyle.spaced
  )

  return (
    <div className={classes}>
      <>{children}</>
    </div>
  )
}
