import React from 'react'
import { Link } from 'react-router-dom'
import {withUser} from './UserProvider'
import {withButton} from './ButtonProvider'


const Navbar = (props) => {
    return (
        <div className="navbar">
            {props.token ? <Link  to = '/'  onClick = {props.handleToggle}>Read</Link> : null}
            {props.token ? <Link to = "/saved">Saved</Link> : null}
            {props.token ? <Link to = "/"  onClick = {props.logout}>Log out</Link> : null}
        </div>
    )
}

export default withButton(withUser(Navbar))