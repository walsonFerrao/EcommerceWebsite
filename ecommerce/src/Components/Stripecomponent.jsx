


import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51KyujMSAJGzfSu8fsK9jupLmxCb63yZfhvycSV4pTl71vF4PhvcHv10xTNRc6f2LYrXXQ8zfLVXl6ydpw9XyIEZu00dYZ8G587"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
        <div style={{marginTop:"40px",width:"50%",backgroundColor:"grey",margin:"auto",marginTop:"50px",height:"100px",paddingTop:'50px',paddingLeft:"40px",paddingRight:"40px",borderRadius:"6px",paddingBottom:"40px"}}>

<Elements stripe={stripeTestPromise} >
			<PaymentForm />
		</Elements>

        </div>
		
	)
}