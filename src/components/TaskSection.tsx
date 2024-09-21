import { TaskType } from "@/@types/TaskType";
import { Task } from "./Task";
import styles from "../styles/Tasklist.module.scss";

interface TaskSectionProps {
  title: string;
  tasks: TaskType[];
  onToggleCompletion: (taskId: number) => void;
  onDelete: (taskId: number) => void;
  emptyMessage: string;
}

export function TaskSection({
  title,
  tasks,
  onToggleCompletion,
  onDelete,
  emptyMessage,
}: TaskSectionProps) {
  return (
    <div className={styles["tasklist-todo"]}>
      <p>{title}</p>
      <div className={styles.list}>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggleCompletion={onToggleCompletion}
              onDelete={onDelete}
            />
          ))
        ) : (
          <span className={styles.emptyMessage}>{emptyMessage}</span>
        )}
      </div>
    </div>
  );
}
