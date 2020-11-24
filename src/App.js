import {Switch, Router} from 'react-router-dom'
import React, {Component} from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Default from './components/Default'
import Cart from './components/Cart'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/cart" component={Cart}/>
        <Route component={Default}/>

      </Switch>
    </React.Fragment>
  );
}

export default App;
