import { ChangeEvent, useState } from "react";

import "../../variables.scss";
import "./InputText.scss";

export interface InputTextProps {
  /**
   * Optionnal message when the input is empty
   */
  placeholder?: string,
  /**
   * The value of the input
   */
  value: string,
  /**
   * If the input should have transparent background
   */
   transparent: boolean,
   /**
    * If the field is in error state
    */
   inError: boolean
}

/**
 * Just a simple text input component
 */
export default function InputText({ placeholder, value, transparent = false, inError = false }: InputTextProps) {
  const [state, setState] = useState(value);

  function handleChanges(event: ChangeEvent<HTMLInputElement>) {
    setState(event.target.value);
  }

  let className: string = "lndrui__input";
  if (transparent) className += " lndrui__input--transparent";
  if (inError) className += " lndrui__input--error";

  return (
    <input
      className={className}
      type="text"
      placeholder={placeholder}
      value={state}
      onChange={handleChanges}
    />
  );
}