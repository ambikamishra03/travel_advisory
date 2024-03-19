import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import './styles.css'

const Headers = () => {
  return (
    <div>
      <AppBar position='static'>
      <Toolbar className="toolbar">
       <Typography variant='h5' className="title">
        Travel advisor
       </Typography>
       <Box display='flex'>
       <Typography variant='h6' className="title">
        Explore new places
       </Typography>
       {/* <Autocomplete> */}
        <div className="search">
        <div className="searchIcon">
          <SearchIcon />
          </div>
          <InputBase placeholder='Search...' classes={{
            root:"inputRoot",
            input:"inputInput",
          }}/>
        </div>
       {/* </Autocomplete> */}
       </Box>
      </Toolbar>
      </AppBar>
    </div>
  )
}

export default Headers
