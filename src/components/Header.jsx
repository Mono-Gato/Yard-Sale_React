import React, { useState } from 'react'
import '@styles/Header.scss'
import { Menu } from './Menu'
import iconMenu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import iconArrow from '@icons/flechita.svg'
import iconShoppingCart from '@icons/icon_shopping_cart.svg'

function Header () {
    const [ toggleMenu, setToggleMenu] = useState(false)
    const handleToggleMenu = () =>{
        setToggleMenu(!toggleMenu)
    }
    return(
        <nav className="navbar">
            <img  onClick={handleToggleMenu} src={iconMenu}  className="navbar__menu-icon" />
            <div className="navbar-left">
                <img className="navbar__logo" src={logo} />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li onClick={handleToggleMenu} className="navbar__email">
                        camilayokoo@gmail.com
                        <img src={iconArrow}  />
                    </li>
                    <li className="navbar__cart">
                        <img src={iconShoppingCart} />
                        <div>
                            2
                        </div>
                    </li>
                </ul>
            </div>
            {
                toggleMenu && <Menu />
            }
        </nav>
    )
}

export { Header }