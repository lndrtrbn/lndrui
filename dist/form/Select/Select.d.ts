/// <reference types="react" />
import "./Select.scss";
export interface SelectProps {
    /**
     * Label for the default value (undefined)
     */
    label: string;
    /**
     * The list of options of the select
     */
    options: {
        label: string;
        value: string;
    }[];
    /**
     * Current value selected
     */
    value?: string;
    /**
     * Callback when the selected value changes
     */
    onChange: (value?: string) => void;
}
export default function Select({ options, value, label, onChange }: SelectProps): JSX.Element;
