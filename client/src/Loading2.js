import React from 'react'
import ReactLoading from "react-loading"


const Loading2 = ({type, color}) => {
    
  return(
    <div className = "loading2">
      <ReactLoading  type={'spin'} color={'rgb(170, 0, 0)'} height={'25pt'} width={'25pt'}/>
    </div>
  )
}




export default Loading2