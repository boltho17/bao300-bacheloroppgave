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
import ListProducts from './pages/ListProducts'
import DeliveryCost from "./components/BringAPI/DeliveryCost";

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
                <Route path={ROUTES.PRODUCTS} component={ListProducts} />
            </div>
        </Router>
    );
};

export default App;
