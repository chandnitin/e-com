import React from 'react'
import {BrowserRouter  as Router,Route,Link} from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'
import Slider from './Slider';
import AddProduct from './seller/AddProduct';
export default function Main() {
    return (
        <div>
            <Header />
               
            <Footer />
        </div>
    )
}
