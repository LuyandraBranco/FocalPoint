import styles from "../styles/Navbar.module.scss";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <img src="/Logomark.svg" />
        <img src="/Logotype.svg" />
      </div>

      <h2>Bem-vindo de volta, Marcus</h2>

      <p>Segunda, 01 de dezembro de 2025</p>
    </nav>
  );
}
