import React from 'react'
import '../assets/styles/Item.css';

export default function Item(props) {
    return (
        <div className="item-container">
            <div>
                <img src={props.pictureUrl} width="300px" alt="" srcset="" />
                <p>Art.{props.id}</p>
                <p><strong>{props.title}</strong></p>
                <p>$ {props.price}</p>
            </div>
        </div>
    )
}
