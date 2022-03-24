import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Link ,useHistory} from 'react-router-dom';
import Error from '../common/Error';
import Loading from '../common/Loading';
import Navbar from '../common/Navbar';
import Success from '../common/Success';
import { registerAction } from './../redux/action/userAction';
import { useForm } from "react-hook-form";

function Register() { 
    const { register, handleSubmit, errors, watch } = useForm()
    const dispatch = useDispatch();
    
    const history = useHistory()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')
    const loginState = useSelector(state => state.registerReducer)
    const {error, loading,success} = loginState

    const onSubmit = (e) => {
        const user = {
            name,
            email,
            password,
            confirmpassword
        }
        dispatch(registerAction(user))
        setName([])
        setEmail([])
        setPassword([])
        setConfirmpassword([])
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
                    {loading ? <Loading/> : 
                    <> 
                    <h2 className="text-center m-2" style={{ fontSize: '35px' }}>Register</h2>
                    {success &&  <Success success="User registered successfully" /> }
                    {error &&   <Error error="Failed to register user" />   }
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                            <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            name="name" required className="form-control" ref={register({ minLength: 4 })} placeholder="Name" />
                            {errors.name && <span className="error red">Name is Must be 4 Character</span>}
                        </div>
                        <div className="form-group">
                            <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email" required className="form-control" ref={register({ required: true })} placeholder="Email" />
                            {errors.email && <span className="error red">Email is required</span>}
                        </div>
                        <div className="form-group">
                            <input 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"  name="password"
                                className="form-control" ref={register({ minLength: 8 })} placeholder="Password" />
                            {errors.password && <span className="error red">Password is Must be 8 Character</span>}
                        </div>
                        <div className="form-group">
                            <input
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                            type="password" required name="confirm_password" className="form-control" ref={register({
                                validate: (value) => value === watch('password')
                            })} placeholder="Confirm Password" />
                            {errors.confirm_password && <span className="error red">Passwords didn't match.</span>}
                        </div>
                        
                        <button type="submit" className="btn mt-4 mb-3">Register</button> 
                        <br />
                        <Link style={{ color: 'black' }} to="/login" >Click here to login</Link>          
                        </form>
                    </> 
                    } 
                </div>
            </div>
        </div>
    )
}

export default Register;
