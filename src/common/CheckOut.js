import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

function CheckOut({subtotal}) {

    const tokenHandler = (token) =>{
        console.log(token)
    }
    

    return (
        <div>

            <StripeCheckout
            amount={subtotal * 100}
            // shippingAddress
            stripeKey='pk_test_51KYU3PC86U4zuuJvYOtRZyl28ZymuUW6Gvs1qbEnAN5OPyZ9ftktF2EIuK4fZAZ4QtEgCsul6D82BcqJxPXnCST500AnRy1ABF'
            token={tokenHandler}
            currency='USD'
            >
               <button className="btn btn-danger">Pay now </button>
            </StripeCheckout>
             
        </div>
    )
}

export default CheckOut
