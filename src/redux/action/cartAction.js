
export const  AddToCartAction = (pizza,quantity,varient) => (dispatch , getState) =>{
   
      
     const cartItem = {
        name: pizza.name,
        _id: pizza._id,
        image: pizza.image,
        varient: varient,
        quantity: quantity,
        prices: pizza.prices,
        price: pizza.prices[0][varient] * quantity
    }
     dispatch({type: 'ADD_TO_CART',payload : cartItem})

     const cartItems = getState().addToCartReducer.cartItems 
     localStorage.setItem('cartItems' , JSON.stringify(cartItems))

}



export const RemoveCart = (pizza)=> (dispatch,getState) =>{
  
    dispatch({type:'DELETE_CART',payload: pizza})

    const cartItems = getState().addToCartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}
