import React from 'react';
import {Navbar, Image} from 'react-bootstrap';
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom';

class MyNavbar extends React.Component {
    render() {
        return (
            <div>
                <Navbar className="myNavbar" expand="md">
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

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="mr-auto">
                            <Link className="links" to="/business">Thomas</Link>
                            <Link className="links" to="/entertainment">Olav</Link>
                            <Link className="links" to="/sports">Tobias</Link>
                            <Link className="links" to="/health">Julie</Link>
                            <Link className="links" to="/technology">Aleksandra</Link>
                            <Link className="links new" to="/newsposts/new">Create new</Link>
                        </Nav>

                        <Navbar.Text style={{fontSize: '10px', color: 'white'}}>
                            Signed in as: <a className="user-name" href="#login">Thomas Bjerke</a>
                            <Image className="avatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQFV9OckOCOTVA/profile-displayphoto-shrink_200_200/0?e=1585180800&v=beta&t=ZmpTmDficbrNq3-JBkFDwjwu_Yl37I7A0hfhPc_RaCo" />
                        </Navbar.Text>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default MyNavbar;
