"use client";
import { useState } from "react";
import styles from "../styles/Tasklist.module.scss";
import { Task } from "./Task";
import { Modal } from "./Modal";
import stylesModal from '../styles/Modal.module.scss'

export function Tasklist() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);

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

  return (
    <section className={styles.tasklist}>
      <div className={styles["tasklist-elements-container"]}>
        <div className={styles["tasklist-todo"]}>
          <p>Suas tarefas de hoje</p>
          <Task onDelete={openDeleteModal} />
          <Task onDelete={openDeleteModal} />
          <Task onDelete={openDeleteModal} />
        </div>
        <div className={styles["tasklist-done"]}>
          <p>Tarefas finalizadas</p>
          <Task onDelete={openDeleteModal} />
        </div>
      </div>
      <button type="submit" className={styles["button-create"]} onClick={openCreateModal}>
        Adicionar nova tarefa
      </button>
      <Modal isOpen={isCreateModalOpen} title="Nova tarefa">
        <form className={stylesModal["form-container"]}>
          <div className={stylesModal["form-group"]}>
            <label htmlFor="title">Título</label>
            <input type="text" placeholder="Digite" id="title" />
          </div>
          <div className={stylesModal["buttons-actions-container"]}>
            <button onClick={closeCreateModal} className={stylesModal.closeButton}>
              Cancelar
            </button>
            <button type="submit" className={stylesModal.addButton}>Adicionar</button>
          </div>
        </form>
      </Modal>
      
      <Modal isOpen={isDeleteModalOpen} title="Deletar tarefa">
        <div className={stylesModal["delete-container"]}>
          <p>Tem certeza que você deseja deletar essa tarefa?</p>
          <div className={stylesModal["buttons-actions-container"]}>
            <button onClick={closeCreateModal} className={stylesModal.closeButton}>
              Cancelar
            </button>
            <button type="submit" className={stylesModal.deleteButton}>Deletar</button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
