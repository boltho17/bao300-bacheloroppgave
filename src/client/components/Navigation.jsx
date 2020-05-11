import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import {IconContext} from "react-icons";
import {FiSearch, TiShoppingCart, FaRegUserCircle} from "react-icons/all";
import firebase from "firebase/app";
import {AuthContext} from "./Firebase/AuthContext";
import Cart from './Cart';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';


const Navigation = (props) => {

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
        if (reload) {
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    }, [reload]);


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="sm" className="top-navbar">
                <NavbarBrand href="/">SocialCoffee</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            {!userType && <NavLink tag={Link} className="links" to={{
                                pathname: ROUTES.LANDING_VENDOR,
                                param: setReloading
                            }}>Bli selger</NavLink>}
                        </NavItem>
                        <NavItem>
                            {userType === "vendor" &&
                            <NavLink tag={Link} className="links" to={ROUTES.VENDOR_DASHBOARD}>Dashboard</NavLink>}
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="links new" to={ROUTES.PRODUCTS}>Nettbutikk</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav className="links">
                                Om oss
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <NavLink tag={Link} to={ROUTES.VENDORS_PAGE}>Våre
                                        selgere</NavLink>
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                    <NavLink tag={Link} to="/about">Social Coffee</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            {!userType &&
                            <NavLink tag={Link} className="links" to={ROUTES.SIGN_IN}>
                                <button type="button" className="register-btn btn btn-outline btn-sm"
                                        style={{fontSize: '11px'}}>Logg Inn
                                </button>
                            </NavLink>}
                        </NavItem>
                        <NavItem>
                            {userType === "vendor" &&
                            <NavLink tag={Link} className="links" to={ROUTES.ADD_PRODUCT}>
                                <button type="button" className="register-btn btn btn-outline btn-sm" style={{fontSize: '11px'}}>Nytt
                                    produkt
                                </button>
                            </NavLink>}
                        </NavItem>

                    <IconContext.Provider value={{ color: "white", size: "1.5em" }}>
                        <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav className="links">
                                    <DropdownMenu>
                                        <DropdownItem>
                                            <div>???</div>
                                        </DropdownItem>
                                        <DropdownItem divider/>
                                        <DropdownItem>
                                            <div onClick={() => logoutUser()}>Logg ut</div>
                                        </DropdownItem>
                                    </DropdownMenu>
                                    <FaRegUserCircle />
                                </DropdownToggle>

                        </UncontrolledDropdown>

                        <NavItem>
                            <NavLink tag={Link} to={ROUTES.SEARCH} className="links">
                                <FiSearch />
                            </NavLink>
                        </NavItem>

                        <NavItem className="links">
                            <Cart>
                                <TiShoppingCart />
                            </Cart>
                        </NavItem>
                    </IconContext.Provider>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;

/*
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
                </Nav>

                {!userType &&
                <Link className="links" to={ROUTES.SIGN_IN}>
                    <button type="button" className="register-btn btn btn-outline btn-sm"
                            style={{fontSize: '11px'}}>Logg Inn
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
                        <Link to={ROUTES.SEARCH}>
                            <FiSearch />
                        </Link>

                        <Cart>
                          <TiShoppingCart/>
                        </Cart>

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


 */
