import React, {useContext, useState} from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';

import * as ROUTES from './constants/routes';
import './styles/Main.sass'

import Navigation from './components/Navigation'
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage';
import SignInPage from './pages/LoginPage';
import ShopPage from './pages/ShopPage'
import AddProduct from "./pages/AddProduct";
import {AuthContext} from "./components/Firebase/AuthContext";
import GetUser from "./components/GetUser";

const App = () => {
    const [userType, setUserType] = useState("");

    function getUserType(type) {
        if (type === "customer" && userType === "") {
            setUserType("customer");
        }
        else if (type === "vendor" && userType === "") {
            setUserType("vendor")
        }
    }

    //console.log("The logged in user is of type: " + userType);


    // Grabs the signed in user's email from global context:
    const email = useContext(AuthContext)?.currentUser?.email;
       //     {GetUser(email, getUserType)}


    return (
        <Router>
            <div>
                <Navigation userTypeString={userType}/>
                <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                <Route path={ROUTES.SIGN_UP} component={LoginPage}/>
                <Route path={ROUTES.SIGN_IN} component={SignInPage}/>
                <Route path={ROUTES.PRODUCTS} component={ShopPage}/>
                <Route path={ROUTES.ADD_PRODUCT} component={AddProduct}/>
            </div>
        </Router>
    );
};

export default App;
