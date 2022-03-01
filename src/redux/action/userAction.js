import axios from "axios";


export const registerAction = (user) =>async dispatch=>{
   
     dispatch({type:'USER_REGISTER_REQUEST'})

     try{
      const res = await axios.post('http://localhost:8000/api/users/register',user)
       
         dispatch({type:'USER_REGISTER_SUCCESS'})
          
     }catch(error){
       dispatch({type:'USER_REGISTER_FAILED',payload : error})
     }
}


export const loginAction = (user)  => async dispatch =>{

    dispatch({type:'USER_LOGIN_REQUEST'}) 
    try{
       
       const res = await axios.post('http://localhost:8000/api/users/login',user)
       dispatch({type:'USER_LOGIN_SUCCESS',payload: res.data}) 
       localStorage.setItem('currentUser', JSON.stringify(res.data))
       window.location.href = '/' 
    }catch(error){
        dispatch({type:'USER_LOGIN_FAILED',payload: error}) 
    } 
}

export const logoutAction = () => dispatch => {
    localStorage.removeItem('currentUser')
    window.location.href = '/login'
}