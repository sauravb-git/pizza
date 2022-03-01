import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => { 

    const cartState = useSelector(state=>state.addToCartReducer)
 
    
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
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Login</a>
                </li>
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