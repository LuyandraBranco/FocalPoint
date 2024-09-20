import { FiTrash } from "react-icons/fi";
import styles from "../styles/Task.module.scss";

export function Task() {
  return (
    <div className={styles["task-container"]}>
      <div className={styles["description-task"]}>
        <input type="checkbox" /> Lavar
      </div>
      <button className={styles["btn-delete"]}>
        <FiTrash/>
      </button>
    </div>
  );
}
