import React from 'react';
import styles from './Modal.module.css';

/*
  Este é o componente Modal "burro" e reutilizável.
  - isOpen: Um booleano (true/false) que diz se o modal deve ser exibido.
  - onClose: A função que ele deve chamar quando o usuário quiser fechar (clicando no 'X' ou no fundo).
  - children: O conteúdo (JSX) que será exibido dentro do modal.
*/
export default function Modal({ isOpen, onClose, children }) {
  // Se não estiver aberto, não renderiza nada (retorna null)
  if (!isOpen) {
    return null;
  }

  // Impede que o clique no conteúdo do modal feche o modal
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // O "backdrop" (fundo escuro)
    // Ao clicar no fundo, ele chama a função onClose
    <div className={styles.backdrop} onClick={onClose}>
      
      {/* O conteúdo do modal (a caixa branca) */}
      <div className={styles.modalContent} onClick={handleModalContentClick}>
        
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        
        {/* 'children' renderiza qualquer conteúdo que foi passado para o Modal */}
        {children}
      </div>
    </div>
  );
}