import React from 'react'
import ReactPlayer from 'react-player'


const Video = () => {

    return(
 <div className = 'videoWrap' >
   
        <ReactPlayer className = 'reactPlayer' url={'https://www.youtube.com/watch?v=IukZ7gOGPj8'} height='100%' width='100%' playing />
   
 </div>  
    )
}

export default Video