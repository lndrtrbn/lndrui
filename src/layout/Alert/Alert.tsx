import { Button } from "../../buttons";

import "./Alert.scss";

export interface AlertProps {
  /**
   * Content of the alert
   */
  content: string,
  /**
   * Type of the alert
   */
  type?: "success" | "info" | "warning" | "danger",
  /**
   * Callback on click on the close button
   */
  onClose: () => void
}

/**
 * Simple alert component
 */
export default function Alert({ content, type = "info", onClose }: AlertProps) {
  let className = `lndrui lndrui__alert lndrui__alert--${type}`;

  return (
    <div className={className}>
      <p className="lndrui__alert--content">{content}</p>
      <Button style="transparent" onClick={onClose}>x</Button>
    </div>
  );
}