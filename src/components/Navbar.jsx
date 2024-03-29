import React from 'react'
import { Stack } from '@mui/material'
import {Link} from 'react-router-dom'
import {logo} from './utils/constants'
import {SearchBar} from './'

function Navbar() {
  return (
   <Stack 
   direction='row' 
   alignItems='center'
    p={2}
     sx={{background:'#000',position:'sticky',top:'0',justifyContent:'space-between'}}>

      <Link to='/' style={{display:'flex', justifyContent:'center',height:'45px'}}>
        <img src={logo} alt="logo" />
      </Link>
      <SearchBar/>

   </Stack>
  )
}

export default Navbar
