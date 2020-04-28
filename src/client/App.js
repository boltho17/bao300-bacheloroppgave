import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import './styles/Main.sass'

import Navigation from './components/Navigation'
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage';
import ShopPage from './pages/ShopPage'
import AddProduct from "./pages/AddProduct";
import VendorSignUp from "./pages/VendorSignUp";
import Footer from "./components/Footer"
import SignUpPage from "./pages/CustomerSignUp";
import LandingPageVendor from './pages/LandingPageVendor';
import VendorDashboard from './pages/VendorDashboard/VendorDashboard';




const App = () => {

    return (
        <Router>
            <div>
                <Navigation />
                <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                <Route path={ROUTES.SIGN_IN} component={LoginPage}/>
                <Route path={ROUTES.PRODUCTS} component={ShopPage}/>
                <Route path={ROUTES.VENDOR_SIGNUP} component={VendorSignUp}/>
                <Route path={ROUTES.ADD_PRODUCT} component={AddProduct} />
                <Route path={ROUTES.LANDING_VENDOR} component={LandingPageVendor}/>
                <Route path={ROUTES.VENDOR_DASHBOARD} component={VendorDashboard} />      
          <Footer />
            </div>

        </Router>
    );
};

export default App;