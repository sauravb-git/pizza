import React from 'react';
import Navbar from './common/Navbar';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,NavLink
} from "react-router-dom";



function route() {


  const routes = [
  {
    path: '/',
    component: Navbar,
    exact: true
  },
  {
    path: '/home',
    component: Navbar,
    exact: true
  }, 
]

const homes = [
  {
    path: '/saurav',
    component: Home,
    exact: true
  },
  {
    path: '/raju',
    component: Home,
    exact: true
  }, 
]

  
  
  return (
    <div className="App">
      
       {/* <Navbar />
       <Home />       */}
         {/* <Router>
           <Switch> 
          <Route path="/about">
             <h3>about</h3>
          </Route>
          <Route path="/users">
             <h2>users</h2>
          </Route>
          <Route exact path="/">
            <h1>home</h1>
          </Route> 
         </Switch>
        </Router> */}




    <Router>
      <Switch>
        {routes.map((route,i) => 
            <Route key={i} path={route.path} component={route.component} exact={route.exact} />
          )} 

          {homes.map((route,i) => 
            <Route key={i} path={route.path} component={route.component} exact={route.exact} />
          )} 


      </Switch>
    </Router>


          

    </div>
  );
}

export default home;




 