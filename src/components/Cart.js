import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext'
import '../assets/styles/cart.css';
import  { getFirestore } from '../firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default function Cart() {

    const { cart,removeItem,clear, totalPrice } = useContext(CartContext)
    const [confirmation,setConfirmation] = useState(false);
    const [buttonCreateOrden, setButtonCreateOrden] = useState(true);
    const [buyer, setBuyer] = useState(
        {
            name: '',
            email: '',
            phone:'',
        }
    )

    const  handleSubmit = async e => {
        e.preventDefault()
        createOrden();
       }
    const handleChange = e => {
        setBuyer({...buyer,
                [e.target.name]: e.target.value,
                })
    }

    const createOrden =  ()  => {

        const items = cart.map((element) => {
            return {
                    "id":element.id,
                    "title":element.title,
                    "price":element.price
                }
        })

        const newOrder = {
            buyer: buyer,
            items: items,
            date:new Date().toISOString(),
            total:totalPrice
        }

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
            <div className={(!confirmation) ? 'showContent cart' : 'hideContent' }>
                <div className="section-cart">
                <p><h2>Detalle de la orden</h2></p>
                <div className={ (cart.length > 0 ) ? "hideContent" : "showContent" }>
                    <h1>No hay productos agregados en el carrito</h1>
                    <Link to="/products">ir a Catalogo de productos </Link>
                </div>
                <div className={ (cart.length > 0 && !confirmation) ? "section-cart" : "hideContent" }>
                    
                    <div className="cart-container">
                        <div></div>
                        <div>Producto</div>
                        <div>Precio U.</div>
                        <div>Cantidad</div>
                        <div>Subtotal</div>
                        <div>Quitar</div>
                        {cart.map( item => {
                            return (
                            <>
                                <div className="item-img">
                                    <img src={item.pictureUrl} width="60px" alt="" srcset="" />
                                </div>
                                <div className="item-title">{item.title}</div>
                                <div className="item-price">{item.price}</div>
                                <div className="item-qty">{item.qty}</div>
                                <div className="item-subtotal">{ item.price * item.qty }</div>
                                <div className="item-premove"><a href="#" onClick={ () =>  removeItem(item.id) }><DeleteForeverIcon /></a></div>
                            </>
                            )
                        } )}
                    </div>
                </div>
                </div>
            </div>
            <div className={ (cart.length > 0 && !confirmation) ? "showContent confirm-data" : "hideContent" } >
                <div class="section-cart">
                    <p><h2>Paso 1 Confirmar Orden</h2></p>
                    <p><h3><span><strong>Total: {totalPrice}</strong></span></h3></p>
                    <button onClick={ () => {setButtonCreateOrden(false)} }><strong>Confirmar Orden</strong></button>
                    <button onClick={ clear }><strong>Vaciar Carrito</strong></button>
                </div>
            </div>
            <div className={ (cart.length > 0 && !confirmation) ? "showContent form-data" : "hideContent" }>
                <div class="section-cart">
                <p><h2>Paso 2 Confirmar compra</h2></p>
                <form onSubmit={handleSubmit} >
                    <input disabled={buttonCreateOrden} type="email" name="email"  value={buyer.email}  onChange={handleChange} placeholder="email" required></input>
                    <input disabled={buttonCreateOrden} type="name" name="name" value={buyer.name} onChange={handleChange} placeholder="nombre" required></input>
                    <input disabled={buttonCreateOrden} type="phone" name="phone" value={buyer.phone} onChange={handleChange} placeholder="Telefono" required></input>
                    <button  disabled={buttonCreateOrden} ><strong>Confirmar Datos y Comprar</strong></button>
                    {/* <button type="submit" disabled={buttonCreateOrden} onClick={ createOrden }><strong>Confirmar Datos y Comprar</strong></button> */}
                </form>
                </div>
            </div>
            <div>
                {confirmation && <p><strong>Gracias por tu compra: Tu Codigo confirmacion de compra es:  {confirmation}</strong></p>}
                {/* <div><Link to="/products">ir a Catalogo de productos </Link></div> */}
            </div>
    </div>

    )
}
