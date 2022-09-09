import { ChangeEventHandler } from "react";
import style from "./Input.module.scss";

const { group } = style;

type InputProps = {
  type: string,
  field: string,
  value: string,
  changeHandler: ChangeEventHandler<HTMLInputElement>,
  placeholder?: string,
}

export default function Input({ type, field, value, changeHandler, placeholder }: InputProps) {
  return (
    <div className={group}>
      <label htmlFor={field}>
        {field.charAt(0).toUpperCase() + field.slice(1)}
      </label>
      <input id={field} type={type} name={field} value={value} onChange={changeHandler} placeholder={placeholder} />
    </div>
  )
}

