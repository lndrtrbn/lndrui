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
}

/**
 * Just a simple text input component
 */
export default function InputText({ placeholder, value, transparent = false }: InputTextProps) {
  const [state, setState] = useState(value);

  function handleChanges(event: ChangeEvent<HTMLInputElement>) {
    setState(event.target.value);
  }

  return (
    <input
      className={`lndrui__input ${transparent ? "lndrui__input--transparent" : ""}`}
      type="text"
      placeholder={placeholder}
      value={state}
      onChange={handleChanges}
    />
  );
}