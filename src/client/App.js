import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import './styles/Main.sass'

import Navigation from './components/Navigation'
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage';
import ShopPage from './pages/ShopPage'
import AddProduct from "./pages/AddProduct";
import VendorSignUp from "./pages/VendorSignUp";
import ProductDetailView from './pages/ProductDetailView';
import Footer from "./components/Footer";
import SignUpPage from "./pages/CustomerSignUp";
import LandingPageVendor from './pages/LandingPageVendor';
import VendorsPage from "./pages/VendorsPage";
import VendorDetailView from "./pages/VendorDetailView";
import VendorDashboard from './pages/VendorDashboard';


const App = () => {

    // Putter selected produkt eller selger objekt i state, og passer det til DetailView som props.
    const [selected, setSelected] = useState()
    const onSelect = (target) => {
        setSelected(prevState => {
            return (
                target
            )
        })
    }

    return (
        <Router>
            <Switch>
                <React.Fragment>
                    <Navigation/>
                    <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                    <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                    <Route path={ROUTES.SIGN_IN} component={LoginPage}/>
                    <Route path={ROUTES.PRODUCTS} render={() => <ShopPage onSelect={onSelect}/>}/>
                    <Route path={ROUTES.VENDOR_SIGNUP} component={VendorSignUp}/>
                    <Route path={ROUTES.ADD_PRODUCT} component={AddProduct}/>
                    <Route path="/product/:id" exact render={() => <ProductDetailView product={selected}/>}/>
                    <Route path="/vendor/:id" exact render={() => <VendorDetailView vendor={selected}/>}/>
                    <Route path={ROUTES.LANDING_VENDOR} component={LandingPageVendor}/>
                    <Route path={ROUTES.VENDORS_PAGE} render={() => <VendorsPage onSelect={onSelect}/>}/>
                    <Route path={ROUTES.VENDOR_DASHBOARD} component={VendorDashboard} />
                    <Footer/>
                </React.Fragment>
            </Switch>
        </Router>
    );
};

export default App;
