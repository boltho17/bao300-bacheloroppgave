import React, {useState} from 'react';
import {Navbar} from 'react-bootstrap';
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom';

import * as ROUTES from '../constants/routes'

import {IconContext} from "react-icons";
import {FaRegUserCircle, FiSearch, TiShoppingCart} from "react-icons/all";
import firebase from "firebase/app";


const Navigation = ({userTypeString}) => {
    // Declare new state variables:
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if(userTypeString !== "" && !isLoggedIn) {
        setIsLoggedIn(true)
    }

    // LOG OUT USER
    const logoutUser = () => {
        firebase.auth().signOut().then(function () {
            console.log("Logout successful!")
        }).catch(function (error) {
            console.log(error)
        });
        userTypeString = "";
        setIsLoggedIn(false)
    };

    return (
        <Navbar className="top-navbar" expand="md">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src="logo512.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {'SocialCoffee'}
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="justify-content-end">
                <Nav className="d-md-flex d-block flex-row mx-md-auto mx-0">
                    <Link className="links" to={ROUTES.ADMIN}>Bli selger</Link>
                    <Link className="links new" to={ROUTES.PRODUCTS}>Nettbutikk</Link>
                    <Link className="links" to={ROUTES.ACCOUNT}>Om oss</Link>
                    {!isLoggedIn && <Link className="links" to={ROUTES.SIGN_IN}>Logg inn</Link>}
                </Nav>

                {!isLoggedIn &&
                <Link className="links" to={ROUTES.SIGN_UP}>
                    <button type="button" className="register-btn btn btn-outline btn-sm"
                            style={{fontSize: '11px'}}>Registrer
                    </button>
                </Link>}

                {isLoggedIn && userTypeString === "vendor" &&
                <Link className="links" to={ROUTES.ADD_PRODUCT}>
                    <button type="button" className="btn btn-primary btn-sm" style={{fontSize: '11px'}}>Nytt
                        produkt
                    </button>
                </Link>}

                <IconContext.Provider value={{color: "coral", size: "1.5em"}}>
                    <div className="icon-group">
                        <FiSearch/>
                        <TiShoppingCart/>

                        <button className="btn" onClick={() => logoutUser()} type="button"><FaRegUserCircle/>
                        </button>
                    </div>
                </IconContext.Provider>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
