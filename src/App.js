import React from 'react';
import logo from './img/logo.png';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Details from './components/Details';
import Payment from './components/Payment';
import {Route, Switch} from 'react-router-dom';



function App() {
  return (
   <React.Fragment>

   <Navbar />


<Switch>
  <Route exact path='/' component={Home} />
  <Route exact path='/about' component={About} />
  <Route exact path='/products' component={Products} />
  <Route exact path='/payment' component={Payment} />
  <Route exact path='/details/:id' component={Details} />
</Switch>

 
 
 
 




   </React.Fragment>
  );
}

export default App;
