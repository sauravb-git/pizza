import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/action/userAction'; 

function Login() {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
     
    const login = (e) =>{
        e.preventDefault(); 
        const user = {
            email,
            password
        }
        dispatch(loginAction(user)) 
    }
     
    useEffect(() =>{
       if(localStorage.getItem('currentUser')){
          window.location.href = '/'
       }
    },[])


    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-start shadow p-3 mb-5 bg-white rounded">
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Login</h2>
                     
                    <div>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email" placeholder="email" className="form-control" />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password" placeholder="password" className="form-control" />

                        <button
                         onClick={login} 
                         className="btn mt-3 mb-3">Login</button>
                        <br/>
                        <a style={{color: 'black'}} href="/register">Click here to register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;