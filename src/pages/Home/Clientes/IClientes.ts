import { Cuenta } from "../Cuentas/ICuentas";

export interface Cliente {
  contraseña: string;
  direccion: string;
  edad: number;
  estado: boolean;
  genero: string;
  id: number;
  identificacion: number;
  nombre: string;
  rol: string;
  telefono: string;
  cuentas?: Cuenta[];
}
