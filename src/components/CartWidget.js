import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartContext from '../context/CartContext'

export default function CartWidget() {

    const { totalQty } = useContext(CartContext)
    return (
        <span>
            <span>{ totalQty }</span>
            <Link to="/cart"><ShoppingCartIcon /></Link>
        </span>
    )
}
