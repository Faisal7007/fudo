import React from 'react'
import './VideoCard.css'
import { demoChannelTitle,demoThumbnailUrl,demoChannelUrl,demoVideoTitle,demoVideoUrl} from './utils/constants'
function VideoCard({video}) {
  
  const videoId = video?.id?.videoId
  const snippet = video?.snippet
  console.log(videoId,'videoId')
  console.log(snippet,'Snippet_New')

  const thubnail_Url =  snippet?.thumbnails?.medium?.url


  return (
    <div className='video_card'>
      <img src={!thubnail_Url ? demoThumbnailUrl:thubnail_Url} alt="thumbnail" />
      
      <div className="video_info">
        <h4>{snippet?.description
}</h4>
        <p>{!(snippet?.channelTitle) ? demoChannelTitle: snippet?.channelTitle
}</p>
        <p>{snippet?.publishTime
}</p>
      </div>
    </div>
   
  )
}

export default VideoCard
