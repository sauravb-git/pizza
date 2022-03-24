import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import Error from '../common/Error';
import Loading from '../common/Loading';
import { loginAction } from '../redux/action/userAction';  
import Navbar from '../common/Navbar';
import { useHistory ,Link} from 'react-router-dom';

function Login() { 
    const history = useHistory() 
    const dispatch = useDispatch() 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const loginState = useSelector(state => state.loginReducer)
    const {error, loading} = loginState
    
    const login = (e) =>{
        e.preventDefault(); 
        const user = {
            email,
            password
        } 
        dispatch(loginAction(user,history)) 
    }
     
    useEffect(() =>{
       if(localStorage.getItem('currentUser')){
        history.push('/')
       }
    },[])


    return (
        <div>
            
            <Navbar />
            <div className="row justify-content-center mt-5"  style={{ padding: '0', margin: '0', textAlign: 'center' }}>
                <div className="col-md-5 mt-5 text-start shadow p-3 mb-5 bg-white rounded">
          
                   { loading ?   <Loading /> :  
                    <div>
                         <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Login</h2>
                         {error &&  <Error error="Invalid credentials" />  }
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email" placeholder="email" className="form-control mt-4" />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password" placeholder="password" className="form-control mt-4" />

                        <button
                         onClick={login} 
                         className="btn mt-3 mb-3">Login</button>
                        <br/> 
                        <Link style={{ color: 'black' }} to="/register" >Click here to register</Link> 
                    </div> 
                   }  
                </div>
            </div>
        </div>
    )
}

export default Login;
