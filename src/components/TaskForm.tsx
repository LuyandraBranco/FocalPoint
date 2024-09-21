import { useState } from "react";
import { TaskType } from "@/@types/TaskType";
import styles from "../styles/Modal.module.scss";

interface TaskFormProps {
  onAddTask: (newTask: TaskType) => void;
  onClose: () => void;
}

export function TaskForm({ onAddTask, onClose }: TaskFormProps) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim() === "") return;
    const newTask: TaskType = {
      id: Math.random(),
      title: newTaskTitle,
      completed: false,
    };
    onAddTask(newTask);
    setNewTaskTitle("");
    onClose();
  };

  return (
    <form className={styles["form-container"]} onSubmit={handleSubmit}>
      <div className={styles["form-group"]}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          placeholder="Digite"
          required
          minLength={5}
          maxLength={80}
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
        />
      </div>
      <div className={styles["buttons-actions-container"]}>
        <button type="button" onClick={onClose} className={styles.closeButton}>
          Cancelar
        </button>
        <button type="submit" className={styles.addButton}>
          Adicionar
        </button>
      </div>
    </form>
  );
}
