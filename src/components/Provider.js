import React, { useState } from 'react'
import { Provider } from '../context/CartContext'

const CustomProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (item, qty) => { // agregar cierta cantidad de un ítem al carrito
        let duplicate = isInCart(item.id)

        if (duplicate) {//si el producto ya existe en el carrito, solo modifico cantidad

            let cartTmp = cart;
            cartTmp.find(element => element.id === item.id).qty = qty;
            setCart(cartTmp);

        } else {// el producto no existe en el carrito
            setCart([...cart, { ...item, qty } ]);
        }
        setTotalQty(prev => prev + qty);
    }
    const removeItem = (id) => { // Remover un item del cart usando su id
        let cartTmp = cart.filter(element => element.id != id);;
        setCart(cartTmp);
    }
    const clear = () => { // Remover todos los items
        setCart([]);
        setTotalQty(0);
        setTotalPrice(0);
    }

    const isInCart = (id) => { //true|false
        const existe = cart.find(item => item.id === id);

        if(existe===undefined) {
            return false
        } else {
            return true
        }

    }

    return (
        <div>
            <Provider value={{ cart, setCart, addToCart, removeItem, clear, isInCart, totalQty, totalPrice }}>
                {children}
            </Provider>
        </div>
    )
}

export default CustomProvider