import { useEffect, useState } from "react"


let arrsrc=["https://m.media-amazon.com/images/I/41K1ONbCg8L.jpg",
"https://m.media-amazon.com/images/I/51H3xUC35sL.jpg",
"https://m.media-amazon.com/images/I/41xtzAPqkyL.jpg",
"https://m.media-amazon.com/images/I/41tCoOFGIrL.jpg",
 "https://m.media-amazon.com/images/I/31LfUxQEKgL.jpg",
"https://m.media-amazon.com/images/I/41w+56pi7KL.jpg",
"https://m.media-amazon.com/images/I/41kfZWCTLRL.jpg"]




export const Mycarousel=()=>{
const [index,setindex]=useState(0)

useEffect(()=>{

    setInterval(()=>{
        setindex(prev=>prev+1)

        if(index==arrsrc.length)
        {
            setindex(0)
        }
        
    },1000)



},[])



 return(

<>



<div>

<img src={arrsrc[index]} alt="" />



</div>






</>



 )



}

