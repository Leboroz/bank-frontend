import SideMenu from "../../components/SideMenu/SideMenu";
import { optionType } from "../../components/SideMenu/Option";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./home.module.scss"
import Clientes from "./Clientes/Clientes";
import Movimientos from "./Movimientos/Movimientos";
import Cuentas from "./Cuentas/Cuentas";

const { home } = styles;

const options: optionType[] = [
  {
    url: '/clientes',
    title: 'clientes'
  },
  {
    url: '/cuentas',
    title: 'cuentas'
  },
  {
    url: '/movimientos',
    title: 'movimientos'
  },
  {
    url: '/reportes',
    title: 'reportes'
  },
];

export default function Home(props: {}) {
  return (
    <BrowserRouter>
      <section className={home}>
        <SideMenu options={options} />
        <Routes>
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
        <Routes>
          <Route path="/cuentas" element={<Cuentas />} />
        </Routes>
        <Routes>
          <Route path="/movimientos" element={<Movimientos />} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}
