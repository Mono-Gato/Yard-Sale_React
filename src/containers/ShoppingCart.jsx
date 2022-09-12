import React, { useContext } from 'react'
import { AppContext } from '@context/AppContext'
import iconArrow from '@icons/flechita.svg'
import '@styles/ShoppingCart.scss'
import { ShoppingCartItem } from '@components/ShoppingCartItem'


function ShoppingCart() {
    const { state } = useContext(AppContext)
    return(
        <aside className="shoppingCart">
            <div>
                <div className="shoppingCart__back">
                    <img src={iconArrow} />
                    <p>
                        Shopping cart
                    </p>
                </div>
                <div className="shoppingCart__products">
                    {state.cart.map(product=>(
                        <ShoppingCartItem
                            product = {product}
                            key = {`cartItem-${product.id}`}
                        />
                    ))}
                    
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