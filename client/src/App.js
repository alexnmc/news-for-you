import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Saved from './Saved'
import Home from './Home'
import {withUser} from './UserProvider'
import Rates from './Rates'
import { Beforeunload } from 'react-beforeunload'




class App extends Component {
    render(){
        return (
            <div className = "div">
                <Beforeunload onBeforeunload={() => this.props.logout()}>
                <Navbar/>
                <Rates/>
                <Switch>
                    <Route path = '/saved' component = {Saved}/>
                    <Route path = '/' component = {Home}/>
                </Switch>
                </Beforeunload>
            </div>
        )
    }
}

export default withUser(App)