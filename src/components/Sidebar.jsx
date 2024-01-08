import React from 'react'
import './Sidebar.css'
import {categories} from './utils/constants'
import { Stack } from '@mui/material'
 


function Sidebar({selectedCategory,setSelectedCategory}) {
  return (
    <Stack 
    direction='row'
    sx={{overflowY:'auto',
  height:{sx:'auto',md:'95%'},
flexDirection:{md:'column'}}}
    >
      {
        categories.map((categorie)=>{
           return(
            <button className='category_btn' style={{display:'flex',alignItems:'center',backgroundColor:categorie.name===selectedCategory && 'red'}} onClick={()=>{setSelectedCategory(categorie.name)}} key={categorie.name} >
            <span  style={{paddingRight:'5px',color:categorie.name===selectedCategory ?'white':'black' }}>{categorie.icon}</span>
            <span style={{opacity:categorie.name===selectedCategory? 1 :0.8 }} >{categorie.name}</span>
            </button>

           )

        })
      }
    </Stack>
  )
}

export default Sidebar
