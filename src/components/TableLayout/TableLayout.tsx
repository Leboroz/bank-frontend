
import { Dispatch, FormEventHandler, ReactElement, SetStateAction, useState } from "react";
import Input from "../Input/Input";
import SaveForm from "../SaveForm/SaveForm";
import Table from "../Table/Table";
import styles from "./TableLayout.module.scss";

const { layout, search } = styles;

type TableLayoutProps = {
  title: string,
  children: ReactElement | ReactElement[],
  entities: any[],
  formHandler: FormEventHandler<HTMLFormElement>,
  entity: string,
  showState: [boolean, Dispatch<SetStateAction<boolean>>],
};

export default function TableLayout({ title, children, entities, formHandler, entity, showState }: TableLayoutProps) {

  return (
    <aside className={layout}>
      <h1>{title}</h1>
      <div className={search}>
        <div>
          <Input type="text" field={'buscar'} placeholder="Buscar" value='dwadw' changeHandler={() => { }} />
        </div>
        <button type="button" onClick={() => showState[1](true)} className="btn">Nuevo</button>
      </div>
      <SaveForm entity={entity} handler={formHandler} showState={showState}>
        {children}
      </SaveForm>
      <Table entities={entities} />
    </aside>
  )
}
