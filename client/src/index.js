import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './style.css'
import UserProvider from './UserProvider'
import ButtonProvider from './ButtonProvider'

ReactDOM.render(
    <BrowserRouter>
    <ButtonProvider>
    <UserProvider>  
        <App/>
    </UserProvider>  
    </ButtonProvider> 
    </BrowserRouter>, 

document.getElementById('root'))