import React from 'react'
import { Link } from 'react-router-dom'
import {withUser} from './UserProvider'


const Navbar = (props) => {
    return (
        <div className="navbar">
            
            {props.token ? <Link to = "/">Home</Link> : null}
            {props.token ? <Link to = "/saved">Saved</Link> : null}
           
        </div>
    )
}

export default withUser(Navbar)