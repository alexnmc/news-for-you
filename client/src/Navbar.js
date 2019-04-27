import React from 'react'
import { Link } from 'react-router-dom'
import {withUser} from './UserProvider'
import {withButton} from './ButtonProvider'


const Navbar = (props) => {
    
    function logout3(){
        props.logout2()
        props.getMount()
    }
    
    return (
        <div className="navbar">
            <Link  to = '/'  onClick = {props.handleToggle}>Read</Link>
            {props.token && <Link to ='/saved'>Saved</Link>}
            {props.token ? <Link to = "/"  onClick = {()=> logout3()}>Log out</Link> : <Link to = "/" onClick = {props.handleToggle2}>Log in</Link> }
        </div>
    )
}

export default withButton(withUser(Navbar))