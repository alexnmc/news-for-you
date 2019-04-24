import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './Navbar'
import Saved from './Saved'
import Home from './Home'
import {withUser} from './UserProvider'




class App extends Component {
    render(){
        return (
            <div className = "div">
                <Navbar/>
                <Switch>
                    <Route exact path = "/saved" component = {Saved}/>
                    <Route path = '/' render = {props => props.token ? <Redirect to = "/home"/> : <Home/>}/>
                </Switch>
            </div>
        )
    }
}

export default withUser(App)