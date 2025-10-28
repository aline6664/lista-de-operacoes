import styles from './Table.module.css';
import { useState, useEffect } from 'react';
import Tooltip from './Tooltip';

// Dados de teste
const APIData = [
    { id: 'emp_101', nome: 'Alice', chamados: 15, avaliacoes: 5 },
    { id: 'emp_102', nome: 'Bruno', chamados: 22, avaliacoes: 8 },
    { id: 'emp_103', nome: 'Carla', chamados: 8,  avaliacoes: 3 },
    { id: 'emp_104', nome: 'David', chamados: 31, avaliacoes: 12 },
];

function Table({ title, columns, data }) {
    // Se não tiver nenhum dado
    if (!data || data.length === 0) {
        return (
        <div className={styles.statsContainer}>
            <h2>{title}</h2>
            <p>Nenhum dado encontrado hoje.</p>
        </div>
        );
    }
    // Mostrar a tabela com os dados
    return (
        <div className={styles.statsContainer}>
            <h2>{title}</h2>
            <table className={styles.statsTable}>
            <thead>
                <tr>
                    {/* Map() no prop de "columns" para criar cada header */}
                    {columns.map((col) => (
                        <th key={col.accessor}>{col.header}</th>
                    ))}
                </tr>
            </thead>
                <tbody>
                    {/* Map() no prop de "data" para criar cada linha */}
                    {data.map((row) => (
                        <tr key={row.id}>
                            {/* Para cada linha, map() nas colunas novamente para renderizar os dados corretamente */}
                            {columns.map((col) => (
                                <td key={col.accessor}>{row[col.accessor]}</td>
                                ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <td>TOTAL:</td>
                    <td>(VALOR)</td>
                </tfoot>
            </table>
        </div>
  );
}

export default Table;

