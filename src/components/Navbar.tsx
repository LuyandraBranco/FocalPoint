import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import styles from "../styles/Navbar.module.scss";
import { formatDate } from "@/utils/date";

export function Navbar() {
  const today: Date = new Date();
  const formattedDate: string = formatDate(today);
  
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <img src="/Logomark.svg" />
        <img src="/Logotype.svg" />
      </div>
      <div className={styles["nav-greetings-container"]}>
        <h2>Bem-vindo de volta, Marcus</h2>
      </div>
      <div className={styles["navbar-date"]}>
      <p>{formattedDate}</p>
      </div>
    </nav>
  );
}
