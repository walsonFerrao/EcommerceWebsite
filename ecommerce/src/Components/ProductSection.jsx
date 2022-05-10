import * as React from 'react';
import Grid from '@mui/material/Grid';
import { MediaCard } from './Card';
import axios from "axios";
import { get_product_data } from '../Redux/Products/action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { drawerClasses } from '@mui/material';


export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const dispatch=useDispatch()
  const data=useSelector((store)=>{return store.productData})
  const isLoading=useSelector((store)=>{return store.productloading})
  
  
let arr=[]

  data.forEach((e)=>{arr.push(e.breadcrumbs.split(" ").join(" ").split("/").join(" ").split("&").join(" ").split("  ").join(" ").split(" ").join(" "))})

  arr=arr.join(" ").split("  ").join(" ")
// dispatch(get_product_data())
console.log(arr)

const getdata= function()
{
  dispatch(get_product_data())
}


useEffect(getdata,[])




console.log(data)

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };
  const navigate=useNavigate()

  const jsx = `
<Grid container spacing={${spacing}}>
`;








if(isLoading==true)
{
  return <div style={{fontSize:"20px",width:"100%",textAlign:"center"}}><h1>LOADINg...A Moment please</h1></div>
}

else return (





    <Grid sx={{ flexGrow: 1 }} container spacing={10}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing} columnGap="2%">
          {data?.map((e) => (
            <MediaCard title={e.title} image={e.images_list} price={e.price}   />
          ))}
        </Grid>
      </Grid>
     
    </Grid>
  );
}
