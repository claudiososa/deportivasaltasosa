import React, { useState } from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import '../assets/styles/ItemCount.css';

const ItemCount = ({initial, stock, onAdd}) => {

    const [displayElement,setDisplayElement] = useState('block');
    const [count, setCount] = useState(initial);


    const addCount = () => {
        if(count < stock){
            setCount( count + 1)
        }
    }


    const subtractCount = () => {
        if(count > 1){
            setCount( count - 1)
        }
    }

    const addCart = () => {
        setDisplayElement('none');
        onAdd(count);
    }

    //render() {
        return (
            <div className="count-container">
                <div className="count-control">
                <span style={{"display": displayElement}}  onClick={subtractCount}>
                    <ArrowLeftIcon style={{ fontSize: 40}} />
                </span>
                <span >{count}</span>
                <span style={{"display": displayElement}} onClick={addCount}>
                    <ArrowRightIcon style={{ fontSize: 40}} />
                </span>
                </div>
                <button className="button-add-cart" onClick={addCart}>Agregar al Carrito</button>
            </div>
        )
    //}
}

export default ItemCount;