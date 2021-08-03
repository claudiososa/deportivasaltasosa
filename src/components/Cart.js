import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext'
import '../assets/styles/cart.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function Cart() {

    const { cart,removeItem,clear, totalPrice } = useContext(CartContext)

    return (
        <div className="showContent">
            <div id="containerCar">
                Contenido de carrito
            </div>
            <div className={ (cart.length > 0) ? "hideContent" : "showContent" }>
                <h1>No hay productos agregados en el carrito</h1>
                <Link to="/products">ir a Catalogo de productos </Link>
            </div>
            <div className={ (cart.length > 0) ? "showContent" : "hideContent" }>
                <strong><h1>Carrito de compras</h1></strong>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Descripcion</th>
                    <th>Precio U.</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Quitar</th>
                </thead>
            {cart.map( item => {
                return (<>
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                        <td>{ item.price * item.qty }</td>
                        <td><a href="#" onClick={ () =>  removeItem(item.id) }><DeleteForeverIcon /></a></td>
                    </tr>
                    </>
                )
                } )}
            </table>
            <span><strong>Total: {totalPrice}</strong></span>
            <button onClick={ clear }><strong>Vaciar Carrito</strong></button>
            </div>
        </div>
    )
}
