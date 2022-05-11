import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Carousel from 'react-material-ui-carousel'
import { Paper, Button,Typography } from '@mui/material'
import axios from 'axios';
import { margin } from '@mui/system';
import ResponsiveGrid from './Fullproductgrid'
import { useParams } from 'react-router';
import styled from 'styled-components';










export  function SimpleContainer() {
const [data,setdata]=React.useState({})



const {title}=useParams()

console.log(title)


React.useEffect(()=>{

    axios.get(`http://localhost:8000/products?title=${title}`)
    .then((res)=>{console.log(res,"ress");setdata({...res.data[0]})})
    .catch((err)=>{console.log(err)})
    console.log(data)


},[])
console.log(data,"data")

// axios.get("http://localhost:8000/products/1")
// .then((res)=>{setdata({...res})})
// .catch((err)=>{console.log(err)})



// console.log(data)

let myexample={"url": "https://www.amazon.co.uk/dp/B08BLP231K", "title": "Geox Jr Sandal Strada B Fisherman, Brown Red, 2.5 UK Child", "asin": "B08BLP231K", "price": "\u00a350.00", "brand": "Visit the Geox Store", "product_details": "Package Dimensions\n\u200f\n:\n\u200e\n\n31.2 x 21.4 x 11.4 cm; 820 Grams\n\n\nDate First Available\n\u200f\n:\n\u200e\n\n22 Jun. 2020\n\n\nManufacturer\n\u200f\n:\n\u200e\n\nGeox\n\n\nASIN\n\u200f\n:\n\u200e\n\nB08BLP231K\n\n\nItem model number\n\u200f\n:\n\u200e\n\nJ1524B02214\n\n\nCountry of origin\n\u200f\n:\n\u200e\n\nVietnam\n\n\nDepartment\n\u200f\n:\n\u200e\n\nBoy's", "breadcrumbs": "Shoes/Boys' Shoes/Sandals", "images_list": ["https://m.media-amazon.com/images/I/41OuvqjhaqL.jpg", "https://m.media-amazon.com/images/I/51zt+Bb48FL.jpg", "https://m.media-amazon.com/images/I/51EXdVtkpAL.jpg", "https://m.media-amazon.com/images/I/41u3T2DxWkL.jpg", "https://m.media-amazon.com/images/I/41ZOt3pgbSL.jpg", "https://m.media-amazon.com/images/I/41FEYlXQNFL.jpg", "https://m.media-amazon.com/images/I/41Nqt4ULBUL.jpg"], "features": [{"Outer Material": "Synthetic"}, {"Inner Material": "Synthetic"}, {"Sole": "Rubber"}, {"Closure": "Strap"}, {"Heel Height": "2 centimetres"}, {"Heel Type": "Flat"}, {"Shoe Width": "Medium"}]};

if(!data.title)
{
    return <div>Loading</div>
}
else
  return (
    <>
    <div style={{display:"flex",justifyContent:"flex-end",marginTop:"25px",marginRight:"2%",gap:"20px"}} >
      <button style={{borderRadius:'2px'}}>ADD TO CART</button>
      <button  style={{borderRadius:'2px'}}>BUTTON</button>
    </div>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="80%">
        <Box sx={{ bgcolor: 'white', height: '80vh',marginTop:"40px",paddingTop:"25px",paddingBottom:'25px' }} >
<div style={{width:"50%",backgroundColor:"white",height:"80%",margin:"auto"}}>
<Carousel>
{data?.images_list?.map((e,i)=><img  src={e} key={i} style={{height:"350px",width:"40%",marginLeft:"25%",objectFit:"contain",}} alt=""/>)}
</Carousel>
</div>
       
  <div >

  

<ResponsiveGrid arr={data}/>

  </div>

        </Box>




      </Container>
    </React.Fragment>
    </>
  );
}








