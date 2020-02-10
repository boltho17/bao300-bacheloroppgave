import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './styles/Main.sass'
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

/* TODO Pages to implement:
import PasswordForgetPage from '../PasswordForget';
import AccountPage from '../Account';
import AdminPage from '../Admin';
 */
>>>>>>> Stashed changes

const App = () => {
    return (
        <Router>
<<<<<<< Updated upstream
            <TopNavbar />
            <LandingPage />
=======
            <div>
                <Navigation />

                <Route exact path={ROUTES.LANDING} component={LandingPage} />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                <Route path={ROUTES.SIGN_IN} component={SignInPage} />
                <Route path="/deliverycost" component={DeliveryCost} />
            </div>
            
            <Footer />
>>>>>>> Stashed changes
        </Router>
    );
};

export default App;
