import styles from "./Header.module.css";
import logoImg from "../assets/ignite-logo.svg"

console.log(styles);

export function Header() {
  return (
    <div className={styles.header}>
        <img src={logoImg} alt="Ignite logotype" />
      <strong>Ignite Feed</strong>
    </div>
  );
}
