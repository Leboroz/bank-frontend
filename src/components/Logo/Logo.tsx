import styles from './Logo.module.scss'

const { container, logo } = styles;
type logoProps = {
  width?: number | string,
  height?: number | string,
}

export default function Logo({ width, height }: logoProps) {
  return (
    <div className={container}>
      <div style={{ width, height }} className={logo} />
      <h1>BANCO<br />PINCHINCHA</h1>
    </div>
  )
}
