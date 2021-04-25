import { ReactNode } from "react";
import "./Button.scss";
export interface ButtonProps {
    /**
     * Content to insert inside the button
     */
    children: ReactNode;
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
export default function Button({ children, style, onClick }: ButtonProps): JSX.Element;
