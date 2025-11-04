import styles from './Operacoes.module.css'
import chamados from './../data/chamadosTeste.json'
import { useState } from 'react'

import Modal from './../components/Modal'
import Tooltip from './../components/Tooltip'
import Operacao from './../components/Operacao'
import Filtros from './../components/Filtros';

export default function Operacoes() {
    // O estado do modal e os dados da lista ficam aqui, no componente "pai"
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedChamado, setSelectedChamado] = useState(null);
    const [filtros, setFiltros] = useState({
        prioridade: 'todas',
        tecnico: '',
        cliente: ''
    });

    const handleOpenModal = (chamado) => {
        setSelectedChamado(chamado);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedChamado(null);
    };

    // Listas filtradas
    const chamadosFiltrados = chamados.lista.filter(chamado => {
        // Lógica do filtro de Prioridade
        if (filtros.prioridade !== 'todas' && chamado.prioridade !== filtros.prioridade) {
        return false;
        }

        // Lógica do filtro de Técnico
        if (filtros.tecnico && 
            (!chamado.tecnico || !chamado.tecnico.toLowerCase().includes(filtros.tecnico.toLowerCase()))) {
        return false;
        }

        // Lógica do filtro de Cliente
        if (filtros.cliente && 
            !chamado.cliente.toLowerCase().includes(filtros.cliente.toLowerCase())) {
        return false;
        }

        return true; // Se passou por todos os filtros, exiba o chamado
    });

    return (
        <section>
            <Filtros filtrosAtuais={filtros} setFiltros={setFiltros} />
            <div className={styles.listaContainer}>        
                {/* O .map() renderiza o componente Operacao */}
                {chamadosFiltrados.map((chamado) => (
                        <Operacao
                            key={chamado.id}
                            chamado={chamado}
                            onClick={() => handleOpenModal(chamado)}
                        />
        ))}

            {/* O Modal continua aqui, fora do loop */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedChamado && (
                    <div className={styles.detalhesModal}>
                        <div className={styles.banner}></div>

                        <h1>{selectedChamado.assunto}</h1>

                        <div className={styles.codigoStatus}>
                            <p>#{selectedChamado.codigo} • <span className={styles.status}>{selectedChamado.status.toUpperCase()}</span></p>
                            <Tooltip text={`${selectedChamado.total_avaliacao} estrelas`}><p className={styles.avaliacao}>{selectedChamado.total_avaliacao !== null ? `${"★".repeat(selectedChamado.total_avaliacao)}` : ''}</p></Tooltip>
                            {/*<p className={styles[selectedChamado.prioridade.toLowerCase().replace('í', 'i')]}>
                                {selectedChamado.prioridade}
                            </p>*/}
                        </div>
                        <div className={styles.descricao}>
                            <div className={styles.problema}>
                                <p >{selectedChamado.descricao}</p>
                            </div>
                            <hr />
                            <div className={styles.solucao}
                                dangerouslySetInnerHTML={{ __html: selectedChamado.ultima_log.texto_html }}
                                />
                        </div>
                        <hr />
                        <div className={styles.info}>
                            <div>
                                <p>{selectedChamado.contato}</p>
                                <p>{selectedChamado.email_conferencia}</p>
                                <p className={styles.tecnico}>{selectedChamado.tecnico ? selectedChamado.tecnico : ''}</p>
                            </div>
                            <div className={styles.infoDireita}>
                                <p className={styles.maquina}>{selectedChamado.dispositivo_vinculado?.hostname ? selectedChamado.dispositivo_vinculado.hostname : ''}</p>
                                <p className={styles.cliente}>{selectedChamado.cliente}</p>
                            </div>
                        </div>
                    
                    </div>
                )}
            </Modal>
            </div>
        </section>
    );
}