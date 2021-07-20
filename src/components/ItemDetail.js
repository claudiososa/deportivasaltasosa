import React from 'react'
import '../assets/styles/Item.css';

const ItemDetail = (props) =>  {
    return (
        <div className="item-container">
            <div>
                <img src={props.pictureUrl} width="800px" alt="" srcset="" />
                <p>Art.{props.id}</p>
                <p><strong>{props.title}</strong></p>
                <p>{props.description}</p>
                <p>$ {props.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail;