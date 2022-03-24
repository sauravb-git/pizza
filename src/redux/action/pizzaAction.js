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



export const addPizza=(pizza)=>async dispatch=>{
   dispatch({type:'ADD_PIZZA_REQUEST'})
   try {
       const response= await axios.post('http://localhost:8000/api/pizzas/addpizza' , {pizza})
      //  console.log(response);
       dispatch({type:'ADD_PIZZA_SUCCESS'})
   } catch (error) {
       dispatch({type:'ADD_PIZZA_FAILED' , payload : error})
   }
}



export const getPizzaById=(pizzaid)=>async dispatch=>{

   dispatch({type:'GET_PIZZABYID_REQUEST'}) 
   try {
       const response = await axios.post('http://localhost:8000/api/pizzas/getpizzabyid' , {pizzaid})
      //  console.log(response)
       dispatch({type:'GET_PIZZABYID_SUCCESS' , payload : response.data})
   } catch (error) {
       dispatch({type:'GET_PIZZABYID_FAILED' , payload : error})
   }

}


export const editPizza=(editedpizza)=>async dispatch=>{
   dispatch({type:'EDIT_PIZZA_REQUEST'})
   try {
       const response= await axios.post('http://localhost:8000/api/pizzas/updatepizza' , {editedpizza})
      //  console.log(response);
       dispatch({type:'EDIT_PIZZA_SUCCESS'})
       window.location.href='/admin/pizzaslist'
   } catch (error) {
       dispatch({type:'EDIT_PIZZA_FAILED' , payload : error})
   }
}

 

export const deletePizza=(pizzaid)=>async dispatch=>{
  
try {
   const delelte =await axios.post('http://localhost:8000/api/pizzas/deletepizza' , {pizzaid})
   alert('Pizza Deleted Successfully') 
   window.location.reload() 
} catch (error) {
   alert('Something went wrong')
   console.log(error);
  
}
      

}
