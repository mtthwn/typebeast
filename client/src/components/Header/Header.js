import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.scss';
import Register from '../AuthenticationForms/Register';
import Login from '../AuthenticationForms/Login';

const Header = ({ user }) => {
  const renderButtons =
    user.username === 'Guest' ? (
      <div inline="true" className="Header-signup">
        <Register className="sign-up" />
        <Login className="login" />
      </div>
    ) : (
      <div inline="true" className="Header-signup">
      <button>{user.username}</button>
      </div>
    );

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
          {renderButtons}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
