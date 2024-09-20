import styles from '../styles/Modal.module.scss'
interface ModalProps {
    isOpen: boolean;
    title: string;
    children: React.ReactNode;
}

export function Modal({ isOpen, title, children }:ModalProps){
    if (!isOpen) return null;
    return(
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
    )
}