import axios from "axios"
import { useState } from "react"
import styled from "styled-components"


const Input = styled.input`

height:30px;
width:70%;
margin-left:10%;
margin-top:20px;
border-radius:10px;

`

const Div=styled.div`

width:30%;
margin:auto;
background-color:grey;
padding-top:50px;
padding-bottom:50px;
margin-top:50px;
border-radius:25px;
padding-left:2%;

`

const Button=styled.button`

margin-top:20px;
width:40%;
height:30px;
margin-left:25%;
border:none;
border-radius:10px;

`

export const Login=()=>{
 const [name,setname]=useState("")
const [password,setpassword]=useState("")
const [email,setemail]=useState("")


function addemail(e)
{
    setemail(e.target.value)
}

function addname(e)
{
    setname(e.target.value)
}
function addpassword(e)
{
    setpassword(e.target.value)
}

function addtoserver()
{
axios.post("http://localhost:1080/users",{username:name,email:email,password:password,cart:[]})
.then((res)=>{console.log(res.data);localStorage.setItem("ecommerceuserdetails",JSON.stringify(res.data))})
.catch((err)=>{console.log(err)})
}



return(
<>

<Div >

<Input type="text" placeholder="Name" onChange={(e)=>{addname(e)}}/>

<Input type="text" placeholder="Email" onChange={(e)=>{addemail(e)}}/>
<Input type="text" placeholder="Password" onChange={(e)=>{addpassword(e)}}/>
<br />
<Button onClick={()=>{addtoserver()}}>LOGIN</Button>
</Div>



</>

)





}