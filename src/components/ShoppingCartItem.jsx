
import React from 'react';
import '@styles/ShoppingCartItem.scss'
import iconClose from '@icons/icon_close.png'

function ShoppingCartItem({product}) {
    return (
        <div className="ShoppingCart__item">
            <div>
                <figure>
                    <img src={product.images[1]} />
                </figure>
                <p>
                    {product.title}
                </p>
            </div>
            <div>
                <p>$ {product.price}</p>
                <img src={iconClose} />
            </div>
        </div>
    );
};

export { ShoppingCartItem };