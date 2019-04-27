import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Saved from './Saved'
import Home from './Home'
import BBC from './BBC'
import {withUser} from './UserProvider'




class App extends Component {
    render(){
        return (
            <div className = "div">
                <Navbar/>
                <Switch>
                   
                    <Route path = '/saved' component = {Saved}/>
                    <Route path = '/' component = {BBC}/>
                   
                </Switch>
            </div>
        )
    }
}

export default withUser(App)