import React, { Component } from 'react'
import axios from 'axios'
import Button1 from './Button1'
import Login from './Login'
import {withUser} from './UserProvider'
import {withButton} from './ButtonProvider'
import Scroll from 'react-scroll'
import Loading from './Loading'



class Home extends Component { 
    constructor(props){
        super(props)
        this.state = {
           sourceName: '',
        }
    }

    
    componentDidMount(){
        this.props.getMount()
    }
   
   
    saveAll = () => {
        const final = this.props.articles
        for(let i = 0; i < final.length; i++){
            final[i].userID = this.props.user._id
            final[i].channel = this.props.name
            axios.post(`/articles/${final[i].title}`, final[i]).then(response => {
                console.log(response.data)
            }).catch(err => console.log(err.response.data.errMsg))
        }
         alert(`All articles from ${this.props.sourceName || this.props.name} are saved.`)
    }
    
    
    save = (title, urlToImage, description, url, source) => {
        const article1 = {
            title: title,
            urlToImage: urlToImage,
            description: description,
            url: url,
            source: {name: source},
            channel: this.props.name,
            userID: this.props.user._id
        }
        
        axios.post(`/articles/${title}`, article1).then(response => {
            alert(response.data)
        })
        .catch(err => console.log('err.res.data.errMsg',err.response.data.errMsg))
    }
   

    handleErase = () => {
        var answer = window.confirm("This will permanently delete your account, are you sure you want to proceed?")
            if(answer){
                this.props.handleDelete2(this.props.user._id)
                this.props.logout()
                this.props.deleteAll(this.props.user._id)
            }
    }
   
   
    render(){
        const article = this.props.articles.map(item => {
        return(
                <div className = "newsDiv" key = {Math.random()} >
                    <img alt = '' src = {item.urlToImage} />
                    <h1> {item.title}</h1>
                    <h2> {item.description}</h2>
                    <div className = 'bottomWrap'>
                        {this.props.token ? <button onClick = {() => this.save(item.title, item.urlToImage, item.description, item.url, item.source.name)} >Save </button> : <div className = 'buttonReplace'></div>}
                        <h2 className = "name">{item.source.name}</h2>
                        <a className = "readMore"  href={item.url}>read more</a>
                    </div>
                </div>
        )
    })
       
        return(
            <div className = 'bbcDiv'>
                <div className = "topSpace">
                </div>
                <Button1/>
                <div className = 'buttonWrap'>
                <div className = "h1wrap">
                    <h1 className = 'sourceName1'> Breaking international news and headlines | News For You</h1>
                    <h1 className = 'sourceName3'> {this.props.token ? `Signed in as: ${this.props.user.username}` : 'Login to save articles'}</h1>
                </div>   
                    <Login/>
                    {this.props.token && <div className = 'saveallDiv'>
                                            <h1 className = 'saveallH1'>save all the articles from <span style = {{color: 'rgb(173, 1, 1)'}}>{this.props.name}</span></h1>
                                            <button className = 'saveAll' onClick = {() => this.saveAll()}>Save all</button>
                                         </div>}
                    <div className = 'bottomContainer'>  
                        <div className = "topP" onClick = {() => Scroll.animateScroll.scrollToTop()}></div>             
                        {this.props.token && <button className = "deleteAccount" onClick = {this.handleErase}>Delete Account</button>}
                       
                    </div>
                </div>
                {this.props.loading === 'on' ? <div className = 'mainLoad'><Loading/></div> : this.props.articles.length ? article : <h1 className = 'databaseH1'>not available</h1>}
            </div>
        )
    }
}

export default withButton(withUser(Home))