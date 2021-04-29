import { useState } from "react";
import "./Select.scss";

export interface SelectProps {
  /**
   * Label for the default value (undefined)
   */
  label: string,
  /**
   * The list of options of the select
   */
  options: {label: string, value: string}[],
  /**
   * Current value selected
   */
  value?: string,
  /**
   * Callback when the selected value changes
   */
  onChange: (value?: string) => void
}

export default function Select({ options = [], value, label, onChange }: SelectProps) {
  const [open, setOpen] = useState(false);

  function handleChanges(val?: string) {
    onChange(val);
    setOpen(false);
  }

  function selected() {
    return options.find(o => o.value === value)?.label || label
  }

  function buildOption(option: {label: string, value?: string}) {
    let className = "lndrui__select--option";
    if (option.value === value) className += " selected";

    return (
      <p
        key={`option-${option.value}`}
        className={className}
        onClick={() => handleChanges(option.value)}>
        {option.label}
      </p>
    );
  }

  return (
    <div className="lndrui lndrui__select">
      <div
        className={`lndrui__select--header ${open ? " open" : ""}`}
        onClick={() => setOpen(!open)}>
        {selected()}
        <i className="arrow"></i>
      </div>
      { open &&
        <div className="lndrui__select--options">
          {buildOption({ label, value: undefined })}
          {options.map(o => buildOption(o))}
        </div>
      }
    </div>
  );
}