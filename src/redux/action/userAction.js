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


export const loginAction = (user,history)  => async dispatch =>{

    dispatch({type:'USER_LOGIN_REQUEST'}) 
    try{ 
       const res = await axios.post('http://localhost:8000/api/users/login',user)
       dispatch({type:'USER_LOGIN_SUCCESS',payload: res.data}) 
       localStorage.setItem('currentUser', JSON.stringify(res.data))
       history.push('/')
    }catch(error){
        dispatch({type:'USER_LOGIN_FAILED',payload: error}) 
    } 
}

export const logoutAction = (history) => dispatch => {
    localStorage.removeItem('currentUser')
    window.location.href = '/login'
}



export const getAllUsers=()=>async dispatch=>{

    dispatch({type:'GET_USERS_REQUEST'})

    try {
        const response = await axios.get('http://localhost:8000/api/users/getallusers')
        console.log(response);
        dispatch({type:'GET_USERS_SUCCESS' , payload : response.data})
       
    } catch (error) {
        dispatch({type:'GET_USERS_FAILED' , payload : error})
    }

}

export const deleteUser=(userid)=>async dispatch=>{

    try {
        await axios.post('http://localhost:8000/api/users/deleteuser', {userid})
        alert('User deleted successfully')
        window.location.reload()
    } catch (error) {
        alert('Something went wrong')
        console.log(error);
    }

}