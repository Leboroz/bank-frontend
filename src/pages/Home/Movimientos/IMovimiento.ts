import { Cuenta } from "../Cuentas/ICuentas";

export interface Movimiento {
  id: number;
  fecha: Date;
  tipo: string;
  saldoInicial: number;
  valor: number;
  estado: boolean;
  cuenta?: Cuenta
}
