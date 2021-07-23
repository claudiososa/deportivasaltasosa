import React, { useState } from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import '../assets/styles/ItemCount.css';

const ItemCount = (props) => {

    const [count, setCount] = useState(props.initial);

    const addCount = () => {
        if(count < props.stock){
            setCount( count + 1)
        }
    }


    const subtractCount = () => {
        if(count > 1){
            setCount( count - 1)
        }
    }

    //render() {
        return (
            <div className="count-container">
                <span onClick={subtractCount}>
                    <ArrowLeftIcon style={{ fontSize: 40}} />
                </span>
                <span >{count}</span>
                <span onClick={addCount}>
                    <ArrowRightIcon style={{ fontSize: 40}} />
                </span>
            </div>
        )
    //}
}

export default ItemCount;