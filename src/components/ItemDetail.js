import React, { useContext, useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
// import '../assets/styles/ItemDetail.css';
import  ItemCount from './ ItemCount';
import CartContext from '../context/CartContext';

const ItemDetail = (props) =>  {

    const cartContext = useContext(CartContext);

    const [addItem, setAddItem] = useState(0);
    const [displayElement,setDisplayElement] = useState('none');
    const [displayItemCount,setDisplayItemCount] = useState('block');

    const onAdd = (quantityToAdd) =>  {
       setDisplayElement('block');
       setDisplayItemCount('none');
       setAddItem(quantityToAdd);

       console.log('visibility',displayElement)
        //Hemos recibido un evento del ItemCount
    }
    //console.log('props',props);
    return (
        // <div className="item-detail-container">
        <div className="detail-container">
            <div className="col-left">
                <img src={props.pictureUrl} width="250px" alt="" srcset="" />
            </div>
            <div className="col-right">
                <div className="details">
                    <p><strong>{props.title}</strong></p>
                    <p>Descripcion:{props.description}</p>
                    <p>$ {props.price}</p>
                </div>
                <div>

                
                    <span style={{"display": displayItemCount}}>
                    <ItemCount onAdd={onAdd} stock={props.stock}
                            initial={ 1 }/>
                    </span>
                    <Link to="/cart"><button className="button-confirm-cart" onClick={() => cartContext.addToCart(props, addItem)} style={{ "display": displayElement }}>Termina tu compra</button></Link>
                </div>
            </div>
        </div>
    )

}

export default ItemDetail;