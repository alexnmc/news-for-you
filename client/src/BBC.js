import React, { Component } from 'react'
import axios from 'axios'
import Button1 from './Button1'
import {withUser} from './UserProvider'
import {withButton} from './ButtonProvider'




 class BBC extends Component { 
    constructor(props){
        super(props)
        this.state = {
           
            userID: this.props.user._id
        }
    }

    
   
    
    componentDidMount(){
        this.props.getMount()
       
    }
   
   

    
    saveAll = () => {
        const final = this.props.articles
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
        
        const article = this.props.articles.map(item => {
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
                <Button1/>
                <button className = 'saveAll' onClick = {() => this.saveAll()}>Save all</button>
                <button className = 'logout' onClick = {this.props.logout}>Log out</button>
                {article}
             </div>
        )
    }
}

export default withButton(withUser(BBC))