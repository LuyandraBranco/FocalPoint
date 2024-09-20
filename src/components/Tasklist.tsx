import styles from "../styles/Tasklist.module.scss";
import { Task } from "./Task";
export function Tasklist() {
  return (
    <section className={styles.tasklist}>
      <div className={styles["tasklist-elements-container"]}>
        <div className={styles["tasklist-todo"]}>
          <p>Suas tarefas de hoje</p>
          <Task />
          <Task />
          <Task />
        </div>
        <div className={styles["tasklist-done"]}>
          <p>Tarefas finalizadas</p>
          <Task />
        </div>
      </div>
      <button type="submit" className={styles["button-create"]}>
        Adicionar nova tarefa
      </button>
    </section>
  );
}
