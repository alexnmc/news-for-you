import React, { Component } from 'react'
import axios from 'axios'
import {withUser} from './UserProvider'
import Loading from './Loading'


class Saved extends Component { 
    constructor(props){
        super(props)
        this.state = {
            idNumber : this.props.user._id,
            articles:[],
            request: 'on'
        }
    }

    componentDidMount(){
        this.getArticles(this.props.user._id)
    }
   
    
    getArticles = (id) => {
        axios.get(`/articles/${id}`)
         .then(response => {
            this.setState({
                articles: response.data,
                request: 'off'
            })
        })
    }
    
    
    delete = (id) => {
        axios.delete(`/articles/${id}`).then(response => {
             console.log(response.data)
        })
        this.setState({
            articles: this.state.articles.filter(item => item._id !== id)
        })
    }
    

    deleteAll = (id) => {
        if(this.state.articles.length){
            var answer = window.confirm("Are you sure you want to delete all your saved articles?")
                if(answer){
                    axios.delete(`articles/delete/${id}`).then(response => {
                     console.log(response.data)
                    })
                    this.setState({
                        articles: []
                    })
            }
        }else{
            alert("you don't have any saved articles")
        }    
    }   

    
    render(){
        
    let names = []
    for(let i = 0; i < this.state.articles.length; i++){
        if(!names.includes(this.state.articles[i].channel)){  // sorting each article to it's container
                names.push(this.state.articles[i].channel)
        }}
    
    const container = names.map(item2 => {
        return(
            <div key = {Math.random()}>
                <h1 className = 'containerH1'>{`Saved from ${item2}`}</h1>
                <div className = 'container'>
                    {this.state.articles.map(item  => {
                            if(item.channel === item2){
                                return(
                                    <div key = {Math.random()}>
                                        <div className = "newsDiv2">
                                            <img alt = '' src={item.urlToImage}/>
                                            <h1 className = 'savedH1'>{item.title}</h1>
                                            <h2 className = 'savedH2'> {item.description}</h2>
                                            <div className = 'bottomWrap'>
                                                <button className = 'delete' onClick = {() => this.delete(item._id)}>Delete</button>
                                                <h2 className = 'name2'>{item.source.name}</h2>
                                                <a className = "readMore2"  href={item.url}>read more</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }else{
                                return null // I had an error message without this...
                            }
                      })
                    }
                </div>
            </div>
        )
    })

    return(
            <div>
            <div className = 'saved'>
                <div className = "topSpace2">
                <div>
                    <button className = 'deleteAll' onClick = {() => this.deleteAll(this.state.idNumber)}>Delete all</button>
                </div>
                    <h1 className = 'sourceName2'>{this.state.articles.length > 0 && `You have ${this.state.articles.length} saved articles:`}</h1>
                </div>
                {this.state.request === 'on' ? 
                <div className = 'savedLoad'><Loading/></div> 
                : 
                this.state.articles.length ? 
                    container  
                    :
                    <h1 className = 'databaseH1'>You don't have any saved articles</h1>}
            </div>
            </div>
    )
    }
}


export default withUser(Saved)
              