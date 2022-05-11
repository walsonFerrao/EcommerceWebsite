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

export const Register=()=>{



return(
<>

<Div >


<Input type="text" placeholder="NAME"/>
<Input type="text" placeholder="EMAIL"/>
<Input type="text" placeholder="PASSWORD"/>

<br />
<Button>Register</Button>
</Div>



</>

)





}