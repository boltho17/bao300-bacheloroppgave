import React, {useState } from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import './styles/Main.sass'

import Navigation from './components/Navigation'
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage';
import ShopPage from './pages/ShopPage';
import DetailView from './pages/DetailView';
import AddProduct from "./pages/AddProduct";
import VendorSignUp from "./pages/VendorSignUp";
import Footer from "./components/Footer"
import SignUpPage from "./pages/CustomerSignUp";

import CartContext from '../client/contexts/CartContext';


const App = () => {

    const [cartItems, setCartItems] = useState([]);

    return (
        <Router>
            <div>
                <CartContext.Provider value={{
                    items: cartItems
                }}>
                    <Navigation />
                </CartContext.Provider>
                <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                <Route path={ROUTES.SIGN_IN} component={LoginPage}/>
                <Route path={ROUTES.PRODUCTS} render={(props) => <ShopPage {...props} cartItems={cartItems} setCartItems={setCartItems} />}/>
                <Route path={ROUTES.PRODUCT} component={DetailView} />
                <Route path={ROUTES.VENDOR_SIGNUP} component={VendorSignUp}/>
                <Route path={ROUTES.ADD_PRODUCT} component={AddProduct}/>
                <Route path={ROUTES.PRODUCT_DETAIL_VIEW} component={DetailView}/>
                <Footer />
            </div>

        </Router>
    );
};

export default App;
