
import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext'
import '@styles/ShoppingCartItem.scss'
import iconClose from '@icons/icon_close.png'

function ShoppingCartItem({product}) {
    const { removeFromCart } = useContext(AppContext)
    const handleRemoveCart = item => {
        removeFromCart(item)
    } 
    return (
        <div className="ShoppingCart__item">
            <div>
                <figure>
                    <img src={product.images[1]} alt={product.title}/>
                </figure>
                <p>
                    {product.title}
                </p>
            </div>
            <div>
                <p>$ {product.price}</p>
                <img onClick={() => handleRemoveCart(product)} src={iconClose} alt="close" />
            </div>
        </div>
    );
};

export { ShoppingCartItem };