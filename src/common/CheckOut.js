import React,{useEffect} from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios  from 'axios'; 
import { useDispatch, useSelector } from "react-redux";
import { placeOrderAction } from '../redux/action/oderAction';
import Loading from './Loading'; 
import Success from './Success';
import Error from './Error';
 


function CheckOut({subtotal}) {
 
     

    const dispatch = useDispatch();
  
    const orderstate = useSelector((state) => state.placeOrderReducer);
    
    const { loading, error, success } = orderstate;
    const tokenHandler = (token) =>{
        console.log(token)
        dispatch(placeOrderAction(token , subtotal))
    }
    

    return (
        <div>
           
         {loading && <Loading />}
         {error && <Error error="Something went wrong" />}
         {success && <Success success="Your Order Placed Successfully" />}   

            <StripeCheckout
            amount={subtotal * 100}
            shippingAddress
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
