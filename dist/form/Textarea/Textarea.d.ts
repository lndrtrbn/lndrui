/// <reference types="react" />
import "./Textarea.scss";
export interface TextareaProps {
    /**
     * The value of the textarea
     */
    value: string;
    /**
     * The style of the textarea
     */
    style?: "default" | "transparent";
    /**
     * If the field is in error state
     */
    inError?: boolean;
    /**
     * Callback when the textarea value changes
     */
    onChange: (value: string) => void;
}
/**
 * Just a simple Textarea component
 */
export default function Textarea({ value, style, inError, onChange }: TextareaProps): JSX.Element;
