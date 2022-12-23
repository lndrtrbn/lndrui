import classNames from "classnames"
import inputTextStyle from "./InputText.style"

export type InputTextProps = {
  value?: string
  placeholder?: string
  label?: string
  type?: "text" | "password"
  inError?: boolean
  disabled?: boolean
  onChange?: (value: string) => void
}

/**
 * Just a simple text input component
 */
export default function InputText({
  value,
  label,
  placeholder,
  type = "text",
  inError = false,
  disabled = false,
  onChange,
}: InputTextProps) {
  const classes = classNames(
    inputTextStyle.base,
    !inError && inputTextStyle.color,
    disabled && inputTextStyle.disabled.input,
    inError && inputTextStyle.inError
  )

  const containerClasses = classNames(
    inputTextStyle.container,
    disabled && inputTextStyle.disabled.container
  )

  return (
    <label className={containerClasses}>
      {label && <span className={inputTextStyle.label}>{label}</span>}
      <input
        type={type}
        className={classes}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
      />
    </label>
  )
}
