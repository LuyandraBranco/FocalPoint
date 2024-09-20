import { Navbar, Tasklist } from "@/components";
import styles from "../styles/page.module.scss";

export default function Home() {
  return (
    <div className={styles["home-container"]}>
      <Navbar />
      <main className={styles["tasklist-container"]}>
        <Tasklist />
      </main>
    </div>
  );
}
