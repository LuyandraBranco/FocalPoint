import styles from "../styles/Task.module.scss";
export function Task() {
  return (
    <div className={styles["task-container"]}>
      <div>
        <input type="checkbox" /> Lavar
      </div>
    </div>
  );
}
