import React, { useState,useEffect,createRef } from "react";
import {
  CircularProgress,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box
} from "@mui/material";
import Grid from "@mui/material/Grid";
import PlaceDetails from '../PlaceDetails/PlaceDetails' 



import "./styles.css";
const List = ({places,childClick,isLoading,type,setType,rating,setRating}) => {

  //  console.log({ childClick});
    const [eleRefs, setEleRefs] = useState([])

  useEffect(() => {
   const refs = Array(places?.length).fill().map((_,i) => eleRefs[i] || createRef());  
    setEleRefs(refs)
  }, [places])
  
  return (
    <div className="container">
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you
      </Typography>

{
  isLoading ? (
     <div className="loading">
      <CircularProgress size="5rem"/>
     </div>
  ) : (
      <>
      <Box style={{margin:'8px'}}>
      <FormControl className="formControl">
        <InputLabel className="inputlabel">Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl className="formControl">
        <InputLabel className="inputlabel">Rating</InputLabel>
        <Select value={rating} onChange={(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>
      </Box>
      <Grid container spacing={3} className="list">
        {
          places?.map((place,i) =>(
            <Grid item key={i} xs={12}> 
                 <PlaceDetails 
                 place={place}
                 selected={Number(childClick) === i}
                 refProp={eleRefs[i]}
                 />
            </Grid>
          ))
        }
      </Grid>
      </>)
}
    </div>
  );
};

export default List;
