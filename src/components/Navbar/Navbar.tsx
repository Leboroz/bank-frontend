import Logo from '../Logo/Logo';
import styles from './Navbar.module.scss';

const { navbar } = styles;

export default function Navbar() {
  return (
    <nav className={navbar}>
      <Logo height="100%" />
    </nav>
  )
}
