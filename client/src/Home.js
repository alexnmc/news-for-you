import React, {Component} from 'react'
import {withUser} from './UserProvider'



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
            {!this.props.token  ?
                <div className = 'homeWrap'>
                <h1 className = "newsforme">Create an account, cancel anytime:</h1>
                    <div className = "home">
                        { this.props.toggle ?
                            <div className = 'logIn'>
                            <form  onSubmit = {this.props.handleLogin} className='loginForm'>
                                <h4>Log in:</h4>
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
                                <button className = 'loginButton'>Log in</button>
                            </form>
                            <button className ='loginButton' onClick = {this.props.editToggler2}>Sign up</button>
                    </div>
                        
                    :
                    
                    <div className = 'logIn'>
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
                    </div>            
                    }
                </div>
            </div>
            : 
           null
        }
        </div> 
        )
    }
}


export default withUser(Home)

