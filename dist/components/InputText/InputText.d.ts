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
     * If the input should have transparent background
     */
    transparent?: boolean;
    /**
     * If the field is in error state
     */
    inError?: boolean;
}
/**
 * Just a simple text input component
 */
export default function InputText({ placeholder, value, transparent, inError }: InputTextProps): JSX.Element;
