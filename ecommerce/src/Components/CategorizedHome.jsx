import * as React from 'react';
import Grid from '@mui/material/Grid';
import { MediaCard } from './Card';
import axios from "axios";
import { get_product_data } from '../Redux/Products/action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { drawerClasses } from '@mui/material';


export default function Categorizedhome() {
  const [spacing, setSpacing] = React.useState(2);
  const dispatch=useDispatch()
  const data=useSelector((store)=>{return store.productData})
  const isLoading=useSelector((store)=>{return store.productloading})
  
  var {key}=useParams()

// if(key[key.length-1]=="'")
// {
//    key= key.split("")
//    key.pop()
//    key=key.join("")
// }

//   console.log(key)

  

const getdata= function()
{
  dispatch(get_product_data())
}

let sourcearray=  data.filter((e)=>{

let myarr=e.breadcrumbs.split(' ').join(" ").split("/").join(" ").split(" ")
     
console.log(myarr)

return (myarr.includes(key))
})



console.log(sourcearray,"filteredd")

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
          {sourcearray?.map((e) => (
            <MediaCard title={e.title} image={e.images_list} price={e.price}   />
          ))}
        </Grid>
      </Grid>
     
    </Grid>
  );
}
