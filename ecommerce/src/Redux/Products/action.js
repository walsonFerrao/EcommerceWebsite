
import { fabClasses } from "@mui/material";
import axios from "axios";
export const ADD_PRODUCT_DATA_TO_STORE="ADD_PRODUCT_DATA_TO_STORE"

 export const add_product_data_to_store=(payload)=>({
    type:ADD_PRODUCT_DATA_TO_STORE,payload
})

export const PRODUCT_LOADING_FALSE="PRODUCT_LOADING_FALSE"

export const product_loading=(payload)=>({type:PRODUCT_LOADING_FALSE,payload})


export const ASCENDING_PRICE="ASCENDING_PRICE"
export const ascending_price=(payload)=>({type:ASCENDING_PRICE,payload})


export const DESCENDING_PRICE="DESCENDING_PRICE"
export const  descending_price=(payload)=>({type:DESCENDING_PRICE,payload})

export const ASCENDING_NAME="ASCENDING_NAME"
export const ascending_name=(payload)=>({type:ASCENDING_NAME,payload})



export const get_product_data=()=>(dispatch)=>{


    axios.get("http://localhost:8000/products")
    .then(({data})=>{console.log(data,"i am actio");dispatch(add_product_data_to_store(data));dispatch(product_loading(false))
    })
    .catch((err)=>{console.log(err)})



}


