import React ,{useState}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/action/userAction';

const Navbar = () => { 
    const dispatch = useDispatch()
    const cartState = useSelector(state=>state.addToCartReducer)
    const usersState = useSelector(state=>state.loginReducer)
    const [openDropdown, setOpenDropdown] = useState(false)


    const {currentUser} = usersState
 
 
     
    return (
        <>
            <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-body rounded" >
            <div className="container-fluid">
            <a className="navbar-brand" href="/">Pizza</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
             data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
              aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{marginLeft:'auto'}} >
                {currentUser
                            ? (
                                <div className="dropdown"
                                 onClick={()=>setOpenDropdown(!openDropdown)}
                                 >
                                    <a className="dropdown-toggle nav-link" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {currentUser.name}
                                    </a>
                                    <div
                                     className={`dropdown-menu ${openDropdown ? 'show' : ''}`} 
                                      aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Orders</a>
                                        <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutAction())}}>Logout</a>
                                    </div>
                                </div>
                            )
                            : (
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                            ) 
                        }
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/cart">
                        Cart  {cartState.cartItems.length}
                        </a>
                </li>
                </ul>
            </div>
            </div>
            </nav>
            

            
        </>
    );
};

export default Navbar;