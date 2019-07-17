import React, { Component } from 'react'
import axios from 'axios'

class Rates extends Component { 
    constructor(props){
        super(props)
        this.state = {
           
           rates:[],
           
        }
    }

    componentDidMount(){
        axios.get('https://api.exchangeratesapi.io/latest?base=USD')
        .then(response => {
            var obj = response.data.rates
            var arr = []
                for(let i in obj) {
                    const obj2 = {
                        key: i,
                        value: obj[i],
                        id: Math.random()
                    }
                       if(i !== 'USD'){arr.push(obj2)}
                }
            this.setState({
                rates: arr,
            })
        })
    }

     
    render(){
        const exchange = this.state.rates.map(item =>{
            return(
                <div className = 'money' key = {Math.random()}>
                   <h1 className = 'dollar'> 1$ = {item.value} {item.key}</h1>
                </div>
                )
        })

        return(
            <div className = 'rates'>
               {exchange}
            </div>
        )
            
    }
}

export default Rates