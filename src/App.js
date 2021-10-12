import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Reports from './pages/Reports';

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

  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/reports' component={Reports}/>
        <Route path='/products' component={Products}/>
      </Switch>
    </Router>      
      <div>Welcome to the home page {responseMessage}</div>
    </>
  );
}

export default App;