"use client";
import { useState, useEffect } from "react";
import {
  getTasks,
  addTask,
  deleteTask,
  toggleTaskCompletion,
} from "../utils/storage";
import { TaskType } from "@/@types/TaskType";
import styles from "../styles/Tasklist.module.scss";
import { Task } from "./Task";
import { Modal } from "./Modal";
import stylesModal from "../styles/Modal.module.scss";

export function Tasklist() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: TaskType = {
      id: Math.random(),
      title: newTaskTitle,
      completed: false,
    };
    addTask(newTask);
    setTasks(getTasks());
    setNewTaskTitle("");
    closeCreateModal();
  };

  const handleDeleteTask = () => {
    if (taskToDelete !== null) {
      deleteTask(taskToDelete);
      setTasks(getTasks());
      closeDeleteModal();
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

  const closeDeleteModal = () => {
    setTaskToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const tasksTodo = tasks.filter((task) => !task.completed);
  const tasksDone = tasks.filter((task) => task.completed);

  return (
    <section className={styles.tasklist}>
      <div className={styles["tasklist-elements-container"]}>
        <div className={styles["tasklist-todo"]}>
          <p>Suas tarefas de hoje</p>
          <div className={styles.list}>
            {tasksTodo.length > 0 ? (
              tasksTodo.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onDelete={openDeleteModal}
                  onToggleCompletion={handleToggleCompletion}
                />
              ))
            ) : (
              <span className={styles.emptyMessage}>
                Lista vazia, adicione a sua tarefa.
              </span>
            )}
          </div>
        </div>
        <div className={styles["tasklist-done"]}>
          <p>Tarefas finalizadas</p>
          <div className={styles.list}>
            {tasksDone.length > 0 ? (
              tasksDone.map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onDelete={openDeleteModal}
                  onToggleCompletion={handleToggleCompletion}
                />
              ))
            ) : (
              <span className={styles.emptyMessage}>
                Sem tarefas feitas no momento.
              </span>
            )}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className={styles["button-create"]}
        onClick={openCreateModal}
      >
        Adicionar nova tarefa
      </button>
      <Modal isOpen={isCreateModalOpen} title="Nova tarefa">
        <form
          className={stylesModal["form-container"]}
          onSubmit={handleAddTask}
        >
          <div className={stylesModal["form-group"]}>
            <label htmlFor="title">Título</label>
            <input
              type="text"
              placeholder="Digite"
              id="title"
              required
              minLength={5}
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
          </div>
          <div className={stylesModal["buttons-actions-container"]}>
            <button
              onClick={closeCreateModal}
              className={stylesModal.closeButton}
            >
              Cancelar
            </button>
            <button type="submit" className={stylesModal.addButton}>
              Adicionar
            </button>
          </div>
        </form>
      </Modal>

      <Modal isOpen={isDeleteModalOpen} title="Deletar tarefa">
        <div className={stylesModal["delete-container"]}>
          <p>Tem certeza que você deseja deletar essa tarefa?</p>
          <div className={stylesModal["buttons-actions-container"]}>
            <button
              onClick={closeDeleteModal}
              className={stylesModal.closeButton}
            >
              Cancelar
            </button>
            <button
              onClick={handleDeleteTask}
              className={stylesModal.deleteButton}
            >
              Deletar
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
