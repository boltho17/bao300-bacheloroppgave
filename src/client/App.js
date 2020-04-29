import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import './styles/Main.sass'

import Navigation from './components/Navigation'
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage';
import ShopPage from './pages/ShopPage';
import DetailView from './pages/DetailView';
import AddProduct from "./pages/AddProduct";
import VendorSignUp from "./pages/VendorSignUp";
import Footer from "./components/Footer";
import SignUpPage from "./pages/CustomerSignUp";
import LandingPageVendor from './pages/LandingPageVendor';

import CartContext from '../client/contexts/CartContext';

const App = () => {

    const [selectedProduct, setSelectedProduct] = useState()

    const onSelect = (product) => {
        setSelectedProduct(prevState => {
            return(
                product
            )
        })
        // console.log(selectedProduct)
    }

    const [cartItems, setCartItems] = useState([]);

    return (
        <Router>
            <Switch>
                <React.Fragment>
                    <Navigation/>
                    <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                    <Route path={ROUTES.SIGN_IN} component={LoginPage}/>
                    <Route path={ROUTES.PRODUCTS} render={() => <ShopPage selectedProduct={selectedProduct} onSelect={onSelect}/>}/>
                    <Route path={ROUTES.VENDOR_SIGNUP} component={VendorSignUp}/>
                    <Route path={ROUTES.ADD_PRODUCT} component={AddProduct}/>
                    <Route path="/product/:id" exact render={() => <DetailView product={selectedProduct}/>} />
                    <Route path={ROUTES.LANDING_VENDOR} component={LandingPageVendor}/>
                    <Route path={ROUTES.PRODUCT_DETAIL_VIEW} component={DetailView}/>
                    <Footer/>
                </React.Fragment>
            </Switch>
        </Router>
    );
};

export default App;
