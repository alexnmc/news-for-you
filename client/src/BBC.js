import React, { Component } from 'react'
import axios from 'axios'
import Button1 from './Button1'
import Home from './Home'
import {withUser} from './UserProvider'
import {withButton} from './ButtonProvider'
import Scroll from 'react-scroll'
import Loading from './Loading'
import Video from './Video'



class BBC extends Component { 
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
        .catch(err => console.log(err.response.data.errMsg))
    }
   

    handleErase = () => {
        var answer = window.confirm("This will permanently delete you account, are you sure you want to proceed?")
            if(answer){
                this.props.handleDelete2(this.props.user._id)
                this.props.logout()
                this.props.deleteAll(this.props.user._id)
            }
    }
   
   
    render(){
        const article = this.props.articles.map(item => {
        return(
            <div key = { Math.random()}>
                <div className = "newsDiv" >
                    <h1> {item.title}</h1>
                    <img alt = '' src={item.urlToImage} />
                    <h2> {item.description}</h2>
                    <div className = 'bottomWrap'>
                        {this.props.token && <button onClick = {() => this.save(item.title, item.urlToImage, item.description, item.url, item.source.name)} >Save </button>}
                        <h2 className = "name">{item.source.name}</h2>
                        <a className = "readMore"  href={item.url}>read more</a>
                    </div>
                </div>
            </div>
        )
    })
       
        return(
            <div className = 'bbcDiv'>
                <div className = "topSpace">
                </div>
                <div className = 'h1Wrapper'>
                    <h1 className = 'sourceName'> {`Reading now: ${this.props.sourceName || this.props.name}`}</h1>
                </div>
                <Button1/>
                <Home/>
                
                <div className = 'buttonWrap'>
                    <h1 className = 'sourceName3'> {this.props.token ? `Signed in as: ${this.props.user.username}` : 'Login to save articles:'}</h1>
                    {this.props.token && <div className = 'saveallDiv'>
                                            <h1 className = 'saveallH1'>{`save all the articles from ${this.props.name}`}</h1>
                                            <button className = 'saveAll' onClick = {() => this.saveAll()}>Save all</button>
                                         </div>}
                                         <Video/>
                                         
                    {this.props.token && <button className = "deleteAccount" onClick = {this.handleErase}>Delete Account</button>}
                    <div className = "topP" onClick = {() => Scroll.animateScroll.scrollToTop()}></div>
                </div>
                
                {this.props.loading === 'on' ? <Loading/> : this.props.articles.length ? article : <h1 className = 'databaseH1'>not available</h1>}
            </div>
        )
    }
}

export default withButton(withUser(BBC))