import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import '../assets/styles/ItemList.css';


const products = [
    {id:1,title:'Remera',description:'remera',price:1000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20200923/1796/89959988.jpg',stock:3,categoryId:1},
    {id:2,title:'Zapatilla',description:'zapatilla',price:2000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210513/2125/42867958.jpg',stock:4,categoryId:3},
    {id:3,title:'Short',description:'Short',price:3000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210708/2014/20763251.jpg',stock:10,categoryId:4},
    {id:4,title:'Top',description:'Top',price:4000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210428/2014/75597913.jpg',stock:5,categoryId:4},
    {id:5,title:'Calza',nadescriptionme:'Calza',price:1300,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210601/2014/41776782.jpeg',stock:6,categoryId:2},
    {id:6,title:'Remera',description:'Remera',price:4000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210428/2014/75597913.jpg',stock:4,categoryId:1},
  ];

const ItemDetailContainer = () => {

    const [Item, setItem] = useState({});
    const itemId = useParams();

    const getItems = async () => {
        let data = new Promise ( (resolve, reject) =>  {
            setTimeout( () => {
                const item = products.find( item => item.id == itemId.id)
                resolve (item);
            },100)
        })

        let dataItem = await data
        setItem(dataItem)
    }

    useEffect(() => {
        getItems()
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