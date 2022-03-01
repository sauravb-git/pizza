
export const  AddToCartAction = (pizza,quantity,varient) => (dispatch , getState) =>{
   
     const cartItem = {
         name : pizza.name,
         _id : pizza._id,
         image: pizza.image,
         varient : varient,
         quantity : quantity,
         price : pizza.prices,
         prices : pizza.prices[0][varient] * quantity
     }
     dispatch({type: 'ADD_TO_CART',payload : cartItem})

     const cartItems = getState().addToCartReducer.cartItems 
     localStorage.setItem('cartItems' , JSON.stringify(cartItems))

}

