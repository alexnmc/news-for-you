import React, { Component } from 'react'
import axios from 'axios'


const ButtonContext = React.createContext()


class ButtonProvider extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            
            articles: [],
            toggle: true,
            url: localStorage.getItem("url") || 'us', //returns to the last page viewed
            name: localStorage.getItem("name") || "USA",
            sourceName: this.name
            
        }
    }
   
    
    
    getMount = () => {
        axios.get( `https://newsapi.org/v2/top-headlines?${this.state.url.length > 2 ? 'sources' : 'country'}=${this.state.url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
            .then(response => {
                this.setState({
                    articles: response.data.articles,
                    sourceName: this.state.sourceName,
                    
                })
            })
    }


    
    getNewsSource= (url, name) => {  
        localStorage.setItem("url", url)
        localStorage.setItem("name", name)
        axios.get( `https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
            })
        })
            this.setState(prevState=>{
                return{ 
                    toggle: false,
                    sourceName: name,
                    
                }
            })
        
    }
   
   
    
    getNewsCountry = (url, name) => {  
        localStorage.setItem("url", url) 
        localStorage.setItem("name", name)
        axios.get( `https://newsapi.org/v2/top-headlines?country=${url}&apiKey=f64c9be83f094f43a2c3954a6c1ec8aa`)
         .then(response => {
            this.setState({
                articles: response.data.articles,
            })
        })
            this.setState(prevState=>{  
                return { 
                    toggle: false,
                    sourceName: name,
                }
            })
        
    }
        
    
    
    handleToggle = () => {
        this.setState( prevState => {   
                    return { 
                        toggle: true, 
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
                    handleToggle: this.handleToggle,
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