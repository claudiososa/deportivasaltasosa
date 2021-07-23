import React from 'react'
import { Link } from 'react-router-dom';
import '../assets/styles/Item.css';

export default function Item(props) {
    return (
        <div className="item-container" key={props.id}>
            <Link to={`/item/${props.id}`}>
                <img src={props.pictureUrl} width="100%" alt="" srcset="" />
            </Link>
                <p>Art.{props.id}</p>
                <p><strong>{props.title}</strong></p>
                <p>$ {props.price}</p>
        </div>
    )
}
