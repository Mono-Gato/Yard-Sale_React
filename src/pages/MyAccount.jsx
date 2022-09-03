import React from 'react'
import '../styles/MyAccount.scss'

function MyAccount () {
    return(
        <div className="myAccount">
            <div className="form-container">
                <h1 className="title">My account</h1>
                <div>
                    <label className="label label--name">Name</label>
                    <p className="value">Camila Yokoo</p>
                    <label className="label label--email">Email address</label>
                    <p className="value"> camilayokoo@gmail.com</p>
                    <label className="label label--password">Password</label>
                    <div className="value">********</div>
                </div>
                <button className="button button--secondary">
                    edit-account
                </button>
            </div>
        </div>
    )
}

export { MyAccount }