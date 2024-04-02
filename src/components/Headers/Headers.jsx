import React from 'react'
// import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
// import SearchIcon from '@mui/icons-material/Search'
import './styles.css'

const Headers = ({ onPlaceChanged, onLoad }) => {    

  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Typography variant="h4" className="title">
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h5" className="title">
            Explore new places
          </Typography>
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className="search">
              <div className="searchIcon">
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: "inputRoot", input: "inputInput" }} />
            </div>
          </Autocomplete> */}
        </Box> 
      </Toolbar>
    </AppBar>
  );
}

export default Headers
