import { Cuenta } from "../pages/Home/Cuentas/ICuentas";
import { Movimiento } from "../pages/Home/Movimientos/IMovimiento";

export default class API {
  private static URL: string = "http://localhost:8080/api/";

  public static async getEntity(name: string): Promise<any[]> {
    const response = await fetch(this.URL + name);
    return response.json();
  }

  public static async getClientesWithCuentas(): Promise<any[]> {
    const response = await fetch(this.URL + 'clientes/cuentas');
    return response.json();
  }

  public static async createEntity(name: string, entity: any): Promise<boolean> {
    const response = await fetch(this.URL + name, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entity),
    });

    return response.ok;
  }

  public static async createCuenta(cuenta: Cuenta, id: number): Promise<boolean> {
    const response = await fetch(this.URL + 'cuentas/' + id + '/cliente', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cuenta),
    });

    return response.ok;
  }

  public static async createMovimiento(movimiento: Movimiento, cuentaId: number, clienteId: number): Promise<boolean> {
    const response = await fetch(this.URL + 'movimientos/' + cuentaId + '/cuenta', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movimiento),
    });
    return response.ok;
  }

}
