import React from 'react'
import '../styles/RecoveryPassword.scss'
import logo from '../assets/Logos/logo_yard_sale.svg';

function RecoveryPassword () {
    return(
        <div className="password">
            <div className="form-container">
                <img className="logo" src={logo} alt="Logo Yard Sale" />
                <h1 className="title">Create a new password</h1>
                <p className="subtitle"> Enter a new password for your account</p>
                <form action className="form">
                    <label htmlFor="password__password" className="label label--password">Password</label>
                    <input type="password" className="input input--password" placeholder="********" id="password__password" />
                    <label htmlFor="password__re-password" className="label label--password">Re-enter password</label>
                    <input type="password" className="input input--password" placeholder="********" id="password__re-password" />
                    <input type="submit" defaultValue="Confirm" className="button login__button" />
                </form>
            </div>
        </div>

    )
}

export { RecoveryPassword }