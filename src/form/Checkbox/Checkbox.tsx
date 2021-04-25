import { ReactNode } from "react";

import "./Checkbox.scss";

export interface CheckboxProps {
  /**
   * Value of the checkbox, true to check
   */
  checked: boolean,
  /**
   * Content along the checkbox
   */
  children: ReactNode,
  /**
   * Callback on value changes
   */
  onChange(value: boolean): () => void
}

export default function Checkbox({ checked, children, onChange }: CheckboxProps) {
  let className = "lndrui lndrui__checkbox";
  if (checked) className += " checked";

  return (
    <div className={className} onClick={onChange(!checked)}>
      <span className="lndrui__checkbox--checkmark"></span>
      <label className="lndrui__checkbox--label">{children}</label>
      <input type="checkbox" checked={checked} />
    </div>
  );
}