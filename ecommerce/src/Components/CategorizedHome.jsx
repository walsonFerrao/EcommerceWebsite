import * as React from 'react';
import Grid from '@mui/material/Grid';
import { MediaCard } from './Card';
import axios from "axios";
import { get_product_data } from '../Redux/Products/action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { drawerClasses } from '@mui/material';
import { ascending_price,descending_price,ascending_name,add_product_data_to_store ,product_loading} from '../Redux/Products/action';


export default function Categorizedhome() {
  const [spacing, setSpacing] = React.useState(2);
  const dispatch=useDispatch()
  const data=useSelector((store)=>{return store.productData})
  const isLoading=useSelector((store)=>{return store.productloading})
  
  var {key}=useParams()



  

const getdata= function()
{
  dispatch(get_product_data())
}





useEffect(()=>{
   dispatch(product_loading(false))  
    let sourcearray=  data.filter((e)=>{

        let myarr=e.breadcrumbs.split(' ').join(" ").split("/").join(" ").split(" ")
             
        console.log(myarr)
        
        return (myarr.includes(key))
        })


       
        dispatch(add_product_data_to_store(sourcearray))

} ,[])
function Sortit(e)
{

  if(e.target.value=="SA")
  {
     data.sort((a,b)=>{

  return  a.price?.replace("£","").split("-")[0] - b.price?.replace("£","").split("-")[0]
        
     })

     dispatch(ascending_price(data))  


  }

  if(e.target.value=="SD")
  {
     data.sort((a,b)=>{

  return  a.price?.replace("£","").split("-")[0] - b.price?.replace("£","").split("-")[0]
        
     })

     dispatch(descending_price(data.reverse()))  


  }
  if(e.target.value=="SN")
  {
     data.sort((a,b)=>{

  return  a.title.localeCompare(b.title)
        
     })

     dispatch(ascending_name(data))  


  }

  if(e.target.value=="SND")
  {
     data.sort((a,b)=>{

  return  b.title.localeCompare(a.title)
        
     })

     dispatch(ascending_name(data))  


  }


}



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

<>
<div style={{width:"100%",marginRight:"25px",marginTop:"5px"}}>
<select name="" id="" style={{ width: "250px",height:"30px",borderRadius:"5px",fontWeight:"bold",position:"absolute",float:"right" }} onChange={(e)=>{Sortit(e)}}>
        <option value="" >Sort Accoringly</option>
          <option value="SA" >SortbyPriceAscending</option>
          <option value="SD">SortbyPriceDescending</option>
          <option value="SN">SortByNameAscending</option>
          <option value="SND">SortByNameDescending</option>

        </select>
</div>


    <Grid sx={{ flexGrow: 1 }} container spacing={10}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing} columnGap="2%">
          {data?.map((e) => (
            <MediaCard title={e.title} image={e.images_list} price={e.price}   />
          ))}
        </Grid>
      </Grid>
     
    </Grid>
    </>
  )
  
}
