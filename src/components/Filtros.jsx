import React from 'react';
import styles from './Filtros.module.css';

// Recebe a função 'setFiltros' e os 'filtrosAtuais' do componente pai
export default function Filtros({ filtrosAtuais, setFiltros }) {

    // Função genérica para atualizar qualquer campo do filtro
    const handleChange = (e) => {
        const { name, value } = e.target;
    
    // Atualiza o estado no componente pai
    setFiltros(filtrosAnteriores => ({
        ...filtrosAnteriores,
        [name]: value
    }));
  };

  return (
    <div className={styles.filtrosContainer}>
        {/* --- Filtro por Prioridade (Dropdown) --- */}
        <div className={styles.filtroGrupo}>
            <label htmlFor="prioridade">Prioridade</label>
            <select
                id="prioridade"
                name="prioridade"
                value={filtrosAtuais.prioridade}
                onChange={handleChange}
            >
            <option value="todas">Todas</option>
            <option value="Crítico">Crítico</option>
            <option value="Alto">Alto</option>
            <option value="Médio">Médio</option>
            <option value="Baixo">Baixo</option>
            <option value="Planejado">Planejado</option>
            </select>
        </div>

        {/* --- Filtro por Técnico (Texto) --- */}
        <div className={styles.filtroGrupo}>
            <label htmlFor="tecnico">Técnico</label>
            <input
                type="text"
                id="tecnico"
                name="tecnico"
                placeholder="Nome do técnico..."
                value={filtrosAtuais.tecnico}
                onChange={handleChange}
            />
        </div>

        {/* --- Filtro por Cliente (Texto) --- */}
        <div className={styles.filtroGrupo}>
            <label htmlFor="cliente">Cliente</label>
            <input
                type="text"
                id="cliente"
                name="cliente"
                placeholder="Nome do cliente..."
                value={filtrosAtuais.cliente}
                onChange={handleChange}
            />
        </div>
    </div>
  );
}