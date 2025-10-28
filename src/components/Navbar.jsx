import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav>
            <ul className={styles.navBar}>
                <li>
                  <NavLink 
                    to="/" 
                    end 
                    className={({ isActive }) => isActive ? styles.active : ""}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/operacoes" 
                    className={({ isActive }) => isActive ? styles.active : ""}
                  >
                    Lista de Operações
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/avaliacoes" 
                    className={({ isActive }) => isActive ? styles.active : ""}
                  >
                    Avaliações
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/sobre" 
                    className={({ isActive }) => isActive ? styles.active : ""}
                  >
                    Texto
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to="/sobre" 
                    className={({ isActive }) => isActive ? styles.active : ""}
                  >
                    Texto
                  </NavLink>
                </li>
            </ul>
        </nav>
    );
}