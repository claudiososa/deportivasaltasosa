import React from 'react'
import '../assets/styles/Item.css';
import  ItemCount from './ ItemCount';

const ItemDetail = (props) =>  {
    console.log('props',props);
    return (
        <div className="item-container">
            <div>
                <img src={props.pictureUrl} width="800px" alt="" srcset="" />
                <p>Art.{props.id}</p>
                <p><strong>{props.title}</strong></p>
                <p>{props.description}</p>
                <p>$ {props.price}</p>
                <ItemCount stock={props.stock}
                            initial={ 1 }/>
            </div>
        </div>
    )

}

export default ItemDetail;