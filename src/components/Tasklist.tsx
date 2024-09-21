"use client";
import { useState, useEffect } from "react";
import { getTasks, addTask, deleteTask, toggleTaskCompletion } from "../utils/storage";
import { TaskType } from "@/@types/TaskType";
import { Modal } from "./Modal";
import styles from "../styles/Tasklist.module.scss";
import { DeleteModal } from "./DeleteModal";
import { TaskForm } from "./TaskForm";
import { TaskSection } from "./TaskSection";

export function TaskList() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleAddTask = (newTask: TaskType) => {
    addTask(newTask);
    setTasks(getTasks());
  };

  const handleDeleteTask = () => {
    if (taskToDelete !== null) {
      deleteTask(taskToDelete);
      setTasks(getTasks());
      setTaskToDelete(null);
      setIsDeleteModalOpen(false);
    }
  };

  const handleToggleCompletion = (taskId: number) => {
    toggleTaskCompletion(taskId);
    setTasks(getTasks());
  };

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);
  const openDeleteModal = (taskId: number) => {
    setTaskToDelete(taskId);
    setIsDeleteModalOpen(true);
  };

  const tasksTodo = tasks.filter((task) => !task.completed);
  const tasksDone = tasks.filter((task) => task.completed);

  return (
    <section className={styles.tasklist}>
      <div className={styles["tasklist-elements-container"]}>
        <TaskSection
          title="Suas tarefas de hoje"
          tasks={tasksTodo}
          onToggleCompletion={handleToggleCompletion}
          onDelete={openDeleteModal}
          emptyMessage="Lista vazia, adicione a sua tarefa."
        />
        <TaskSection
          title="Tarefas finalizadas"
          tasks={tasksDone}
          onToggleCompletion={handleToggleCompletion}
          onDelete={openDeleteModal}
          emptyMessage="Sem tarefas feitas no momento."
        />
      </div>

      <button className={styles["button-create"]} onClick={openCreateModal}>
        Adicionar nova tarefa
      </button>

      <Modal isOpen={isCreateModalOpen} title="Nova tarefa" onClose={closeCreateModal}>
        <TaskForm onAddTask={handleAddTask} onClose={closeCreateModal} />
      </Modal>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onDelete={handleDeleteTask}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </section>
  );
}
