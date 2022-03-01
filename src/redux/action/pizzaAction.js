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