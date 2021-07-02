import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './styles/NavBar.css'
import logo from './images/logo-deportiva.png';

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
                    <li><ShoppingCartIcon /></li>
                </ul>
            </div>
        </div>
    )
}