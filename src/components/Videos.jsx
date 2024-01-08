import React from 'react'
import './Videos.css'

import { Stack,Box } from '@mui/material'
import {VideoCard} from './'
import {ChannelCard} from './'



function Videos({videos}) {
  console.log(videos,'Data')
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent={'start'} gap={2}>
      {
        videos.map((item,idx)=>{
          return(

            <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
           
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
            <VideoCard/>
          </Box>
            )
        })
      }
    </Stack>
 
  )
}

export default Videos
