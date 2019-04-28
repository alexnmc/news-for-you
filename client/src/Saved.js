import React, { Component } from 'react'
import axios from 'axios'
import {withUser} from './UserProvider'



 class Saved extends Component { // no need to exposrt on the bottom of the page
    constructor(props){
        super(props)
        this.state = {
            idNumber : this.props.user._id,
            articles:[]
        }
    }

   
    componentDidMount(){
        this.getArticles(this.props.user._id)
    }
   
    
    getArticles = (id) => {
        axios.get(`/articles/${id}`)
         .then(response => {
            this.setState({
                articles: response.data
            })
        })
    }
    
    
    
    delete = (id) => {
        axios.delete(`/articles/${id}`).then(response => {
             alert(response.data)
        })
        this.setState({
            articles: this.state.articles.filter(item => item._id !== id)
        })
    }
    

    
    
    deleteAll = (id) => {
        var answer = window.confirm("Are you sure you want to delete all your saved articles?")
            if(answer){
                axios.delete(`articles/delete/${id}`).then(response => {
                alert(response.data)
                })
        
                this.setState({
                    articles: []
                })
        }
    }   

    
   
   
    render(){
        const article = this.state.articles.map(item => {
        return(
           <div key = {Math.random()}>
               <div className = "newsDiv2" >
                    <h1 className = 'savedH1'> {item.title}</h1>
                    <img alt = '' src={item.urlToImage} />
                    <h2> {item.description}</h2>
                    <div className = 'bottomWrap'>
                        <button className = 'delete' onClick = {() => this.delete(item._id)}>Delete</button>
                        <h2 className = 'name2'>{item.source.name}</h2>
                        <a className = "readMore2"  href={item.url}>read more</a>
                    </div>
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
                <h1 className = 'sourceName2'>{ this.state.articles.length ? 'Your saved articles:' : null}</h1>
                </div>
                {this.state.articles.length ? article : <h1 className = 'databaseH1'>You don't have any saved articles</h1>}
            </div>
            </div>
        )
    }
}


export default withUser(Saved)
              