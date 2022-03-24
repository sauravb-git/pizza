import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { Link } from "react-router-dom"; 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPizza from "./AddPizza";
import EditPizza from "./EditPizza";
import OrderLists from "./OrderLists";
import PizzaLists from "./PizzaLists";
import UserLists from "./UserLists";


const Admin = () => {
    const userstate = useSelector((state) => state.loginReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);
  
    return (
        <div>
            <div className="row justify-content-center p-3" style={{ padding: '0', margin: '0', textAlign: 'center' }} >
                <div className="col-md-10">
                <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

                <ul className="adminfunctions"> 
                    <li>
                    <Link to={'/'} style={{color: 'white',textDecoration:'none',cursor:'pointer'}}>My Website</Link>
                    </li> 
                    <li>
                    <Link to={'/admin/userslist'}  style={{color: 'white',textDecoration:'none',cursor:'pointer'}}>Users List</Link>
                    </li>
                    <li>
                    <Link to={'/admin/pizzaslist'}  style={{color: 'white',textDecoration:'none',cursor:'pointer'}}>Pizzas List</Link>
                    </li>
                    <li>
                    <Link to={'/admin/addpizza'} style={{color: 'white',textDecoration:'none',cursor:'pointer'}}>Add Pizza</Link>
                    </li>
                    <li>
                    <Link to={'/admin/orderslist'}  style={{color: 'white',textDecoration:'none',cursor:'pointer'}}>Orders List</Link>
                    </li>  
                </ul>

                

                        <Switch>
                            <Route path="/admin" component={UserLists} exact/>
                            <Route path="/admin/userslist" component={UserLists} exact/>
                            <Route path="/admin/orderslist" component={OrderLists} exact/>
                            <Route path="/admin/pizzaslist" component={PizzaLists} exact/>
                            <Route path="/admin/addpizza" component={AddPizza} exact/>
                            <Route path="/admin/editpizza/:pizzaid" component={EditPizza} exact/>
                        </Switch> 
                
                </div>
            </div> 
        </div>
    );
};

export default Admin;