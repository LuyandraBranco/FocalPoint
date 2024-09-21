import styles from "../styles/Modal.module.scss";
import { Modal } from "./Modal";

interface DeleteModalProps {
  isOpen: boolean;
  onDelete: () => void;
  onClose: () => void;
}

export function DeleteModal({ isOpen, onDelete, onClose }: DeleteModalProps) {
  return (
    <Modal isOpen={isOpen} title="Deletar tarefa" onClose={onClose}>
      <div className={styles["delete-container"]}>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
        <div className={styles["buttons-actions-container"]}>
          <button onClick={onClose} className={styles.closeButton}>
            Cancelar
          </button>
          <button onClick={onDelete} className={styles.deleteButton}>
            Deletar
          </button>
        </div>
      </div>
    </Modal>
  );
}
