import React, {Component} from 'react'
import {withUser} from './UserProvider'
import Loading2 from './Loading2'



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
                <h1 className = "newsforme">create an account, cancel anytime</h1>
                    <div className = "home" >
                        { this.props.toggle ?
                            this.props.loginLoading === 'off'?
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
                            <Loading2/>
                            
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
                                placeholder ='enter password:'
                                value = {this.props.password}
                                onChange = {this.props.handleChange}
                            />

                            <input
                                className = "login1"
                                type ='text'
                                name ='repeat'
                                placeholder ='repeat password:'
                                value = {this.props.repeat}
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

