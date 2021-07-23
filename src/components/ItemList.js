
import React from 'react';
import Item from './Item';
import '../assets/styles/ItemList.css';

const ItemList = ({ products }) => {

    return (
        <div className="item-list-container">
            {products.map( item => {
                return (
                    <Item
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        pictureUrl={item.pictureUrl}
                    />
                )
                })
            }
        </div>
    )
}

export default ItemList;