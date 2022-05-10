

import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router';
import {get_product_data} from '../Redux/Products/action'
import { useDispatch } from 'react-redux';


let finalarr= [
    'Shoes',      "Boys'",     'Sandals',
    "Women's",    'Fashion',   'Athletic',
    'Trainers',   'Sports',    'Outdoor',
    'Running',    'Trail',     "Men's",
    'Loafers',    'Moccasins', 'Court',
    'Boots',      'Road',      "Girls'",
    'Dance',      'Trekking',  'Hiking',
    'Footwear',   'Slippers',  'Lace-ups',
    'Water',      'Flat',      'Baby',
    'Boys',       'First',     'Walking',
    'Mary',       'Janes',     'Equestrian',
    'Jodhpur',    'Paddock',   'Nordic',
    'Ballet',     'Flats',     'Football',
    'Espadrille', 'Technical', 'Skateboarding',
    'Cross',      'Slides',    'Tennis',
    'Cycling',    'Work',      'Utility',
    'Beach',      'Flip',      'Flops',
    'Pool',       'Track',     'Field'
  ]  




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#cde9ea',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Categories() {
const dispatch=useDispatch()

React.useEffect(()=>{

dispatch(get_product_data())

},[])



const navigate=useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 0.5, md: 0.5 }} columns={{ xs: 4, sm: 8, md: 25 }}>
        {finalarr.map((e, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} >
            <Item onClick={()=>{navigate(`/categories/${e}`)}}>{e}</Item>
          </Grid >
        ))}
      </Grid>
    </Box>
  );
}




    


