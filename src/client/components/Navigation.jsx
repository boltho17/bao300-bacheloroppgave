import React from 'react';
import {Navbar} from 'react-bootstrap';
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom';

import * as ROUTES from '../constants/routes'

import {IconContext} from "react-icons";
import {FiSearch, FaRegUserCircle, TiShoppingCart} from "react-icons/all";
import firebase from "firebase/app";

class Navigation extends React.Component {
    state = {
        customerSignedIn: false,
        vendorSignedIn: false
    };

    logoutUser = () => {
        firebase.auth().signOut().then(function() {
            console.log("Logout successful!")
        }).catch(function(error) {
            console.log(error)
        });
        this.setState({customerSignedIn: false, vendorSignedIn: false})
    };

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.setState({
                    isSignedIn: true
                });
            } else {
                this.setState({
                    isSignedIn: false
                });
            }
        })
    }

    render() {
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
                        {!this.state.customerSignedIn && <Link className="links" to={ROUTES.SIGN_IN}>Logg inn</Link>}
                    </Nav>

                    { !this.state.customerSignedIn &&
                    <Link className="links" to={ROUTES.SIGN_UP}>
                        <button type="button" className="btn btn-outline-dark btn-sm" style={{fontSize: '11px'}}>Registrer</button>
                    </Link> }

                    { this.state.vendorSignedIn &&
                    <Link className="links" to={ROUTES.ADD_PRODUCT}>
                        <button type="button" className="btn btn-primary btn-sm" style={{fontSize: '11px'}}>Nytt produkt</button>
                    </Link> }

                    <IconContext.Provider value={{color: "black", size: "1.5em"}}>
                        <div className="icon-group">
                            <FiSearch />
                            <TiShoppingCart />
                            { this.state.customerSignedIn && <button className="btn" onClick={() => this.logoutUser()} type="button"><FaRegUserCircle /></button> }
                        </div>
                    </IconContext.Provider>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navigation;
