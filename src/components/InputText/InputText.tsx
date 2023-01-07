import { twMerge } from "tailwind-merge"

import style from "./InputText.style"

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
      className={twMerge(
        style.container,
        disabled && style.disabled.container
      )}
    >
      {label && <span className={style.label}>{label}</span>}
      <input
        type={type}
        className={twMerge(
          style.base,
          !inError && style.color,
          disabled && style.disabled.input,
          inError && style.inError
        )}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
      />
    </label>
  )
}
