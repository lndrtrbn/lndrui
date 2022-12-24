import classNames from "classnames"

import buttonSwitchStyle, {
  ButtonSwitchColor,
} from "./ButtonSwitch.style"

export type ButtonSwitchProps = {
  leftLabel?: string
  rightLabel?: string
  color?: ButtonSwitchColor
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
      className={classNames(
        buttonSwitchStyle.container,
        disabled && buttonSwitchStyle.disabled
      )}
    >
      {leftLabel && <span>{leftLabel}</span>}
      <div
        className={classNames(
          buttonSwitchStyle.switch.base,
          value && buttonSwitchStyle.switch.active[color],
          !value && buttonSwitchStyle.switch.inactive
        )}
      >
        <button
          className={classNames(
            buttonSwitchStyle.switchValue.base,
            buttonSwitchStyle.switchValue[
              value ? "active" : "inactive"
            ][color]
          )}
          onClick={() => onChange?.(!value)}
          disabled={disabled}
        />
      </div>
      {rightLabel && <span>{rightLabel}</span>}
    </div>
  )
}
