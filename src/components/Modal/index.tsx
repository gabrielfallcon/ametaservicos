import { useState } from 'react';
import styles from './modal.module.scss';

interface IModalProps {
  active: boolean;
  title: string;
  description: string;
  closeModal: () => void;
}

export function Modal({...props}: IModalProps) {
  return(
    <div className={`${styles.modal} ${props.active && styles.modalActive}`}>
      <div className={
        `${styles.modalContent} ${props.active && styles.modalContentActive}`
      }>
        <h2 className={styles.modalTitle}>
          {props.title}
        </h2>

        <p className={styles.modalDescription}>
          {props.description}  
        </p>

        <button 
          className={styles.modalButton}
          onClick={() => props.closeModal()}
        >
          Fechar
        </button>
      </div>
    </div>
  )
}