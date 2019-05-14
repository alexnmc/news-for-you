import React from 'react'
import ReactPlayer from 'react-player'


const Video = () => {

    return(
 <div className = 'videoWrap' >
   
        <ReactPlayer className = 'reactPlayer' url={'https://www.youtube.com/watch?v=lrX6ktLg8WQ'} height='100%' width='100%' playing />
   
 </div>  
    )
}

export default Video