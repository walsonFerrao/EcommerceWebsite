import * as React from 'react';
import { experimentalStyled as material } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styled  from 'styled-components';
import {  Button,Typography } from '@mui/material';
import { maxHeight } from '@mui/system';



const Detailcontainer=styled.div`

width:80%;
line-height:30px;
position: relative;
margin:auto;
margin-top:25px;
padding-left:1%;
padding-bottom:50px;



`

const Allcontainer=styled.div`
    
width:100%;
background-color:white;
margin-top:20px;

`




const Item = material(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid(props) {

    let arr=props.arr

console.log(Object.keys(arr.features[0]))

console.log(arr)


  return (
    <Allcontainer sx={{ flexGrow: 1 ,}}>




<div style={{width:"80%",margin:"auto"}}>

<Typography variant="h4" component="h3">
  Geox Jr Sandal Strada B Fisherman
</Typography>
      

<Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
{arr.features.map((e)=><Grid item xs={2} sm={4} md={4}>
<div style={{display:"flex",backgroundColor:"wheat",alignItems:"center"}}>
<div style={{fontSize:"20px"}}>{Object.keys(e)}</div>
<div> :  {e[Object.keys(e)]}</div>
</div> 
</Grid>)
}    

</Grid>
</div>

<Detailcontainer>

<div style={{alignItems:"center",width:"80%"}}>
    <div style={{fontSize:"20px",fontWeight:"bold"}}>Price</div>
    <div>{arr.price}</div>
</div>

<div style={{alignItems:"center",width:"80%"}}>
<div style={{fontSize:"20px",fontWeight:"bold"}}>Brand</div>
    <div>{arr.brand}</div>
</div>

<div style={{alignItems:"center",width:"80%"}}>
<div style={{fontSize:"20px",fontWeight:"bold"}}>Type</div>
    <div>{arr.breadcrumbs}</div>
</div>

<div style={{alignItems:"center",width:"80%"}}>
<div style={{fontSize:"20px",fontWeight:"bold"}}>ProductDetail</div>
    <div>{arr.product_details}</div>
</div>

<div style={{alignItems:"center",width:"80%"}}>
<div style={{fontSize:"20px",fontWeight:"bold"}}>Title</div>
    <div>{arr.title}</div>
</div>

</Detailcontainer>


     
    </Allcontainer>
  );
}
