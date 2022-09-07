
import React from 'react';
import '../styles/ShoppingCartItem.scss'
import iconClose from '../assets/Icons/icon_close.svg'

function ShoppingCartItem() {
    return (
        <div className="ShoppingCart__item">
            <div>
                <figure>
                    <img src="https://images.pexels.com/photos/5465162/pexels-photo-5465162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt />
                </figure>
                <p>
                    Bmx
                </p>
            </div>
            <div>
                <p>$ 120,00</p>
                <img src={iconClose} alt />
            </div>
        </div>
    );
};

export { ShoppingCartItem };