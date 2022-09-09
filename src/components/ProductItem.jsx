import React from 'react';
import iconAddCart from '@icons/bt_add_to_cart.svg'
import '@styles/ProductItem.scss'

function ProductItem( {price, title, images} ){
    return (
        <div className="card">
            <img src={images[0]} className="card__image" />
            <div className="card__info">
                <div className="info__text">
                    <p>$ {price}</p>
                    <p>{title}</p>
                </div>
                <figure className="info__image">
                    <img src={iconAddCart} />
                </figure>
            </div>
        </div>
    );
};

export { ProductItem };