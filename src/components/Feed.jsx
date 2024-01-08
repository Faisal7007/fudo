import React from 'react'
import './Feed.css'
import {Sidebar} from './'
import {Videos} from './'
import { useState,useEffect } from 'react'
import { Box,Stack,Typography } from '@mui/material'
import { fetchFromAPI } from './utils/fetchFromAPI'

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  useEffect(()=>{
   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
   .then((data)=>setVideos(data.items))
  },[selectedCategory])
  
  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}} >
    <Box sx={{height:{sx:'auto',md:'92vh'},borderRadius:'1px solid #3d3d3d',px:{sx:0,md:2}}} >

      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Typography style={{color:'white'}} >
        Copyright 2023 Js Media
      </Typography>
    </Box>

    <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}} >

      <Typography 
      variant='h4'
      fontWeight='bold'
      color={'white'}
      > {selectedCategory} <span  style={{color:'red'}}  >videos</span> </Typography>

      <Videos videos={videos}/>

    </Box>
    </Stack>
  )
}

export default Feed
