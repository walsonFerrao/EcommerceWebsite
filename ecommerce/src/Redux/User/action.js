import axios from "axios"


const ADD_USER_TO_REDUCER="ADD_USER_TO_REDUCER"
const add_user_to_reducer=(payload)=>({type:ADD_USER_TO_REDUCER,payload})












export const get_user=()=>(dispatch)=>{

let mydata=JSON.parse(localStorage.getItem("ecommerceuserdetails"))
axios.get(`http://localhost:1080/users/${mydata._id}`)
.then((res)=>{console.log(res)})



}




