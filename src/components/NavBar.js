import CartWidget from './CartWidget';
import '../assets/styles/NavBar.css'
import logo from '../assets//images/logo-deportiva.png';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="" srcset="" />
            </div>
            <div className="options">
                <ul>
                    <li>Inicio</li>
                    <li>Sobre nosotros</li>
                    <li>Catalogo</li>
                    <li>Contactanos</li>
                    <li><CartWidget /></li>
                </ul>
            </div>
        </div>
    )
}