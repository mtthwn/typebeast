import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { logoutHandler, renderButtons, renderLinks } from './../../lib/headerHelpers'

import './Header.scss';

export default ({ user }) => {
  const renderedButtons = renderButtons(user.username);
  const authLinks = renderLinks(user.username);

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
            {authLinks}
            <Link to="/play" className="nav-link">
              Play Now
            </Link>
          </Nav>
          {renderedButtons}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
