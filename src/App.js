import React from 'react';
import Navbar from './common/Navbar';
import Home from './screens/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from './screens/Cart';
import Login from './screens/Login';
import Register from './screens/Register';
import Order from './screens/Order';
import Admin from './screens/Admin/Admin';



function App() {
 
  return (
    <div className="App">  
       <Router>
         <Switch> 
          <Route exact path="/"  > <Home /> </Route> 
          <Route  path="/cart"  > <Cart /> </Route>

          <Route  path="/login"  ><Login />  </Route> 
          <Route  path="/register"  ><Register />  </Route> 
        
          <Route  path="/orders"  > <Order /> </Route> 
          <Route  path="/admin"  > <Admin /> </Route>  
        </Switch>
      </Router>  
    </div>
  );
}

export default App;




 