import { Link } from "react-router-dom";
import styles from "./Option.module.scss";

export type optionType = {
  url: string,
  title: string,
}

type optionProp = {
  option: optionType
};
export default function Option({ option }: optionProp) {
  const { url, title } = option;

  return (
    <li className={styles.link}><Link to={url}>{title}</Link></li>
  );
}
