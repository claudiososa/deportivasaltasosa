import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../assets/styles/NavBar.css'
import logo from '../assets//images/logo-deportiva.png';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/"><img src={logo} alt="" srcset="" /></Link>
            </div>
            <div className="options">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li>Sobre nosotros</li>
                    <li><Link to="/products">Catalogo</Link></li>
                    <li>Contactanos</li>
                    <li><CartWidget /></li>
                </ul>
            </div>
        </div>
    )
}