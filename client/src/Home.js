import React, {Component} from 'react'
import {withUser} from './UserProvider'
import BBC from './BBC'




class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            
            
        }
    }

    
    handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    
    render(){
        return(
        <div>
                {!this.props.token ? 
                <div className = 'homeWrap'>
                <div className = "home">
                    <h1 className = "newsforme">News for You</h1>
                        { this.props.toggle ?
                        <div className = 'logIn'>
                        <form  onSubmit = {this.props.handleLogin} className='loginForm'>
                            <h4>Login:</h4>
                            <input
                                className = "login1"
                                type ='text'
                                name ='username'
                                placeholder  ='Username:'
                                value = {this.props.username}
                                onChange= {this.props.handleChange}
                            />

                            <input
                                className = "login1"
                                type ='text'
                                name ='password'
                                placeholder ='Password:'
                                value = {this.props.password}
                                onChange = {this.props.handleChange}
                            />

                            <button className = 'loginButton'>Login</button>
                        </form>
                        <button className ='loginButton' onClick = {this.props.editToggler2}>Sign up</button>
                    </div>
                    
                    :
                    
                    <form onSubmit={this.props.handleSignup} className='signUp'>
                        <h4>Sign Up:</h4>
                        
                        <input
                            className = "login1"
                            type='text'
                            name='username'
                            placeholder ='enter a username:'
                            value ={this.props.username}
                            onChange ={this.props.handleChange}
                        />

                        <input
                            className = "login1"
                            type ='text'
                            name ='password'
                            placeholder ='choose your password:'
                            value = {this.props.password}
                            onChange = {this.props.handleChange}
                        />
                        <button className = 'loginButton'>Sign up</button>
                    </form>               
                    }
                </div>
            </div>
            : 
            <BBC/>
            }
        </div> 
           
            )
    }
}


export default withUser(Home)

