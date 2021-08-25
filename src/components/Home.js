import React, { useState } from 'react';
import SlidePhoto from '../components/SlidePhoto';
import '../assets/styles/Home.css';
import Item from './Item';
import { getFirestore } from '../firebase';

const Home = () => {
    const [itemList, setItemList] = useState([]);

    const db = getFirestore();
    const query = db.collection('products');

    query.where("offer", "==",true).get().then((querySnapshot) => {
        if(querySnapshot.size === 0){
            console.log('no hay resultados');
        }
        let data = querySnapshot.docs.map( doc =>  {
           return  {id:doc.id, ...doc.data()}
        });
        setItemList(data)
    })
    return (
        <div>
            <SlidePhoto />
            <div className="offer">Aprovecha nuestras Ofertas</div>
            <div className="item-list-container">
            {itemList.map( item => {
                return (
                    <div className="itemc" key={item.id}>
                    <Item
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        pictureUrl={item.pictureUrl}
                    />
                    </div>
                )
                })
            }
        </div>
        </div>
    )
}

export default Home;