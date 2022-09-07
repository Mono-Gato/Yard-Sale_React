import React from 'react'
import '../styles/CheckoutItem.scss'

function CheckoutItem() {

    return(
        <div className="checkout__item">
            <div>
                <figure>
                    <img src="https://images.pexels.com/photos/1018483/pexels-photo-1018483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
                </figure>
                <p>
                    Skateboard
                </p>
            </div>
            <p className="price">
                $ 35,00
            </p>
        </div>

    )
}

export { CheckoutItem }