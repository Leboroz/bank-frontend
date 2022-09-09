import { ChangeEventHandler } from "react";
import style from "./Dropdown.module.scss";

const { group, dropdown } = style;

export type option = {
  value: string,
  name: string,
}

type dropdownProps = {
  field: string,
  changeHandler: ChangeEventHandler<HTMLSelectElement>,
  options: option[] | undefined,
}

export default function Dropdown({ field, changeHandler, options }: dropdownProps) {
  return (
    <div className={group}>
      <label htmlFor={field}>
        {field}
      </label>
      <select className={dropdown} id={field} onChange={changeHandler}>
        <option disabled selected> -- selecciona una opcion -- </option>
        {options && options.map((opt: option) => <option value={opt.value}>{opt.name}</option>)}
      </select>
    </div>
  )
}

