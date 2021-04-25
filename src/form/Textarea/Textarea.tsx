import { ChangeEvent } from "react";

import "./Textarea.scss";

export interface TextareaProps {
  /**
   * The value of the textarea
   */
   value: string,
  /**
   * The style of the textarea
   */
   style?: "default" | "transparent",
   /**
    * If the field is in error state
    */
   inError?: boolean,
   /**
    * Callback when the textarea value changes
    */
   onChange: (value: string) => void
}

/**
 * Just a simple Textarea component
 */
export default function Textarea({ value, style = "default", inError = false, onChange }: TextareaProps) {
  let className = "lndrui lndrui__textarea";
  if (style !== "default") className += ` lndrui__textarea--${style}`;
  if (inError) className += " lndrui__textarea--error";

  function handleChanges(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  return (
    <textarea
      className={className}
      rows={6}
      onChange={handleChanges}>
      {value}
    </textarea>
  );
}