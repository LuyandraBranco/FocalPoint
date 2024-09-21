"use client";
import { TaskType } from "@/@types/TaskType";
import { FiTrash } from "react-icons/fi";
import styles from "../styles/Task.module.scss";

interface TaskProps {
  task: TaskType;
  onDelete: (taskId: number) => void;
  onToggleCompletion: (taskId: number) => void;
}

export function Task({ task, onDelete, onToggleCompletion }: TaskProps) {
  return (
    <div className={styles["task-container"]}>
      <div className={styles["description-task"]}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(task.id)}
        />
        <span>{task.title}</span>
      </div>
      <button
        className={styles["btn-delete"]}
        onClick={() => onDelete(task.id)}
      >
        <FiTrash className={styles["icon-trash"]}/>
      </button>
    </div>
  );
}
