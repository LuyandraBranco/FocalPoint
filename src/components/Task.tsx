import { FiTrash } from "react-icons/fi";
import styles from "../styles/Task.module.scss";

interface TaskProps {
  onDelete: (taskId: number) => void;
}

export function Task({ onDelete }: TaskProps) {
  const taskId = Math.random(); 
  return (
    <div className={styles["task-container"]}>
      <div className={styles["description-task"]}>
        <input type="checkbox" /> Lavar
      </div>
      <button className={styles["btn-delete"]} onClick={() => onDelete(taskId)}>
        <FiTrash/>
      </button>
    </div>
  );
}
