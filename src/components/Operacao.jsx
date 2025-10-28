import styles from './Operacao.module.css';
import { chamados } from '../data/chamadosTeste';
import { useState } from 'react';

export default function Operacao() {
    return (
        <div className={styles.listaContainer}>
        {chamados.map((chamado) => (
            <section key={chamado.id} className={styles.caixaOperacao}>
                <div className={styles.status}>
                    <p>#{chamado.codigo} • {chamado.status.toUpperCase()}</p>
                    <p className={styles[chamado.prioridade.replace('í', 'i')]}>
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
        ))}
        </div>
    );
    }