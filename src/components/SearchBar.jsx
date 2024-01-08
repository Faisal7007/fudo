import React from 'react'

import { useState } from 'react'
import { UseNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  return (
    <Paper component='form'
    onSubmit={()=>{}} 
    sx={{borderRadius:'20px',
    border:'1px solid #e3e3e3',
    pl:'2px',
    boxShadow:'none',
    mr:{sm:'5px'}}}>
      <input type="text" 
      className='search_bar' 
      placeholder='Search...'
      style={{border:'1px solid white'}}
      onChange={()=>{}}/>
      <IconButton type='submit' sx={{p:'10px',color:'red'}}>
        <Search/>

        </IconButton>

    </Paper>
  )
}

export default SearchBar
