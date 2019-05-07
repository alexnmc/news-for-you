import React from 'react'
import ReactLoading from "react-loading"


const Loading = ({type, color}) => {
    
  return(
    <div className = "loading">
      <ReactLoading  type={'spin'} color={'rgb(170, 0, 0)'} height={'5%'} width={'5%'}/>
    </div>
  )
}




export default Loading