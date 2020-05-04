import React, {useContext, useEffect, useState} from 'react';
import {Navbar} from 'react-bootstrap';
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom';

import * as ROUTES from '../constants/routes'

import {IconContext} from "react-icons";
import {FiSearch, TiShoppingCart} from "react-icons/all";
import firebase from "firebase/app";
import {AuthContext} from "./Firebase/AuthContext";
import NavDropdown from "react-bootstrap/NavDropdown";


const Navigation = () => {

    // PRINTER INNLOGGET BRUKERS EPOST:
    // console.log(firebase.auth().currentUser?.email);

    // Access the user type globally from AuthContext (Customer or Vendor):
    let userType = useContext(AuthContext)?.userType;
    // console.log("Navigation.js: User type = " + userType);

    const [reload, setReload] = useState(false)

    const setReloading = (bool) => {
        setReload(bool);
    }

    // LOG OUT USER:
    const logoutUser = () => {
        firebase.auth().signOut().then(function () {
            console.log("Logout successful!")
        }).catch(function (error) {
            console.log(error)
        });
    };

    // Reloads the page after user is authenticated:
    useEffect(() => {
        if(reload) {
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }, [reload]);


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
            <Navbar.Collapse>
                <Nav className="d-md-flex d-block flex-row mx-md-auto mx-0">
                    {!userType && <Link className="links" to={{
                        pathname: ROUTES.LANDING_VENDOR,
                        param: setReloading
                    }}>Bli selger</Link>}
                    {userType === "vendor" && <Link className="links" to={ROUTES.VENDOR_DASHBOARD}>Dashboard</Link>}
                    <Link className="links new" to={ROUTES.PRODUCTS}>Nettbutikk</Link>
                    <Link className="links" to={ROUTES.VENDORS_PAGE}>Om oss</Link>
                    {!userType && <Link className="links" to={ROUTES.SIGN_IN}>Logg inn</Link>}
                </Nav>

                {!userType &&
                <Link className="links" to={ROUTES.SIGN_UP}>
                    <button type="button" className="register-btn btn btn-outline btn-sm"
                            style={{fontSize: '11px'}}>Registrer
                    </button>
                </Link>}

                {userType === "vendor" &&
                <Link className="links" to={ROUTES.ADD_PRODUCT}>
                    <button type="button" className="btn btn-primary btn-sm" style={{fontSize: '11px'}}>Nytt
                        produkt
                    </button>
                </Link>}

                <IconContext.Provider value={{color: "white", size: "1.5em"}}>
                    <div className="icon-group">
                        <FiSearch/>

                        <button className="btn" type="button">
                            <TiShoppingCart/>
                        </button>
                    </div>

                    <div>
                        {firebase.auth().currentUser?.email && <NavDropdown title="Velkommen!" id="basic-nav-dropdown">
                            {userType && <NavDropdown.Item>{userType}</NavDropdown.Item>}
                            <NavDropdown.Divider/>
                            {firebase.auth().currentUser?.email && <NavDropdown.Item onClick={() => logoutUser()}>Logg ut</NavDropdown.Item>}
                        </NavDropdown>}
                    </div>

                </IconContext.Provider>
            </Navbar.Collapse>
        </Navbar>
    );
};


export default Navigation;
