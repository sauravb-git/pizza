import React ,{useState}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useHistory } from 'react-router-dom';
import { logoutAction } from '../redux/action/userAction'; 

const Navbar = () => { 
    
    const history = useHistory()
    const dispatch = useDispatch()
    const cartState = useSelector(state=>state.addToCartReducer) 
    const [openDropdown, setOpenDropdown] = useState(false)

    const usersState = useSelector(state=>state.loginReducer)
    const {currentUser} = usersState
  

    const [isNavCollapsed, setIsNavCollapsed] = useState(true); 
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    

    
    
    return (
        <>
            <nav className="navbar navbar-light bg-light navbar-expand-lg shadow p-3 mb-5 bg-body rounded" >
            <div className="container-fluid">
            <Link  className="navbar-brand" to="/">Pizza</Link>
            
            <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
                <ul className="navbar-nav" style={{marginLeft:'auto'}} >

                     
                  { currentUser?.isAdmin === false || currentUser?.isAdmin === true 
                            ? (
                                <div className="dropdown"
                                 onClick={()=>setOpenDropdown(!openDropdown)}
                                 >
                                    <p className="dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className='fa fa-user-circle'></i>     {currentUser?.name}
                                    </p>
                                    <div  className={`dropdown-menu ${openDropdown ? 'show' : ''}`} 
                                      aria-labelledby="dropdownMenuButton">
                                       { currentUser?.isAdmin === true ?
                                        <Link className="dropdown-item" to="/admin">Admin Dashbord</Link> : " " }
                                        <Link className="dropdown-item" to="/orders">Orders</Link>
                                        <p className="dropdown-item"  
                                        onClick={()=>{dispatch(logoutAction(history))}}> 
                                     <i className='fas fa-sign-out-alt'></i>Logout</p>
                                    </div>
                                </div>
                            )
                            : (
                                <li className="nav-item"> 
                                    <Link className="nav-link" to="/login">
                                    <i className='fas fa-sign-in-alt'></i> Login</Link>
                                </li>
                            ) 
                        }  
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/cart"> 
                        <i className='fa fa-shopping-cart'></i>  Cart  {cartState.cartItems.length}  </Link>
                     </li>
                 </ul>
              </div>
            </div>
         </nav>  
        </>
    );
};

export default Navbar;