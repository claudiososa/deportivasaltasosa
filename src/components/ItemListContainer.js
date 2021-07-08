import React from 'react';
import '../assets/styles/ItemListContainer.css';

export default function ItemListContainer(props) {
    return (
        <div class="itemList">
            <div className="container">
                <p>Lista de Saludos</p>
            <ul id="list-items">
                { props.greetings.map( (item, index) => (
                    <li key={index}>{item.greeting}</li>
                ))
                }
            </ul>
            </div>
        </div>
    )
}
