import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:1080/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <div style={{witdh:"50%",paddingBottom:"25px"}}>
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button style={{width:"30%",marginLeft:"35%",height:"35px",marginTop:"15px"}}>Pay</button>
            <p>Please fill the card details for payment</p>
        </form>
        </div>
        :<Thankyou/> } 
        </>
        
       
        
    )
} 


function Thankyou(){

return(

<>




<div style={{width:"100%",padding:"20px",backgroundColor:"white",margin:"auto",textAlign:"center",border:"5px",fontFamily:'cursive'}}>

<h4>Thank You For Purhasing the item More details will be sent through email.</h4>
<img src="https://insights.ehotelier.com/wp-content/uploads/sites/6/2018/10/Thank-you-response.jpg" alt="" />


</div>



</>



)



}

