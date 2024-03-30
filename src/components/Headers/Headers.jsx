import React ,{useState} from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import './styles.css'

const Headers = ({setCoordinates}) => {

    const [autocomplete, setAutocomplete] = useState()
    
    const onLoad = (autoc) => setAutocomplete(autoc);
    const onPlaceChanged = () => {
      const lat = autocomplete.getPlace().geometry.location.lat()
      const lng = autocomplete.getPlace().geometry.location.lng()
      setCoordinates({lat,lng});
    }

  return (
    <div>
      <AppBar position='static'>
      <Toolbar className="toolbar">
       <Typography variant='h5' className="title">
        Travel advisor
       </Typography>
       <Box display='flex' >
       <Typography variant='h6' className="title">
        Explore new places
       </Typography>
       <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <div className="search" style={{marginLeft:'10px'}}>
        <div className="searchIcon">
          <SearchIcon />
          </div>
          <InputBase placeholder='Search...' classes={{
            root:"inputRoot",
            input:"inputInput",
          }}/>
        </div>
       </Autocomplete>
       </Box>
      </Toolbar>
      </AppBar>
    </div>
  )
}

export default Headers
