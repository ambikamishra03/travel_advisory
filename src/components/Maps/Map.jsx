import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, useMediaQuery, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating'
import './styles.css'
import mapStyles from './mapStyles'

const Map = ({setCoordinates, setBounds ,coordinates,places,setChildClick,weatherData}) => {
  const isDesktop = useMediaQuery('(min-width:600px)')

  return (
    <div className="mapContainer">
    <GoogleMapReact
       bootstrapURLKeys={{key:process.env.REACT_APP_GOOGLE_MAPS_API_KEY}}
       defaultCenter={coordinates}
       center={coordinates}
       defaultZoom={14}
       margin={[50,50,50,50]}
       options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
       onChange={(e)=>{
        console.log(e)
        setCoordinates({lat:e.center.lat,lng:e.center.lng})
        setBounds({
          ne:e.marginBounds.ne,
          sw:e.marginBounds.sw
        })
       }}
       onChildClick={() => setChildClick()}
    >
        {places?.map((place,i)=> (
          <div className="markerContainer" 
          lat={Number(place.latitude)}
          lng={Number(place.longitude)}
          key={i}
           >
             {
              !isDesktop ? (
                <LocationOnIcon color="primary" fontSize="large"/>
              ) : (
                <Paper elevation={3} className='paper'>
                  <Typography variant='subtitle2' gutterBottom className='typography'>
                        {place.name}
                  </Typography>
                  <img
                    className='pointer'
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    alt={place.name}
                  />
                  <Rating size='small' value={Number(place.rating)} readOnly/>
                </Paper>
              )
             }
          </div>
        )) }
        {weatherData?.list?.length && weatherData.list.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
          </div>
        ))}
    </GoogleMapReact>
    </div>
  )
}

export default Map
