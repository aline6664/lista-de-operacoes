import './Header.css'
import logo from '../assets/logo-mba.png'

export default function Header() {
    return (
        <header className='banner'>
            <img src={logo} id='logo' alt='MBA Logo'></img>
            <h1>Telão de Operações</h1>
        </header>
    )
}