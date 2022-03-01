import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddToCartAction,RemoveCart } from '../redux/action/cartAction'; 


const Cart = () => {

    const cartState = useSelector(state=>state.addToCartReducer)
    const cartItem = cartState.cartItems;
    const dispatch = useDispatch();

    return (
        <div>
        <div className="row justify-content-center" style={{ padding: '0', margin: '0', textAlign: 'center' }} >
            <div className="col-md-6">
                <h2 style={{ fontSize: '30px', marginBottom: '30px' }}>My cart</h2>

                {cartItem?.map(item => {
                        return <div className="flex-container" key={item._id}>
                            <div className="text-start m-1 w-100">
                                <h1>{item.name} 
                                {' '} {item.varient}
                                </h1>   
                                <h1>Price : {item.quantity}  * {item.prices[0][item.varient]}  = {item.price}</h1>
                                <h1 style={{display:'inline'}}>Quantity : </h1>
                                <button >
                                <i   
                                    onClick={() => dispatch(AddToCartAction(item, item.quantity + 1, item.varient))}
                                    className='fa fa-plus'
                                    aria-hidden="true"></i></button>
                                <b> {' '}{item.quantity} {' '}</b>
                                <button> <i
                                    onClick={() => dispatch(AddToCartAction(item, item.quantity - 1, item.varient))}
                                    className='fa fa-minus'
                                    aria-hidden="true"></i></button>
                                <hr />
                            </div>
                            <div className='m-1 w-100'>
                                <img src={item.image} style={{ height: '80px', width: '80px' }} />
                            </div>
                            <div className='m-1 w-100'>
                                <i
                                    onClick={() => dispatch(RemoveCart(item))}
                                    className="fa fa-trash mt-4"
                                    aria-hidden="true"></i>
                            </div>
                        </div>
                    })}
              
            </div>

            <div className="col-md-4 text-end">
                <h2 style={{fontSize: '30px'}}>Subtotal :  /-</h2>
                 
            </div>
        </div>
    </div>
    );
};

export default Cart;