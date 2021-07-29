import React, {useContext} from 'react'
import CartContext from '../context/CartContext'
import '../assets/styles/cart.css';

export default function Cart() {

    const { cart,removeItem,clear } = useContext(CartContext)


    console.log(cart);
    return (
        <div className="showContent">
            <div className={ (cart.length > 0) ? "hideContent" : "showContent" }>
                <h1>No hay productos agregados en el carrito</h1>
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
                        <td><button onClick={ () =>  removeItem(item.id) }>Quitar</button></td>
                    </tr>
                    </>
                )
                } )}
            </table>
            <button onClick={ clear }><strong>Vaciar Carrito</strong></button>
            </div>
        </div>
    )
}
