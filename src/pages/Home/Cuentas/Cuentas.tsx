import { FormEvent, useEffect, useState } from "react";
import Input from "../../../components/Input/Input";
import TableLayout from "../../../components/TableLayout/TableLayout";
import API from "../../../utils/API";
import { Cliente } from "../Clientes/IClientes";
import { Cuenta } from "./ICuentas";
import styles from "./Cuentas.module.scss";
import Dropdown, { option } from "../../../components/dropdown/Dropdown";

const { cuentas } = styles;

export default function Cuentas() {
  let [entities, setEntity] = useState<Cuenta[]>([]);
  let [clientes, setClientes] = useState<Cliente[]>([]);
  let showState = useState<boolean>(false);
  let cuenta: any = {};
  let id: number;

  useEffect(() => {
    API.getEntity('cuentas').then(data => setEntity(data));
    API.getEntity('clientes').then(data => setClientes(data));
  }, []);

  const CuentasFormHandler = (e: FormEvent) => {
    e.preventDefault();
    API.createCuenta(cuenta, id).then(isOk => {
      if (isOk) {
        showState[1](false);
      }
    });
  }
  const clientesOptions: option[] = clientes.map((cliente) => ({ value: cliente.id + '', name: cliente.nombre }));
  return (
    <TableLayout title="Cuentas" entity="cuenta" formHandler={CuentasFormHandler} entities={entities} showState={showState}>
      <Input type="number" field="numeroDeCuenta" value={cuenta.numeroDeCuenta} changeHandler={(e) => cuenta.numeroDeCuenta = e.target.value} />
      <Dropdown field="tipo" changeHandler={(e) => cuenta.tipo = e.target.value} options={[{ value: "ahorro", name: "ahorro" }, { value: "corriente", name: "corriente" }]} />
      <Input type="text" field="saldoInicial" value={cuenta.saldoInicial} changeHandler={(e) => cuenta.saldoInicial = Number(e.target.value)} />
      <Dropdown
        field="cliente"
        changeHandler={(e) => id = parseInt(e.target.value)}
        options={clientesOptions}
      />
      <Input type="checkbox" field="estado" value={cuenta.estado} changeHandler={(e) => cuenta.estado = e.target.checked} />
    </TableLayout>
  )
}
