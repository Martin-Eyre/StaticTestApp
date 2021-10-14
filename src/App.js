import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';
import ProtectedRoute from './components/ProtectedRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


function App() {
  const [responseMessage, setResponseMessage] = useState('');


  useEffect(() => {
    (async function () {
      const url = "/api/message?test";
      const response = await fetch(url);
      const data = await response.json();
      setResponseMessage(data.message);
      console.log(data);
    })();
  });

  const api_regex = /^\/.auth\/.*/
  // if using "/api/" in the pathname, don't use React Router
  if (api_regex.test(window.location.pathname)) {
    console.log("hello");
    console.log(window.location.pathname);
       return <div /> // must return at least an empty div
  } else {
     // use React Router
  return (
    
    <>
    <Router>
      <Navbar/>
      {Home}
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/reports' component={Reports}/>
        <ProtectedRoute path='/products' component={Products}/>
      </Switch>
    </Router>      
    <div>Welcome to the home page {responseMessage}</div>
    </>
  )
  }
}

export default App;