import styles from "../styles/Tasklist.module.scss";
export function Tasklist() {
  return (
    <section className={styles.tasklist}>
      <div className={styles["tasklist-elements-container"]}></div>
      <button type="submit" className={styles["button-create"]}>
        Adicionar nova tarefa
      </button>
    </section>
  );
}
