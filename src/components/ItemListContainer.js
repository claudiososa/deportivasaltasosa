import React from 'react';
import '../assets/styles/ItemListContainer.css';

const greetings = ["Buen dia", "Buen Tardes", "Buen Noches",  "Bienvenidos", "Hasta pronto", "Goodbye"];

export default function ItemListContainer() {
    return (
        <div class="itemList">
            <p>Lista de Saludos</p>
           <ul id="list-items">
              { greetings.map( (greeting ) => (
                   <li key={greeting}>{greeting}</li>
               ))
            }
           </ul>
        </div>
    )
}
