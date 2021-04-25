import { ChangeEvent } from "react";

import "./InputText.scss";

export interface InputTextProps {
  /**
   * The value of the input
   */
   value: string,
  /**
   * Optionnal message when the input is empty
   */
  placeholder?: string,
  /**
   * The style of the input
   */
   style?: "default" | "transparent",
   /**
    * If the field is in error state
    */
   inError?: boolean,
   /**
    * Callback when the input value changes
    */
   onChange: (value: string) => {}
}

/**
 * Just a simple text input component
 */
export default function InputText({ placeholder, value, style = "default", inError = false, onChange }: InputTextProps) {
  let className = "lndrui lndrui__input";
  if (style !== "default") className += ` lndrui__input--${style}`;
  if (inError) className += " lndrui__input--error";

  function handleChanges(event: ChangeEvent<HTMLInputElement>) {
    onChange(event.target.value);
  }

  return (
    <input
      className={className}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChanges}
    />
  );
}