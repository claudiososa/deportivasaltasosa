import React from 'react'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function CartWidget() {
    return (
        <span>
            <Link to="/cart"><ShoppingCartIcon /></Link>
        </span>
    )
}
