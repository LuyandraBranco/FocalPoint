import styles from '../styles/Modal.module.scss'
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }:ModalProps){
    if (!isOpen) return null;
    return(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        <button onClick={onClose} className={styles.closeButton}>
          Cancelar
        </button>
        {children}
      </div>
    </div>
    )
}