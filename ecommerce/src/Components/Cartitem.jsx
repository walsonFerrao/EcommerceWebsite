import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {get_user} from  '../Redux/User/action'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eed5d5',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  display:'flex',
  justifyContent:'space-between',
}));

export const  Mycart =()=>  {
    const userdata=useSelector((store)=>store.userreducer.userdata)
    const [sum,setsum] =React.useState(0)
 const navigate=useNavigate()

    const dispatch=useDispatch()
  console.log(userdata)

    React.useEffect(()=>{


        dispatch(get_user())
        findsum()


      




    
        
    },[])


    


function findsum()
{
  let sum=0
     
  userdata?.cart?.forEach((e)=>{sum=sum+Number(e.price.split('-')[0].replace("£",""))})
  setsum(sum)
}


    function takemetopayment()
    {
     
      // navigate("/payment")
    }


    function deletecartitem(i)
    {

    axios.delete(`http://localhost:1080/users/cartitem/${userdata._id}?index=${i}`)
    .then((res)=>{dispatch(get_user())})
    .catch((err)=>{console.log(err)})


    }


  return (

     <div style={{width:"50%",margin:"auto",marginTop:"35px"}}>
       <h1>total Sum is {sum}</h1>
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
       {userdata?.cart?.map((e,i)=><Item><div>{e.title}</div><button onClick={()=>{deletecartitem(i); findsum()}}>delete</button></Item>)}
        
      </Stack>
    </Box>

<div style={{width:"250px",margin:"auto"}}>
<button style={{width:"250px",height:"30px",marginTop:"25px",borderRadius:"5px"}} onClick={takemetopayment}>CHECK OUT</button>

</div>

    </div>
     ); 

}