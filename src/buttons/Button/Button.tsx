import "./Button.scss";

export interface ButtonProps {
  /**
   * Label of the button
   */
  label: string,
  /**
   * The style of the button
   */
  style?: "default" | "transparent" | "success" | "danger",
  /**
   * Callback on button click
   */
  onClick: () => void
}

/**
 * Just a simple Button component
 */
export default function Button({ label, style = "default", onClick }: ButtonProps) {
  let className = "lndrui lndrui__btn";
  if (style !== "default") className += ` lndrui__btn--${style}`;

  return (
    <button
      className={className}
      onClick={onClick}
      title={label}>
      {label}
    </button>
  );
}