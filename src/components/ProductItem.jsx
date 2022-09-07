import React from 'react';
import iconAddCart from '../assets/Icons/bt_add_to_cart.svg'
import '../styles/ProductItem.scss'

function ProductItem(){
    return (
        <div className="card">
            <img src="https://images.pexels.com/photos/5465162/pexels-photo-5465162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card__image" />
            <div className="card__info">
                <div className="info__text">
                    <p>$ 120,00</p>
                    <p>Bmx</p>
                </div>
                <figure className="info__image">
                    <img src={iconAddCart} />
                </figure>
            </div>
        </div>
    );
};

export { ProductItem };