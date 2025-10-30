import styles from './Operacoes.module.css'
import { chamados } from './../data/chamadosTeste';
import { useState } from 'react';

import Modal from './../components/Modal'; 
import Operacao from './../components/Operacao';

export default function Operacoes() {
    // O estado do modal e os dados da lista ficam aqui, no componente "pai"
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedChamado, setSelectedChamado] = useState(null);

    const handleOpenModal = (chamado) => {
        setSelectedChamado(chamado);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedChamado(null);
    };

    return (
        <div className={styles.listaContainer}>
        {/* O .map() renderiza o componente Operacao */}
        {chamados.map((chamado) => (
            <Operacao
            key={chamado.id}
            chamado={chamado}
            onClick={() => handleOpenModal(chamado)} // Passa a função de clique
            />
        ))}

        {/* O Modal continua aqui, fora do loop */}
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            {selectedChamado && (
                <div className={styles.detalhesModal}>
                    <div className={styles.banner}></div>

                    <h1>{selectedChamado.assunto}</h1>

                    <div>
                        <p>#{selectedChamado.codigo} • {selectedChamado.status.toUpperCase()}</p>
                        <p className={styles[selectedChamado.prioridade.toLowerCase().replace('í', 'i')]}>
                            {selectedChamado.prioridade}
                        </p>
                    </div>

                    <p>{selectedChamado.descricao}</p> {/* Descrição completa */}
                    <hr />

                    <div className={styles.info}>
                        <div>
                            <p>{selectedChamado.dispositivo_vinculado?.hostname ? selectedChamado.dispositivo_vinculado.hostname : ''}</p>
                            <p>{selectedChamado.cliente}</p>
                        </div>
                        <div>
                            <p>{selectedChamado.tecnico}</p>
                            <p className={styles.estrelas}>{selectedChamado.total_avaliacao !== null ? `${"★".repeat(selectedChamado.total_avaliacao)}` : ''}</p>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
        </div>
    );
}