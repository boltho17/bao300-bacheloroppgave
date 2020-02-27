import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import './styles/Main.sass'

import Navigation from './components/Navigation'
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage';
import ShopPage from './pages/ShopPage'
import AddProduct from "./pages/AddProduct";
<<<<<<< HEAD
import Footer from "./components/Footer"
=======
import SignUpPage from "./pages/SignUpPage";
>>>>>>> master



const App = () => {

    return (
        <Router>
            <div>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
                <Navigation />
                <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
                <Route path={ROUTES.SIGN_IN} component={LoginPage}/>
                <Route path={ROUTES.PRODUCTS} component={ShopPage}/>
                <Route path={ROUTES.ADD_PRODUCT} component={AddProduct}/>
            </div>

            
            <Footer />

        </Router>
    );
};

export default App;
