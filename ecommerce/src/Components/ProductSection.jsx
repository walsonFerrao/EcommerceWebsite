import * as React from 'react';
import Grid from '@mui/material/Grid';
import { MediaCard } from './Card';
import axios from "axios";
import { get_product_data } from '../Redux/Products/action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { drawerClasses } from '@mui/material';
import { ascending_price,descending_price,ascending_name } from '../Redux/Products/action';



export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const dispatch=useDispatch()
  const data=useSelector((store)=>{return store.productData})
  const isLoading=useSelector((store)=>{return store.productloading})
  const [checkedd,setchecked]=React.useState({
     "0to1":false,
     "1-2":false

  })
  
  
  
// let arr=[]

//   data.forEach((e)=>{arr.push(e.breadcrumbs.split(" ").join(" ").split("/").join(" ").split("&").join(" ").split("  ").join(" ").split(" ").join(" "))})

//   arr=arr.join(" ").split("  ").join(" ")
// dispatch(get_product_data())
// console.log(arr)

const getdata= function()
{

  
  dispatch(get_product_data())
}


useEffect(getdata,[])


function Checkbox(e)
{

if(e.target.value=="0to1")
{

if(checkedd['0to1']==true)
{

  setchecked({...checkedd,'0to1':false})
  getdata()

}
else{

  let arr=data.filter((e)=>{
     
    return (e.price?.split("-")[0].replace("£","")<100)
    


  })
  setchecked({...checkedd,'0to1':true})

dispatch(ascending_price(arr))

}
   
  


}







if(e.target.value=="1to2")
{

if(checkedd['1to2']==true)
{

  setchecked({...checkedd,'1to2':false})
  getdata()

}
else{

  let arr=data.filter((e)=>{
     
    return (e.price?.split("-")[0].replace("£","")<200&&e.price?.split("-")[0].replace("£","")>100)
    


  })
  setchecked({...checkedd,'1to2':true})

dispatch(ascending_price(arr))

}
   
  


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



// console.log(data,"sorteddata")


if(isLoading==true)
{
  return <div style={{fontSize:"20px",width:"100%",textAlign:"center"}}><h1>LOADINg...A Moment please</h1></div>
}

else return (

<>

<div style={{width:"100%",marginRight:"25px",marginTop:"5px",display:'flex',justifyContent:"space-between"}}>
<select name="" id="" style={{ width: "250px",height:"30px",borderRadius:"5px",fontWeight:"bold",position:"relative",float:"right" }} onChange={(e)=>{Sortit(e)}}>
        <option value="" >Sort Accoringly</option>
          <option value="SA" >SortbyPriceAscending</option>
          <option value="SD">SortbyPriceDescending</option>
          <option value="SN">SortByNameAscending</option>
          <option value="SND">SortByNameDescending</option>

        </select>
        
        <div style={{position:"relative",marginLeft:"20%"}}>
          <label htmlFor="">0£ -100£ </label>
          <input type="checkbox" value={"0to1"} checked={checkedd['0to1']}   onChange={(e)=>{Checkbox(e)}}/>
          <label htmlFor="">100£ -200£ </label>
          <input type="checkbox" value={"1to2"} checked={checkedd['1to2']} onChange={(e)=>{Checkbox(e)}}/>
          
        </div>
</div>


        
        
     


    <Grid sx={{ flexGrow: 1 }} container spacing={10} >
     
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing} columnGap="2%">
          {data?.map((e) => (
            <MediaCard title={e.title} image={e.images_list} price={e.price}   />
          ))}
        </Grid>
      </Grid>
     
    </Grid>
    </>
  );
  
}
