
import React from 'react';
import '@styles/ShoppingCartItem.scss'
import iconClose from '@icons/icon_close.png'

function ShoppingCartItem({product}) {
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
                <img src={iconClose} alt="close" />
            </div>
        </div>
    );
};

export { ShoppingCartItem };