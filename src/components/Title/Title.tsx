import "./Title.scss";

export interface TitleProps {
  /**
   * The content of the title
   */
  value: string,
  /**
   * Which type of title
   */
  level: "1" | "2" | "3" | "4"
}

export default function Title({ value, level = "1" }: TitleProps) {
  console.log(level)
  const titles = new Map<string, any>()
    .set("1", <h1 className="lndrui lndrui__title">{value}</h1>)
    .set("2", <h2 className="lndrui lndrui__title">{value}</h2>)
    .set("3", <h3 className="lndrui lndrui__title">{value}</h3>)
    .set("4", <h4 className="lndrui lndrui__title">{value}</h4>);
  
  return titles.get(level);
}