import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {get_user} from  '../Redux/User/action'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

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
 

    const dispatch=useDispatch()
  console.log(userdata)

    React.useEffect(()=>{


        dispatch(get_user())


    },[])


    function deletecartitem(i)
    {

    axios.delete(`http://localhost:1080/users/cartitem/${userdata._id}?index=${i}`)
    .then((res)=>{dispatch(get_user())})
    .catch((err)=>{console.log(err)})


    }


  return (

     <div style={{width:"50%",margin:"auto",marginTop:"35px"}}>
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
       {userdata?.cart?.map((e,i)=><Item><div>{e.title}</div><button onClick={()=>{deletecartitem(i)}}>delete</button></Item>)}
        
      </Stack>
    </Box>
    </div>
     );
}