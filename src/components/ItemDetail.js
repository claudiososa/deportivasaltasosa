import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/Item.css';
import  ItemCount from './ ItemCount';

const ItemDetail = (props) =>  {

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
        <div className="item-container">
            <div>
                <img src={props.pictureUrl} width="800px" alt="" srcset="" />
                <p>Art.{props.id}</p>
                <p><strong>{props.title}</strong></p>
                <p>{props.description}</p>
                <p>$ {props.price}</p>
                <span style={{"display": displayItemCount}}>
                <ItemCount onAdd={onAdd} stock={props.stock}
                            initial={ 1 }/>
                </span>
                <Link to="/cart"><button style={{ "display": displayElement }}>Termina tu compra</button></Link>
            </div>
        </div>
    )

}

export default ItemDetail;