import styles from "./Navbar.module.scss";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <img src="/Logomark.svg" />
        <h1>FocalPoint</h1>
      </div>
      <div className={styles["nav-greetings-container"]}>
        <h2>Bem-vindo de volta, Marcus</h2>
      </div>
      <div className={styles["navbar-date"]}>
        <p>Segunda, 01 de dezembro de 2025</p>
      </div>
    </nav>
  );
}
