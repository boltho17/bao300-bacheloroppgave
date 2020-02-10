import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import './styles/Main.sass'
<<<<<<< HEAD
<<<<<<< Updated upstream
import LandingPage from "./pages/LandingPage";
import TopNavbar from './components/TopNavbar'
=======

import Navigation from './components/Navigation';
import LandingPage from "./pages/LandingPage";
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import DeliveryCost from "./components/BringAPI/DeliveryCost";
import Footer from './components/Footer';
=======

import Navigation from './components/Navigation'
import LandingPage from "./pages/LandingPage";
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import DeliveryCost from "./components/BringAPI/DeliveryCost";
>>>>>>> origin

/* TODO Pages to implement:
import PasswordForgetPage from '../PasswordForget';
import AccountPage from '../Account';
import AdminPage from '../Admin';
 */
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> origin

const App = () => {
    return (
        <Router>
<<<<<<< HEAD
<<<<<<< Updated upstream
            <TopNavbar />
            <LandingPage />
=======
=======
>>>>>>> origin
            <div>
                <Navigation />

                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route path="/deliverycost" component={DeliveryCost} />
            </div>
<<<<<<< HEAD
            
            <Footer />
>>>>>>> Stashed changes
=======
>>>>>>> origin
        </Router>
    );
};

export default App;
