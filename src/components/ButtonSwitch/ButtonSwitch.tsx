import { twMerge } from "tailwind-merge"

import { Color } from "../../utils/color.type"
import style from "./ButtonSwitch.style"

export type ButtonSwitchProps = {
  leftLabel?: string
  rightLabel?: string
  color?: Color
  disabled?: boolean
  value?: boolean
  onChange?: (val: boolean) => void
}

/**
 * Button component with two values state
 */
export default function ButtonSwitch({
  leftLabel,
  rightLabel,
  color = "primary",
  disabled = false,
  value = false,
  onChange,
}: ButtonSwitchProps) {
  return (
    <div
      className={twMerge(style.container, disabled && style.disabled)}
    >
      {leftLabel && <span>{leftLabel}</span>}
      <div
        className={twMerge(
          style.switch.base,
          value && style.switch.active[color],
          !value && style.switch.inactive
        )}
      >
        <button
          className={twMerge(
            style.switchValue.base,
            style.switchValue[value ? "active" : "inactive"][color]
          )}
          onClick={() => onChange?.(!value)}
          disabled={disabled}
        />
      </div>
      {rightLabel && <span>{rightLabel}</span>}
    </div>
  )
}
