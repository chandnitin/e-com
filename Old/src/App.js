import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Report';
import Products from './pages/Products';
import TestBar from './components/TestBar';
import PersistentDrawerLeft from './components/PersistentDrawerLeft';
import './main.css';
function App() {
  return (
    < >
    <TestBar />
      {/* <Router>
        <Main />

      
       <TestBar/>
        <Switch>
        
          <Route path='/' exact component={Home}/>
          <Route path='/reports'  component={Reports}/>
          <Route path='/products'  component={Products}/>
        
        </Switch>
      </Router> */}
     </>
  );
}

export default App;
