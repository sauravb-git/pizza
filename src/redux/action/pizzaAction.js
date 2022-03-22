import axios from "axios";

export const getAllPizzas = () =>async dispatch=>{
     dispatch({type: 'GET_PIZZAS_REQUEST'});
     try{
       const response = await axios.get('http://localhost:8000/api/pizzas/getpizzas')
        
        dispatch({type: 'GET_PIZZAS_SUCCESS' ,payload : response.data});
     }catch(err){
        dispatch({type: 'GET_PIZZAS_ERROR' ,payload : err});
     }
}

export const filterPizzas = (searchkey , category) =>async dispatch=>{
   dispatch({type: 'GET_PIZZAS_REQUEST'});
   try{
      let filterPizza;
     const response = await axios.get('http://localhost:8000/api/pizzas/getpizzas')
     
      filterPizza = response.data.filter(pizza => pizza.name.toLowerCase().includes(searchkey))

     if(category !== 'all')
     {
       filterPizza = response.data.filter(pizza=>pizza.category.toLowerCase() === category) 
     }
     dispatch({type: 'GET_PIZZAS_SUCCESS' ,payload : filterPizza});
   }catch(err){
      dispatch({type: 'GET_PIZZAS_ERROR' ,payload : err});
   }
}