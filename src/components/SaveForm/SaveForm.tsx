import { Dispatch, FormEventHandler, ReactElement, SetStateAction, useState } from "react"
import style from "./SaveForm.module.scss";

const { background, modal, form, close, show } = style;

type SaveFormProps = {
  children: ReactElement | ReactElement[],
  entity: string,
  handler: FormEventHandler<HTMLFormElement>,
  showState: [boolean, Dispatch<SetStateAction<boolean>>],
}

export default function SaveForm({ entity, children, handler, showState }: SaveFormProps) {
  let [showModal, setShowModal] = showState;
  return (
    <div className={`${background} ${showModal ? show : ''}`}>
      <div className={modal}>
        <button onClick={() => setShowModal(false)} type="button" className={close}>X</button>
        <h2>Agregar {entity}</h2>
        <form onSubmit={handler} className={form}>
          {children}
          <input className="btn" type="submit" value="Guardar" />
        </form>
      </div>
    </div>
  )
}
