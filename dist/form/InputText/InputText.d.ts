/// <reference types="react" />
import "./InputText.scss";
export interface InputTextProps {
    /**
     * The value of the input
     */
    value: string;
    /**
     * Optionnal message when the input is empty
     */
    placeholder?: string;
    /**
     * The style of the input
     */
    style?: "default" | "transparent";
    /**
     * If the field is in error state
     */
    inError?: boolean;
    /**
     * Callback when the input value changes
     */
    onChange: (value: string) => {};
}
/**
 * Just a simple text input component
 */
export default function InputText({ placeholder, value, style, inError, onChange }: InputTextProps): JSX.Element;
