import React , {useEffect,useState} from "react";
import { getPlacesData } from './api'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'
import Headers from './components/Headers/Headers'
import List from './components/List/List'
import Map from './components/Maps/Map'
// import PlaceDetails from './components/PlaceDetails/PlaceDetails'



const App = () =>{
    const [places, setPlaces] = useState([]);
    const [coordinates,setCoordinates] = useState({lat:0,lng:0});
    const [bounds,setBounds] = useState({});
    const [childClick, setChildClick] = useState(null)
    const [isLoading, setIsLoading] = useState(false)    

    const [type, setType] = useState("restaurants");
    const [rating, setRating] = useState("");
    const [filteredPlaces, setFilteredPlaces] = useState([]);


    useEffect(() =>{
      navigator.geolocation.getCurrentPosition(
        ({coords: {latitude,longitude}})=>{
        setCoordinates({lat:latitude,lng:longitude})
      })
    },[])
    useEffect(() =>{
      const filteredPlaces = places.filter((place) => place.rating>rating);
      setFilteredPlaces(filteredPlaces);
    },[rating])
    
  
    useEffect(() =>{
       if(bounds.sw && bounds.ne){
        setIsLoading(true)
        getPlacesData(type,bounds?.sw,bounds?.ne)
        .then((data) =>{
            // console.log(data);
            setPlaces(data?.filter((place)=> place.name && place.num_reviews >0))
            setFilteredPlaces([])
            setIsLoading(false)
        })
      }
    },[bounds,type])

    
    return (
        <>
        <CssBaseline/>
        <Headers setCoordinates={setCoordinates}/>
        <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
        <List 
        places={filteredPlaces.length ? filteredPlaces: places} 
        childClick={childClick} 
        isLoading={isLoading}
        type={type}
        setType={setType}
        rating={rating}
        setRating={setRating}
        />
        </Grid>
        <Grid item xs={12} md={8}>
        <Map
          setCoordinates={setCoordinates}
          setBounds = {setBounds}
          coordinates={coordinates}
          places={filteredPlaces.length ? filteredPlaces: places}
          setChildClick={setChildClick} 
        /></Grid>
        </Grid>
        </>
    )
}

export default App;
