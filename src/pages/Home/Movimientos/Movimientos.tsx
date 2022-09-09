import { FormEvent, useEffect, useState } from "react";
import Input from "../../../components/Input/Input";
import TableLayout from "../../../components/TableLayout/TableLayout";
import API from "../../../utils/API";
import styles from "./Movimientos.module.scss";
import Dropdown, { option } from "../../../components/dropdown/Dropdown";
import { Cliente } from "../Clientes/IClientes";
import { Movimiento } from "./IMovimiento";
import { Cuenta } from "../Cuentas/ICuentas";

const { movimientos } = styles;

export default function Movimientos() {
  let [movimientos, setMovimientos] = useState<Movimiento[]>([]);
  let [clientes, setClientes] = useState<Cliente[]>([]);
  let [cuentas, setCuentas] = useState<Cuenta[] | undefined>([]);
  let [clienteId, setClienteId] = useState<number>(0);
  let [cuentaId, setCuentaId] = useState<number>(0);
  let showState = useState<boolean>(false);
  let movimiento: any = {};

  useEffect(() => {
    API.getEntity("movimientos").then(data => setMovimientos(data));
    API.getClientesWithCuentas().then(data => setClientes(data));
  }, []);
  const CuentasFormHandler = (e: FormEvent) => {
    e.preventDefault();
    API.createMovimiento(movimiento, cuentaId, clienteId).then(isOk => {
      if (isOk) {
        showState[1](false);
      }
    });

  }

  const clientesOptions: option[] = clientes.map((cliente) => ({ value: cliente.id + '', name: cliente.nombre }));
  const cuentasOptions: option[] | undefined = cuentas?.map((cliente) => ({ value: cliente.id + '', name: cliente.numeroDeCuenta }));

  return (
    <TableLayout title="Movimientos" entity="Movimiento" formHandler={CuentasFormHandler} entities={movimientos.map(client => {
      delete client.cuenta;
      return client;
    })} showState={showState} >
      <Dropdown
        field="cliente"
        changeHandler={(e) => {
          setClienteId(parseInt(e.target.value))
          const cuentas: Cuenta[] | undefined = clientes
            .filter(cliente => cliente.id === parseInt(e.target.value))[0]
            .cuentas;
          setCuentas(cuentas);
        }}
        options={clientesOptions}
      />
      {<Dropdown field="cuenta" changeHandler={(e) => setCuentaId(parseInt(e.target.value))} options={cuentasOptions} />}
      <Input
        type="text"
        field="movimiento"
        value={movimiento.valor}
        changeHandler={(e) => movimiento.valor = parseInt(e.target.value)}
      />
    </TableLayout >
  )
}
