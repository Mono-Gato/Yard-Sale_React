import React from 'react'
import '@styles/Login.scss'
import logo from '@logos/logo_yard_sale.svg';


function Login() {
    return(
        <div className="login">
            <div className="form-container">
                <img className="logo" src={logo} alt="Logo Yard Sale" />
                <form action className="form">
                    <label htmlFor="login__email" className="label label--email">Email address</label>
                    <input type="email" className="input input--email" placeholder="youremail@gmail.com" id="login__email" />
                    <label htmlFor="login__password" className="label label--password">Password</label>
                    <input type="password" className="input input--password" placeholder="********" id="login__password" />
                    <input type="submit" defaultValue="Log in" className="button login__button" />
                    <a href="/">Forgot my password</a>
                </form>
                <button className="button button--secondary">Sign up</button>
            </div>
        </div>

    )
}

export { Login }