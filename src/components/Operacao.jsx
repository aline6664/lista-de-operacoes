import React from 'react';
import styles from './Operacao.module.css'; 

export default function Operacao({ chamado, onClick }) {

    // Classe dinâmica de prioridades
          const classePrioridade = chamado.prioridade.toLowerCase()
            .replace('í', 'i')  // Converte "crítico" -> "critico"
            .replace('é', 'e'); // Converte "médio" -> "medio"

    return (
        <section
            className={styles.caixaOperacao}
            onClick={onClick} // Executa a função recebida no clique
        >
            <div className={styles.status}>
                <p>#{chamado.codigo} • {chamado.status.toUpperCase()}{chamado.status === "Finalizado" ? `: ${chamado.servico_realizado}` : ''}</p>
                <p className={
                    // Combina a classe base "prioridade" com a classe dinâmica (ex: "critico")
                    `${styles.prioridade} ${styles[classePrioridade]}`
                }>
                {chamado.prioridade}
                </p>
            </div>
            <div className={styles.descricao}>
                <h2>{chamado.assunto}</h2>
                <p>{chamado.descricao}</p> 
            </div>
            <hr />
            <div className={styles.info}>
                <div>
                    <p>{chamado.contato}</p>
                    <p>{chamado.email_conferencia}</p>
                    <p className={styles.tecnico}>{chamado.tecnico ? chamado.tecnico : ''}</p>
                </div>
                <div className={styles.infoDireita}>
                    <p className={styles.avaliacao}>{chamado.total_avaliacao !== null ? `${"★".repeat(chamado.total_avaliacao)}` : ''}</p>
                    <p className={styles.maquina}>{chamado.dispositivo_vinculado?.hostname ? chamado.dispositivo_vinculado.hostname : ''}</p>
                    <p className={styles.cliente}>{chamado.cliente}</p>
                </div>
            </div>
        </section>
    );
}