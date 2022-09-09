import Option, { optionType } from "./Option";
import styles from "./SideMenu.module.scss";

type SideMenuProps = {
  options: optionType[],
};

export default function SideMenu({ options }: SideMenuProps) {
  return (
    <ul className={styles.sideMenu}>
      {options.map((option: optionType) => {
        return <Option option={option} />
      })}
    </ul>
  )
}
