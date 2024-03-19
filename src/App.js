import React from "react";

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'
import Headers from './components/Headers/Headers'
import List from './components/List/List'
import Map from './components/Maps/Map'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'



const App = () =>{
    return (
        <>
        <CssBaseline/>
        <Headers/>
        <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}><List/></Grid>
        <Grid item xs={12} md={8}><Map/></Grid>
        </Grid>
        </>
    )
}

export default App;
