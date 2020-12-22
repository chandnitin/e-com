import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './component/Main';
import Login from './component/Login';
import ModalPop from './component/ModalPop';
import './App.css';
import AddProduct from './component/seller/AddProduct';
import Slider from './component/Slider';

function App() {
  return (
    <>
     <Main />
    {/* <Login /> */}
    {/* <ModalPop /> */}
    
    
    <Router>
      <Route path="/" exact component={Slider}/>
      <Route path="/login"  component={Login}/>
      <Route path="/product" component={AddProduct}/>
    </Router>
    
    </>
   
  );
}

export default App;
