import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import '../assets/styles/ItemListContainer.css';
import Item from './Item';
//import ItemCount from './ ItemCount';
import ItemList from './ItemList';

const categories = [
    {id:1, name: 'remeras'},
    {id:2, name: 'pantalones'},
    {id:3, name: 'zapatillas'},
    {id:4, name: 'shorts'},
]


const products = [
    {id:1,title:'Remera',description:'remera',price:1000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20200923/1796/89959988.jpg',stock:3,categoryId:1},
    {id:2,title:'Zapatilla',description:'zapatilla',price:2000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210513/2125/42867958.jpg',stock:2,categoryId:1},
    {id:3,title:'Short',description:'Short',price:3000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210708/2014/20763251.jpg',stock:10,categoryId:2},
    {id:4,title:'Top',description:'Top',price:4000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210428/2014/75597913.jpg',stock:5,categoryId:3},
    {id:5,title:'Calza',nadescriptionme:'Calza',price:1300,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210601/2014/41776782.jpeg',stock:6,categoryId:4},
  ];

export default function ItemListContainer() {

    const [itemList, setItemList] = useState([]);
    const categoryId = useParams();

    useEffect(() => {
        console.log('categoryId',categoryId);
        getItems()
    })

    const getItems = async () => {
        let data = new Promise ( (resolve, reject) =>  {
            setTimeout( () => {
                if((categoryId.id)){
                    const productsFiltered = products.filter( item => item.categoryId == categoryId.id)
                    resolve(productsFiltered)
                } else {
                    resolve(products)
                }
            },2000)
        })

        let list = await data
        setItemList(list)
    }

    return (
        <div class="itemList">
            <div className="container">
                <aside>
                    <h3>Filtrar por</h3>
                    <p><Link to="/products">Ver todo</Link></p>
                    {categories.map((item) => {
                        return(
                            <p key={item.id}><Link to={`/category/${item.id}`}>{item.name}</Link></p>
                        )
                    })}
                </aside>
                <section>
                    <p><strong>Lista de Productos</strong></p>
                    <ItemList products={itemList} />
                </section>
            </div>
        </div>
    )
}
