import { Navbar } from "@/components/Navbar";

import styles from "../styles/page.module.scss";
import { Tasklist } from "@/components/TaskList";

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
