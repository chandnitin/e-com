import React, { Component } from 'react';
import MenuBar from './MenuBar'
import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import './main.css';
import Home from './components/Home';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import ConfirmBook from './components/PriceDetails';
import AddtoCart from './components/AddToCart';
class App extends Component {
  render() {
    return (
      <>
      
     
        <Router>
        <MenuBar/>
          <Switch>
          
          <Route path='/' exact component={Home}/>
          <Route path='/products'  component={Products}/>
          <Route path="/product/:id" component={ProductDetails} />
          <Route path='/booking/:id/:qty'  component={ConfirmBook}/>
          <Route path='/addtocart/:userid'  component={AddtoCart}/>
          
        
        </Switch>
        </Router>
      
      </>
    )
  }
}

export default App;
