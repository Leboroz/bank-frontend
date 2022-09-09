export interface Cuenta {
  id: number;
  numeroDeCuenta: string;
  tipo: string;
  saldoInicial: number;
  estado: boolean;
  clienteId: number;
}
