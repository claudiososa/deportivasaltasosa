import React, { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import '../assets/styles/ItemListContainer.css';
import ItemList from './ItemList';
import { getFirestore } from '../firebase';

export default function ItemListContainer() {

    const [itemList, setItemList] = useState([]);
    const [categories, setCategories] = useState([]);
    const categoryId = useParams();

    useEffect(() => {
        const db = getFirestore();

        //get categories
        const queryCategory = db.collection('categories');
        queryCategory.get().then((querySnapshot) => {
            let categories = querySnapshot.docs.map( doc => doc.data())
            console.log(categories);
            setCategories(categories);
        })

        //get products
        const query = db.collection('products');

        if((categoryId.id)){
            let cate = categoryId.id;
            query.where("category.id", "==",parseInt(cate)).get().then((querySnapshot)=> {
                let data = querySnapshot.docs.map( doc =>  {
                    return  {id:doc.id, ...doc.data()}
                 });
                 setItemList(data)
            })
        } else {
            query.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no hay resultados');
            }
            let data = querySnapshot.docs.map( doc =>  {
               return  {id:doc.id, ...doc.data()}
            });
            setItemList(data)
            console.log('data',data);
        })

        }

    },[categoryId])

 
    return (
        <div className="itemList">
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
                    {/* <p><strong>Lista de Productos</strong></p> */}
                    <ItemList products={itemList} />
                </section>
            </div>
        </div>
    )
}
