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
  onChange: (value: boolean) => void
}

/**
 * Just a simple Checkbox component
 */
export default function Checkbox({ checked, children, onChange }: CheckboxProps) {
  let className = "lndrui lndrui__checkbox";
  if (checked) className += " checked";

  function check() {
    onChange(!checked);
  }

  return (
    <div className={className} onClick={check}>
      <span className="lndrui__checkbox--checkmark"></span>
      <label className="lndrui__checkbox--label">{children}</label>
      <input type="checkbox" checked={checked} />
    </div>
  );
}