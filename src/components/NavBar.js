import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import CartContext from '../context/CartContext';
import '../assets/styles/NavBar.css'
import '../assets/styles/cart.css';
import logo from '../assets//images/logo-deportiva.png';

export default function NavBar() {

    const { cart } = useContext(CartContext);

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
                </ul>
                <span className={ (cart.length > 0) ? "showContent" : "hideContent"}><CartWidget /></span>
            </div>
        </div>
    )
}