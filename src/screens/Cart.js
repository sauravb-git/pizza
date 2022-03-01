import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {

    const cartState = useSelector(state=>state.addToCartReducer)
    const cartItem = cartState.cartItems;
    console.log(cartItem)

    return (
        <div>
        <div className="row justify-content-center" style={{ padding: '0', margin: '0', textAlign: 'center' }} >
            <div className="col-md-6">
                <h2 style={{ fontSize: '30px', marginBottom: '30px' }}>My cart</h2>

                {  cartItem?.map((item ,i)=> (
                       <div className="flex-container" key={i}>
                        <div className="text-start m-1 w-100">
                            <h1>{item.name}  [{item.varient}]</h1>
                            <h1>Price :{item.quantity} * {item.price[0][item.varient]} = {item.prices}  Tk</h1>
                            <h1 style={{display:'inline'}}>Quantity : </h1>
                            <i
                                className='fa fa-plus'
                                aria-hidden="true"></i>
                            <b>{item.quantity}</b>
                            <i
                                className='fa fa-minus'
                                aria-hidden="true"></i>
                            <hr />
                        </div>
                        <div className='m-1 w-100'>
                            <img src={item.image} style={{ height: '80px', width: '80px' }} />
                        </div>
                        <div className='m-1 w-100'>
                            <i 
                                className="fa fa-trash mt-4"
                                aria-hidden="true"></i>
                        </div>
                    </div> 
                ))  } 
              
            </div>

            <div className="col-md-4 text-end">
                <h2 style={{fontSize: '30px'}}>Subtotal :  /-</h2>
                 
            </div>
        </div>
    </div>
    );
};

export default Cart;