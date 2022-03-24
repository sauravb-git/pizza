import {combineReducers} from 'redux'

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { getAllPizzasReducer,addPizzaReducer,
  getPizzaByIdReducer,editPizzaReducer } from  './reducers/pizzaReducers';
import {addToCartReducer} from './reducers/cartReducer'
import { loginReducer, registerReducer,getAllUsersReducer } from './reducers/userReducer'; 
import { placeOrderReducer,getUserOrdersReducer, getAllOrdersReducer } from './reducers/oderReducer';



const AllReducers = combineReducers({
     getAllPizzasReducer : getAllPizzasReducer,
     addToCartReducer: addToCartReducer,
     registerReducer: registerReducer ,
     loginReducer : loginReducer,
     getAllUsersReducer:getAllUsersReducer,
     placeOrderReducer : placeOrderReducer, 
     getUserOrdersReducer : getUserOrdersReducer,
     getAllOrdersReducer : getAllOrdersReducer,
     addPizzaReducer : addPizzaReducer,
     getPizzaByIdReducer: getPizzaByIdReducer,
     editPizzaReducer: editPizzaReducer 

});

 
const cartItems = localStorage.getItem('cartItems') 
? JSON.parse(localStorage.getItem('cartItems')) : [] ;

const currentUser = localStorage.getItem('currentUser') 
? JSON.parse(localStorage.getItem('currentUser')) : [] ;
 
const init = {
  addToCartReducer : {
   cartItems : cartItems
  } ,
  loginReducer : {
    currentUser : currentUser
  }
}

const composeEnhancers = composeWithDevTools({});

const store = createStore(AllReducers,init ,composeEnhancers(applyMiddleware(thunk)));

export default store;