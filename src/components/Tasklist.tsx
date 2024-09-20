import styles from "../styles/Tasklist.module.scss";
import { Task } from "./Task";
export function Tasklist() {
  return (
    <section className={styles.tasklist}>
      <div className={styles["tasklist-elements-container"]}>
        <Task />
      </div>
      <button type="submit" className={styles["button-create"]}>
        Adicionar nova tarefa
      </button>
    </section>
  );
}
