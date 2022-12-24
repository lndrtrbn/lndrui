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
  return (
    <label
      className={classNames(
        inputTextStyle.container,
        disabled && inputTextStyle.disabled.container
      )}
    >
      {label && <span className={inputTextStyle.label}>{label}</span>}
      <input
        type={type}
        className={classNames(
          inputTextStyle.base,
          !inError && inputTextStyle.color,
          disabled && inputTextStyle.disabled.input,
          inError && inputTextStyle.inError
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
      />
    </label>
  )
}
