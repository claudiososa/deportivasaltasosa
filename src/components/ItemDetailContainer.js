import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import '../assets/styles/ItemList.css';
import { getFirestore } from '../firebase';

const ItemDetailContainer = () => {

    const [Item, setItem] = useState({});
    const itemId = useParams();

    useEffect(() => {
        const db = getFirestore();
        const query = db.collection("products");
        const item  = query.doc(itemId.id).get();
        item
            .then((doc)=> {
                setItem({id:doc.id,...doc.data()});
            })
    },[itemId])

    return (
        <div className="item-list-container">
            <div>
              <ItemDetail id={Item.id}
                          title = {Item.title}
                          pictureUrl = {Item.pictureUrl}
                          price = {Item.price}
                          description = {Item.description}
                          stock = {Item.stock}
              />
            </div>
        </div>
    )
}

export default ItemDetailContainer;