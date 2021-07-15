import React,{ useState, useEffect} from 'react';
import Item from './Item';
import '../assets/styles/ItemList.css';


const products = [
    {id:1,title:'Remera',description:'remera',price:1000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20200923/1796/89959988.jpg',stock:3},
    {id:2,title:'Zapatilla',description:'zapatilla',price:2000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210513/2125/42867958.jpg',stock:2},
    {id:3,title:'Short',description:'Short',price:3000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210708/2014/20763251.jpg',stock:10},
    {id:4,title:'Top',description:'Top',price:4000,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210428/2014/75597913.jpg',stock:5},
    {id:5,title:'Calza',nadescriptionme:'Calza',price:1300,pictureUrl:'https://netivooregon.s3.amazonaws.com/attach/modelo/20210601/2014/41776782.jpeg',stock:6},
  ];


const ItemList = () => {

    const [ItemList, setItemList] = useState([]);

    useEffect(() => getItems())

    const getItems = async () => {
        let data = new Promise ( (resolve, reject) =>  {
            setTimeout( () => {
                resolve (products);
                reject( new Error('error'))
            },2000)
        })

        let list = await data
        setItemList(list)
    }

    return (
        <div className="item-list-container">
            {ItemList.map( item => {
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