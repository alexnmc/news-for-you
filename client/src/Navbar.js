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
             <h4 className = 'news4you'>News For You</h4>
            {props.token && <Link  to = '/'  onClick = {props.handleToggle}>Home</Link>}
            {props.token && <Link to ='/saved'>Saved</Link>}
            {props.token && <Link to = "/"  onClick = {()=> logout3()}>Log out</Link>}
            
        </div>
    )
}

export default withButton(withUser(Navbar))