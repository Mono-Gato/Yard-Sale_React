import React from 'react'
import '../styles/OrdersItem.scss'
import iconArrow from '../assets/Icons/flechita.svg'

function OrdersItem(){

    return(
        <div className="orders__item">
            <p>
                <span>04.25.2021</span>
                <span>6 articles</span>
            </p>
            <div>
                <p className="price">
                    $ 560,00
                </p>
                <img src={iconArrow} />
            </div>
        </div>
    )
}

export { OrdersItem }