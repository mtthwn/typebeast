import React from 'react';
import { Nav, Navbar, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.scss';
import Register from '../AuthenticationForms/Register';
import Login from '../AuthenticationForms/Login';

const Header = props => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="Navbar" variant="dark">
        <Navbar.Brand className="Navbar-brand">
          <Link to="/" className="nav-link">
            Typebeast
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="NavLinks mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/garage" className="nav-link">
              Garage
            </Link>
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
            <Link to="/play" className="nav-link">
              Play Now
            </Link>
          </Nav>
          <div inline className="Header-signup">
            <Register className="sign-up" />
            <Login className="login" />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
