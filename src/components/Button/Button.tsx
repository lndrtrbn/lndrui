import "../../variables.scss";
import "./Button.scss";

export interface ButtonProps {
  /**
   * Label of the button
   */
  label: string,
  /**
   * If the button should have transparent background
   */
  transparent: boolean,
  /**
   * Callback on button click
   */
  onClick: () => void
}

/**
 * Just a simple Button component
 * 
 * By default the button is colored but a **transparent** mode can be used
 * to set a light transparent background instead
 */
export default function Button({ label, transparent = false, onClick }: ButtonProps) {
  return (
    <button
      className={`lndrui__btn ${transparent ? "lndrui__btn--transparent" : ""}`}
      onClick={onClick}
      title={label}>
      {label}
    </button>
  );
}