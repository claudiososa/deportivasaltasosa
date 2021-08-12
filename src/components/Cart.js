import React, {useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext'
import '../assets/styles/cart.css';
import  { getFirestore } from '../firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function Cart() {

    
    const { cart,removeItem,clear, totalPrice } = useContext(CartContext)
    const [confirmation,setConfirmation] = useState(false);


    // useEffect(()=> {
    //     const db = getFirestore();
    //     const collection = db.collection("products");
    //     const query = collection.doc('tCmlFLtHWca9ll0xnEpv');
    //     let update = query.update({stock:9})
    // },[])
    const createOrden =  ()  => {

        const items = cart.map((element) => {
            return {
                    "id":element.id,
                    "title":element.title,
                    "price":element.price
                }
        })
        const newOrder = {
            buyer:{"email":"claudio@gmail.com","name":"claudio","phone":"374848484848"},
            items: items,
            date:new Date().toISOString(),
            total:totalPrice
        }
           console.log('order',newOrder);

        const db = getFirestore();
        const collection = db.collection("orders");
        const query = collection.add(newOrder);
        query
            .then( result => {
                setConfirmation(result.id);
                const products = db.collection("products");
                const batch = db.batch();
                cart.map( item => batch.update(products.doc(item.id),{stock: item.stock - item.qty}))
                batch.commit().then( () => {
                    clear();
                })

            })
            .catch( error => {
                console.log(error)
            })

    }

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
                        <th>Descripcion</th>
                        <th>Precio U.</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th>Quitar</th>
                    </thead>
                {cart.map( item => {
                    return (<>
                        <tr>
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
                <button onClick={ createOrden }><strong>Confirmar Compra</strong></button>
                </div>
            <div>
                {confirmation && <p><strong>Gracias por tu compra: Tu Codigo confirmacion de compra es:  {confirmation}</strong></p>}
            </div>
        </div>
    )
}
