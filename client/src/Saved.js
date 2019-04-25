import React, { Component } from 'react'
import axios from 'axios'
import {withUser} from './UserProvider'



 class Saved extends Component { // no need to exposrt on the bottom of the page
    constructor(props){
        super(props)
        this.state = {
            articles:[],
            idNumber : this.props.user._id

        }
    }

   
    componentDidMount(){
        this.getArticles(this.state.idNumber)
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
        axios.delete(`articles/delete/${id}`).then(response => {
            alert(response.data)
        })
       
        this.setState({
            articles: []
         })
    }

    
   
   
    render(){
        const article = this.state.articles.map(item => {
        return(
           <div key = {Math.random()}>
               <div className = "newsDiv2" >
                    <h1> {item.title}</h1>
                    <img alt = '' src={item.urlToImage} />
                    <h2> {item.description}</h2>
                    <button className = 'delete' onClick = {() => this.delete(item._id)}>Delete</button>
                    <a className = "readMore"  href={item.url}>read more</a>
                </div>
           </div>
        )
    })
       
        return(
            <div className = 'saved'>
                <div className = "topSpace">
                <button className = 'deleteAll' onClick = {() => this.deleteAll(this.state.idNumber)}>Delete all</button>
                </div>
                {this.state.articles.length ? article : <h1 className = 'databaseH1'>You don't have any saved articles</h1>}
            </div>
        )
    }
}


export default withUser(Saved)
              