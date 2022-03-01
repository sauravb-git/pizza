import {combineReducers} from 'redux'

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { getAllPizzasReducer } from  './reducers/pizzaReducers';
import {addToCartReducer} from './reducers/cartReducer'



const AllReducers = combineReducers({
     getAllPizzasReducer : getAllPizzasReducer,
     addToCartReducer: addToCartReducer
});

 
const cartItems = localStorage.getItem('cartItems') 
? JSON.parse(localStorage.getItem('cartItems')) : [] ;
 
 
const init = {
  addToCartReducer : {
   cartItems : cartItems
  } 
}

const composeEnhancers = composeWithDevTools({});

const store = createStore(AllReducers,init ,composeEnhancers(applyMiddleware(thunk)));

export default store;