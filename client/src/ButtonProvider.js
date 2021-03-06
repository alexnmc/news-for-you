import React, { Component } from 'react'
import axios from 'axios'
import Scroll from 'react-scroll'


const ButtonContext = React.createContext()


class ButtonProvider extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            url: localStorage.getItem("url") || 'us', //returns to the last page viewed
            name: localStorage.getItem("name") || "USA",
            sourceName: this.name,
            loading: 'on',
            switch: true
            
        }
    }
   
    getMount = () => {
        axios.get( `https://newsapi.org/v2/top-headlines?${this.state.url.length > 2 ? 'sources' : 'country'}=${this.state.url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
            .then(response => {
                this.setState({
                    articles: response.data.articles,
                    sourceName: this.state.sourceName,
                    loading: 'off'
                })
            })
    }

    loadingAnimation = () =>{
        this.setState({
            loading: 'on'
        })
    }

    getNewsSource= (url, name) => {  
        Scroll.animateScroll.scrollToTop()
        localStorage.setItem("url", url)
        localStorage.setItem("name", name)
        axios.get( `https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
                loading: 'off'
            })
        })
            this.setState(prevState=>{
                return{ 
                    sourceName: name,
                    url: localStorage.getItem("url"), //returns to the last page viewed
                    name: localStorage.getItem("name"),
                }
            })
    }
   
    getNewsCountry = (url, name) => { 
        Scroll.animateScroll.scrollToTop()
        localStorage.setItem("url", url) 
        localStorage.setItem("name", name)
        axios.get( `https://newsapi.org/v2/top-headlines?country=${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
                loading: 'off'
            })
        })
            this.setState(prevState=>{  
                return { 
                    sourceName: name,
                    url: localStorage.getItem("url"), 
                    name: localStorage.getItem("name"),
                }
            })
    }
        
    deleteAll = (id) => {
        axios.delete(`articles/delete/${id}`).then(response => {
            console.log(response.data)
        })
    }

    editSwitch = () =>{
        this.setState(prevState => {
            return {
                switch: !prevState.switch,
            }
        })
    }
    
    
    render() {
        return (
            <ButtonContext.Provider
                value={{
                    getNewsSource: this.getNewsSource,
                    getNewsCountry: this.getNewsCountry,
                    getMount: this.getMount,
                    deleteAll: this.deleteAll,
                    loadingAnimation: this.loadingAnimation,
                    editSwitch: this.editSwitch,
                    ...this.state
                }}>
                {this.props.children}
            </ButtonContext.Provider>
        )
    }
}


export default ButtonProvider


export const withButton = C => props => (
    <ButtonContext.Consumer>
        {value => <C {...props} {...value}/> }
    </ButtonContext.Consumer>
)