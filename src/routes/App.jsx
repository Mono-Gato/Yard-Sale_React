import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../containers/Layout';
import '../styles/global.scss'

import { Login } from '../pages/Login';
import { RecoveryPassword } from '../pages/RecoveryPassword';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { NewPassword } from '../pages/NewPassword';

function App () {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route exact path='/login' element={<Login />}/>
                    <Route exact path='/recovery-password' element={<RecoveryPassword />}/>
                    <Route exact path='/new-password' element={<NewPassword />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
        
    )
}

export default App;