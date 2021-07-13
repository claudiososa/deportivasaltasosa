import React from 'react';
import '../assets/styles/ItemListContainer.css';
import ItemCount from './ ItemCount';


export default function ItemListContainer(props) {
    return (
        <div class="itemList">
            <div className="container">
                <p>Lista de Saludos</p>
            <ul id="list-items">
                { props.products.map( (item, index) => (
                    <li key={index}>
                        <div className="item-container">
                            <p>Art {item.id} {item.name} </p>
                            <div className="item">
                                <span>Cantidad</span>
                                <ItemCount stock={item.stock} initial="1" />
                            </div>
                        </div>
                    </li>
                ))
                }
            </ul>
            </div>
        </div>
    )
}
