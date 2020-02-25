import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import './styles/Main.sass'

import Navigation from './components/Navigation'
import LandingPage from "./pages/LandingPage";
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import ShopPage from './pages/ShopPage'
import BrregPage from './pages/Brreg'
import DeliveryCost from "./components/BringAPI/DeliveryCost";
import AddProduct from "./pages/AddProduct";

/* TODO Pages to implement:
import PasswordForgetPage from '../PasswordForget';
import AccountPage from '../Account';
import AdminPage from '../Admin';
 */

const App = () => {
    return (
        <Router>
            <div>
                <Navigation />
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route path="/deliverycost" component={DeliveryCost} />
          <Route path={ROUTES.BRREG} component={BrregPage} />
                <Route path={ROUTES.PRODUCTS} component={ShopPage} />
                <Route path={ROUTES.ADD_PRODUCT} component={AddProduct} />
            </div>
        </Router>
    );
};

export default App;
