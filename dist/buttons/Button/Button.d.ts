/// <reference types="react" />
import "./Button.scss";
export interface ButtonProps {
    /**
     * Label of the button
     */
    label: string;
    /**
     * The style of the button
     */
    style?: "default" | "transparent" | "success" | "danger";
    /**
     * Callback on button click
     */
    onClick: () => void;
}
/**
 * Just a simple Button component
 */
export default function Button({ label, style, onClick }: ButtonProps): JSX.Element;
