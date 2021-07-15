import React from 'react';
import '../assets/styles/ItemListContainer.css';
//import ItemCount from './ ItemCount';
import ItemList from './ItemList';


export default function ItemListContainer() {
    return (
        <div class="itemList">
            <div className="container">
                <p>Catalogo</p>
                <ItemList />
            </div>
        </div>
    )
}
