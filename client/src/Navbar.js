import React from 'react'
import { Link } from 'react-router-dom'
import {withUser} from './UserProvider'
import {withButton} from './ButtonProvider'
import { Server } from 'net';


const Navbar = (props) => {
    
    function logout3(){
        props.logout2()
        props.getMount()
    }
    
    return (
        <div className="navbar">
            {props.token ? <Link  to = '/'  onClick = {props.handleToggle}>Home</Link> : <p className = 'navbarP'>News For You</p>}
            {props.token && <Link to ='/saved'>Saved</Link>}
            {props.token && <Link to = "/"  onClick = {()=> logout3()}>Log out</Link>}
        </div>
    )
}

export default withButton(withUser(Navbar))