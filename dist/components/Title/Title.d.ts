import "./Title.scss";
export interface TitleProps {
    /**
     * The content of the title
     */
    value: string;
    /**
     * Which type of title
     */
    level: "1" | "2" | "3" | "4";
}
export default function Title({ value, level }: TitleProps): any;
