import TableLayout from "../../../components/TableLayout/TableLayout";
import { Cliente } from "./IClientes";
import styles from "./Clientes.module.scss";
import { FormEvent, useEffect, useState } from "react";
import Input from "../../../components/Input/Input";
import API from "../../../utils/API";

const { clientes } = styles;

export default function Clientes() {
  let [entities, setEntity] = useState<Cliente[]>([]);
  let showState = useState<boolean>(false);
  let cliente: any = { rol: "p1" };

  useEffect(() => {
    API.getEntity('clientes').then(data => setEntity(data));
  }, []);

  const clienteFormHandler = (e: FormEvent) => {
    e.preventDefault();
    API.createEntity("clientes", cliente).then(isOk => {
      if (isOk) {
        showState[1](false);
      }
    });
  }

  return (
    <TableLayout title="Clientes" entities={entities} entity="Cliente" formHandler={clienteFormHandler} showState={showState}>
      <Input type="text" field="nombre" value={cliente.nombre} changeHandler={(e) => cliente.nombre = e.target.value} />
      <Input type="text" field="genero" value={cliente.genero} changeHandler={(e) => cliente.genero = e.target.value} />
      <Input type="number" field="edad" value={cliente.edad} changeHandler={(e) => cliente.edad = parseInt(e.target.value)} />
      <Input type="number" field="identificacion" value={cliente.identificacion} changeHandler={(e) => cliente.identificacion = parseInt(e.target.value)} />
      <Input type="text" field="direccion" value={cliente.direccion} changeHandler={(e) => cliente.direccion = e.target.value} />
      <Input type="text" field="telefono" value={cliente.telefono} changeHandler={(e) => cliente.telefono = e.target.value} />
      <Input type="text" field="contraseña" value={cliente.contraseña} changeHandler={(e) => cliente.contraseña = e.target.value} />
      <Input type="checkbox" field="estado" value={cliente.estado} changeHandler={(e) => cliente.estado = e.target.checked} />
    </TableLayout>
  )
}
