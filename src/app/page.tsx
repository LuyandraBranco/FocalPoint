import { Navbar } from "@/components/Navbar";
import { TaskList } from "@/components/TaskList";
import styles from "../styles/page.module.scss";

export default function Home() {
  return (
    <div className={styles["home-container"]}>
      <Navbar />
      <main className={styles["tasklist-container"]}>
        <TaskList />
      </main>
    </div>
  );
}
