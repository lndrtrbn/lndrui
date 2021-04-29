/// <reference types="react" />
import "./Alert.scss";
export interface AlertProps {
    /**
     * Content of the alert
     */
    content: string;
    /**
     * Type of the alert
     */
    type?: "success" | "info" | "warning" | "danger";
    /**
     * Callback on click on the close button
     */
    onClose: () => void;
}
/**
 * Simple alert component
 */
export default function Alert({ content, type, onClose }: AlertProps): JSX.Element;
