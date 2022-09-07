import React from 'react'
import iconArrow from '../assets/Icons/flechita.svg'
import { ShoppingCartItem } from '../components/ShoppingCartItem'

function ShoppingCart() {
    return(
        <aside className="shoppingCart inactive">
            <div>
                <div className="shoppingCart__back">
                    <img src={iconArrow} />
                    <p>
                        Shopping cart
                    </p>
                </div>
                <div className="shoppingCart__products">
                    <ShoppingCartItem />
                </div>
            </div>
            <div className="shoppingCart__resume">
                <div className="shoppingCart__total">
                    <p>
                        Total
                    </p>
                    <p>
                        $ 560,00
                    </p>
                </div>
                <button className="button shoppingCart__button">
                    Checkout
                </button>
            </div>
        </aside>

    )
}

export { ShoppingCart }