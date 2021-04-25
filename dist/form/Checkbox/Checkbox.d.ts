import { ReactNode } from "react";
import "./Checkbox.scss";
export interface CheckboxProps {
    /**
     * Value of the checkbox, true to check
     */
    checked: boolean;
    /**
     * Content along the checkbox
     */
    children: ReactNode;
    /**
     * Callback on value changes
     */
    onChange(value: boolean): () => void;
}
export default function Checkbox({ checked, children, onChange }: CheckboxProps): JSX.Element;
