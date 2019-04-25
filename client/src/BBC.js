import React, { Component } from 'react'
import axios from 'axios'
import {withUser} from './UserProvider'




 class BBC extends Component { 
    constructor(props){
        super(props)
        this.state = {
            articles:[],
            articles2: [],
            articles3: [],
            userID: this.props.user._id
        }
    }

    
   
    
    componentDidMount(){
        axios.get("https://newsapi.org/v2/top-headlines?country=au&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa")
        .then(response => {
            this.setState({
                articles: response.data.articles
            })
        })
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa")
        .then(response => {
            this.setState({
                articles2: response.data.articles
            })
        })
    }
   
   

    
    saveAll = () => {
        const articles4 = this.state.articles.concat(this.state.articles2)
        const final = articles4.concat(this.state.articles3)
        for(let i = 0; i < final.length; i++){
            final[i].userID = this.state.userID
            axios.post(`/articles/${final[i].title}`, final[i]).then(response => {
                console.log(response.data)
            }).catch(err => console.log(err.response.data.errMsg))
        }
         alert("all articles were saved")
    }
    
    
    
    
    save = (title, urlToImage, description) => {
        const article1 = {
            "title": title,
            "urlToImage": urlToImage,
            "description": description,
            "userID": this.state.userID
        }
        axios.post(`/articles/${title}`, article1).then(response => {
            alert(response.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
        
    }
   
   
   
    render(){
        const articles4 = this.state.articles.concat(this.state.articles2)
        const final = articles4.concat(this.state.articles3)
        const article = final.map(item => {
        return(
            <div key = { Math.random()}>
                <div className = "newsDiv" >
                    <h1> {item.title}</h1>
                    <img alt = '' src={item.urlToImage} />
                    <h2> {item.description}</h2>
                    <button onClick = {() => this.save(item.title, item.urlToImage, item.description, item.url)}>Save</button>
                    <a className = "readMore"  href={item.url}>read more</a>
                </div>
            </div>
        )
    })
       
        return(
            <div className = 'bbcDiv'>
                <div className = "topSpace">
                </div>
                <button className = 'saveAll' onClick = {() => this.saveAll()}>Save all</button>
                <button className = 'logout' onClick = {this.props.logout}>Log out</button>
                {article}
             </div>
        )
    }
}

export default withUser(BBC)