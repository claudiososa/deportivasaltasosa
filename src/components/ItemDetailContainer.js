import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import '../assets/styles/ItemList.css';

const products = [
    {id:1,title:'Remera',description:'Remera manga corta, Algodon 100%',price:1000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20200923/1796/89959988.jpg',stock:3},
    {id:2,title:'Zapatilla',description:'zapatilla',price:2000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210513/2125/42867958.jpg',stock:2},
    {id:3,title:'Short',description:'Short',price:3000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210708/2014/20763251.jpg',stock:10},
    {id:4,title:'Top',description:'Top',price:4000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210428/2014/75597913.jpg',stock:5},
    {id:5,title:'Calza',nadescriptionme:'Calza',price:1300,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210601/2014/41776782.jpeg',stock:6},
  ];



const ItemDetailContainer = () => {

    const [Item, setItem] = useState([]);

    useEffect(() => getItems())

    const getItems = async () => {
        let data = new Promise ( (resolve, reject) =>  {
            setTimeout( () => {
                resolve (products);
                reject( new Error('error'))
            },2000)
        })

        let dataItem = await data
        setItem(dataItem[0])
    }

    return (
        <div className="item-list-container">
            <p>Data for Item Detail</p>
            <div>
              <ItemDetail id={Item.id}
                          title = {Item.title}
                          pictureUrl = {Item.pictureUrl}
                          price = {Item.price}
                          description = {Item.description}
              />
            </div>
        </div>
    )
}

export default ItemDetailContainer;